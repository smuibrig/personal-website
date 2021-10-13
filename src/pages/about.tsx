import React, { useEffect } from "react";
import { setColor, palette } from "../styles/utils";
import { PageContainer, Container } from "../styles/styles";
import styled from "styled-components";

export const AboutParagraph = styled.p`
  max-width: 35%;
  text-align: justify;
  @media (max-width: 600px) {
    max-width: 98%;
  }
`;

export default function About() {
  useEffect(() => {
    const links = document.querySelectorAll<HTMLElement>(".color-link");
    links.forEach((l) => {
      l.style.color = setColor(palette);
    });
  });

  return (
    <PageContainer>
      <Container>
        <h3>About</h3>
        <AboutParagraph>
          My love for coding first sparked while finishing my{" "}
          <a
            className="color-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.uni-potsdam.de/de/studium/studienangebot/masterstudium/master-a-z/linguistik-kommunikation-variation-mehrsprachigkeit-master"
          >
            MA in Communications and Linguistics
          </a>{" "}
          when I enrolled in a Computational Linguistics course which entailed
          language processing with Python.
        </AboutParagraph>
        <AboutParagraph>
          After gaining some professional experience in Marketing and
          Communications in the Berlin tech sector, I realised that I would like
          to learn the craft of building web applications myself.
        </AboutParagraph>
        <AboutParagraph>
          I quit my job and fully committed to learning how to program. As a
          Linguist, I put careful consideration into which programming language
          to focus on. JavaScript made the cut: it is the core technology that
          empowers interactive web applications, both on the frontend and server
          side with Node.js.
        </AboutParagraph>
        <AboutParagraph>
          Since Web technologies, frameworks and libraries are vast and
                    and numerous, I sought guidance in my study endeavour and
                    after researching different alternatives, I enrolled at{" "}
          <a
            className="color-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.spiced-academy.com/en"
          >
            SPICED Academy
          </a>{" "}
          , an intense three months bootcamp based in Berlin.
        </AboutParagraph>
        <AboutParagraph>
          After building my first{" "}
          <a
            href="https://jump-petition.herokuapp.com/register"
            className="color-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            full stack web apps
          </a>
          , working with{" "}
          <a
            href="https://github.com/smuibrig/millennial-terminal"
            className="color-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            third party APIs
          </a>{" "}
          and using frontend frameworks such as React.js, Vue.js and Gatsby, I
          joined{" "}
          <a
            className="color-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://elbstack.com/en/"
          >
            elbstack
          </a>
          , a Hamburg based web agency. Here I learn more about Web Development
          on the job from my experienced colleagues while supporting the team.
          Please have a look at some of my previous code on{" "}
          <a
            href="https://github.com/smuibrig"
            className="color-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
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
