import React, { Component } from "react";
import styled from "styled-components";

export default () => {
  return (
    <Container>
      <DP src="./assets/croped-dp.jpg" />
      <div align="center">
        <h1 align="center">Hi 👋, I'm Nikunj Kumar Gupta</h1>
        <h3 align="center">
          Developer 👨&zwj;💻 | Geek 🤓 | Programming Enthusiast 🤷&zwj;♂
        </h3>
        <h4>
          📫 Reach me at &nbsp;
          <a href="mailto:nikunj.gupta447@gmail.com">
            nikunj.gupta447@gmail.com
          </a>
        </h4>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const DP = styled.img`
  width: 6em;
  height: 6em;
  border-radius: 100%;
  margin-right: 16px;
`;
