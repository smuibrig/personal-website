import React from "react";
import { graphql, Link } from "gatsby";

export default function Blog({ data }: any) {
  const { posts } = data.blog;

  return (
    <div>
      <h1>Posts</h1>

      {posts.map((post: any) => (
        <article key={post.id}>
          <Link to={post.fields.slug}>
            <h2>{post.frontmatter.title}</h2>
          </Link>
          {post.frontmatter.author}, {post.frontmatter.date}
          <p>{post.excerpt}</p>
        </article>
      ))}
      <a href="https://sophiecod.es" rel="noopener noreferrer">
        Go back
      </a>
    </div>
  );
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
          author
        }
        excerpt
        id
      }
    }
  }
`;
