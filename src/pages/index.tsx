import React, { useEffect } from "react";
import { Link } from "gatsby";
import { setColor, palette } from "../utils";
import styled from "styled-components";
import AnimatedCircle from "../components/Circle";

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
        <AnimatedCircle />
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
          . To learn about my education and professional experience either
          download my{" "}
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
          <a className="color-link" href="mailto:sophiemulleruibrig@gmail.com">
            reach out
          </a>
          . On my{" "}
          <Link className="color-link" to="/blog/">
            blog
          </Link>{" "}
          I write about my most recent learnings and things that interest me.
        </BioContainer>
      </ContentContainer>
    </PageContainer>
  );
}
