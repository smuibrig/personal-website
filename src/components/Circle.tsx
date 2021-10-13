import React from "react";
import styled, { keyframes } from "styled-components";

const CircleContainer = styled.div`
  height: 205px;
  width: 205px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
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

export default function AnimatedCircle(): JSX.Element {
  return (
    <CircleContainer>
      <Circle>&lt;h1&gt;Hi!&lt;/h1&gt;</Circle>
    </CircleContainer>
  );
}
