import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { PageContainer, Container } from "../styles/styles";
import styled from "styled-components";

const TextContainer = styled.div`
  max-width: 600px;
  margin-bottom: 50px;
  text-align: justify;
  @media (max-width: 600px) {
    max-width: 98%;
  }
`;

const HeaderContainer = styled(Container)`
  margin: 80px 0;
`

export default function BlogPost({ data }: any) {
  const post = data.markdownRemark;
  const featuredImgFluid =
    post.frontmatter?.featuredImage?.childImageSharp?.fluid;

  return (
    <PageContainer>
      <Container>
        <TextContainer>
          <HeaderContainer>
            <h1>{post.frontmatter.title}</h1>
            <small>{post.frontmatter.date}</small>
          </HeaderContainer>
          {featuredImgFluid && <Img fluid={featuredImgFluid} />}
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </TextContainer>
      </Container>
    </PageContainer>
  );
}
export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
