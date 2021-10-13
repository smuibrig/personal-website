import styled from "styled-components";

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

export const TextContainer = styled.div`
  max-width: 400px;
  margin-bottom: 50px;
  text-align: justify;
  @media (max-width: 600px) {
    max-width: 98%;
  }
`;
