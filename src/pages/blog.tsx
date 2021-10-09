import React, { useEffect } from "react";
import { graphql } from 'gatsby'
import { setColor, palette } from "../utils";
import { PageContainer, Container } from "./index";
import { AboutParagraph } from "./about"; 

export const query = graphql
`
    query BlogQuery {
        allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { published: { eq: true } } }
        ) {
            nodes {
                id
                excerpt(pruneLength: 250)
                frontmatter {
                    title
                    date
                }
            }
        }
    }
`

interface Frontmatter {
    "title": string,
    "date": string 
}

interface DataProps {

    "allMdx":{
        "nodes": {
            "id": string,
            "excerpt": string,
            "frontmatter": Frontmatter 
        }[]
    }
}


export default function Blog(data: any) {    
    useEffect(() => {
        const links = document.querySelectorAll<HTMLElement>(".color-link");
        links.forEach((l) => {
            l.style.color = setColor(palette);
        });
        console.log(data);

    });

    return (
        <PageContainer>
            <Container>
                <AboutParagraph>
                {data.allMdx.nodes.map(node => (
                    <>
                        <h1>{node.frontmatter.title}</h1>
                        <p>{node.frontmatter.date}</p>
                        <p>{node.excerpt}</p>
                    </>
                ))}
                    
                </AboutParagraph>
                <a
                    href="https://sophiecod.es"
                    className="color-link"
                    rel="noopener noreferrer"
                    id="go-back-link"
                >
                    Go back
                </a>
            </Container>
        </PageContainer>
    );
}