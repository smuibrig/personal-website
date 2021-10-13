import React from "react";
import { Link } from "gatsby";
import { PageContainer, Container, TextContainer } from "../styles/styles";
import styled from "styled-components";

interface PostListingProps {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

const StyledLink = styled(Link)`
  color: black;
  text-decoration: underline;
  text-decoration-style: dotted;
`;

export default function PostListing({
  slug,
  title,
  date,
  excerpt,
}: PostListingProps) {
  return (
    <PageContainer>
      <Container>
        <StyledLink to={slug}>
          <h3>{title}</h3>
        </StyledLink>
        {date}
        <TextContainer>
          <p>{excerpt}</p>
        </TextContainer>
      </Container>
    </PageContainer>
  );
}
