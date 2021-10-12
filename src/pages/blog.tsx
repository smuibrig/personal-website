import React from "react";
import { graphql } from "gatsby";

export default function Blog({ data }: any) {
  const { posts } = data.blog;

  return (
    <div>
      <h1>Posts</h1>

      {posts.map((post: any) => (
        <article key={post.id}>
          <h2>{post.frontmatter.title}</h2>
          {post.frontmatter.author}, {post.frontmatter.date}
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
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
