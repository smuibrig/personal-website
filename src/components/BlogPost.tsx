import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

export default function BlogPost({ data }: any) {
  const post = data.markdownRemark;
  const featuredImgFluid =
    post.frontmatter?.featuredImage?.childImageSharp?.fluid;

  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <small>{post.frontmatter.date}</small>
      {featuredImgFluid && <Img fluid={featuredImgFluid} />}
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Link to="/blog/">go back</Link>
    </div>
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
