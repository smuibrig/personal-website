import React, { useEffect } from "react";
import { Link } from "gatsby";
import { setColor, palette } from "../utils";
import styled, { keyframes } from "styled-components";

export const PageContainer = styled.div`
    box-sizing: border-box;
    font-family: "Roboto Mono", monospace;
    display: flex;
    justify-content: center;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContentContainer = styled(Container)`
    margin-top: 80px;
`;

const CircleContainer = styled.div`
    height: 205px;
    width: 205px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px;
`;

const BioContainer = styled.div`
    max-width: 400px;
    margin-bottom: 50px;
    text-align: justify;
    @media (max-width: 600px) {
        max-width: 98%;
    }
`;

const Name = styled.h1`
    @media (max-width: 600px) {
        font-size: 25px;
    }
`;

const Profession = styled.h2`
    margin-top: -20px;
    color: grey;
    @media (max-width: 600px) {
        font-size: 20px;
    }
`;

const grow = keyframes`
0% {
    height: 80px;
    width: 80px;
    font-size: 8px;
}
12.5% {
    font-size: 12px;
}
25% {
    background-color: lightcyan;
    font-size: 16px;
}
37.5% {
    background-color: lightcyan;
    font-size: 18px;
}
50% {
    height: 200px;
    width: 200px;
    background-color: lightyellow;
    font-size: 20px;
}
62.5% {
    background-color: lightyellow;
    font-size: 18px;
}
75% {
    background-color: lightcyan;
    font-size: 12px;
}
87.5% {
    background-color: lightcyan;
    font-size: 10px;
}
100% {
    font-size: 8px;
    height: 80px;
    width: 80px;
    background-color: lightblue;
}
`;

const Circle = styled.div`
    height: 80px;
    width: 80px;
    background-color: lightblue;
    border-radius: 50%;
    animation: ${grow} 30s infinite;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function Home() {
    useEffect(() => {
        const links = document.querySelectorAll<HTMLElement>(".color-link");
        links.forEach((l) => {
            l.style.color = setColor(palette);
        });
    });

    return (
        <PageContainer>
            <ContentContainer>
                <Container>
                    <Name>Sophie Müller-Uibrig</Name>
                    <Profession>Software Engineer</Profession>
                </Container>
                <CircleContainer>
                    <Circle>&lt;h1&gt;Hi!&lt;/h1&gt;</Circle>
                </CircleContainer>
                <BioContainer>
                    I'm Sophie, a Software Engineer at{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="color-link"
                        href="https://elbstack.com/en/"
                    >
                        elbstack
                    </a>{" "}
                    with a{" "}
                    <Link className="color-link" to="/about/">
                        background
                    </Link>{" "}
                    in Linguistics. Find my code and latest projects on{" "}
                    <a
                        href="https://github.com/smuibrig"
                        className="color-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                    . To learn about my education and professional experience
                    either download my{" "}
                    <a
                        href={"/CV_SOPHIE.pdf"}
                        className="color-link"
                        download="CV_SOPHIE.pdf"
                    >
                        CV
                    </a>
                    , or visit my{" "}
                    <a
                        className="color-link"
                        href="https://www.linkedin.com/in/sophiemulleruibrig/"
                    >
                        LinkedIn
                    </a>{" "}
                    profile. Interested in working with me? Feel free to {"  "}
                    <a
                        className="color-link"
                        href="mailto:sophiemulleruibrig@gmail.com"
                    >
                        reach out
                    </a>
                    .
                </BioContainer>
            </ContentContainer>
        </PageContainer>
    );
}
