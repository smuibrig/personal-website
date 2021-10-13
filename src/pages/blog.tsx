import React from "react";
import { graphql } from "gatsby";
import { PageContainer, Container } from "../styles/styles";
import styled from "styled-components";
import PostListing from "../components/PostListing";

const Header = styled.h1`
  margin-top: 80px;
`;

export default function Blog({ data }: any) {
  const { posts } = data.blog;

  return (
    <PageContainer>
      <Container>
        <Header>Posts</Header>
        {posts.map((post: any) => (
          <PostListing
            key={post.id}
            slug={post.fields.slug}
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            excerpt={post.excerpt}
          />
        ))}
        <Container>
          <a href="https://sophiecod.es" rel="noopener noreferrer">
            Go back
          </a>
        </Container>
      </Container>
    </PageContainer>
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
