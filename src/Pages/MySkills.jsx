import React, { Component } from "react";
import styled from "styled-components";

export default () => {
  return (
    <Container>
      <LogoContainer>
        <Text>Programming Languages</Text>
        <div>
          <Logo src="./assets/logos/java.svg" />
          <Logo src="./assets/logos/js.svg" />
        </div>
      </LogoContainer>

      <LogoContainer>
        <Text>Backend Development</Text>
        <div>
          <Logo src="./assets/logos/spring.svg" />
          <Logo src="./assets/logos/node.svg" />
        </div>
      </LogoContainer>

      <LogoContainer>
        <Text>Frontend Development</Text>
        <div>
          <Logo src="./assets/logos/react.svg" />
          <Logo src="./assets/logos/html.svg" />
          <Logo src="./assets/logos/css.svg" />
          <Logo src="./assets/logos/electron.svg" />
        </div>
      </LogoContainer>

      <LogoContainer>
        <Text>Databases</Text>
        <div>
          <Logo src="./assets/logos/plsql.svg" />
          <Logo src="./assets/logos/mssql.svg" />
        </div>
      </LogoContainer>

      <LogoContainer>
        <Text>Others</Text>
        <div>
          <Logo src="./assets/logos/git.svg" />
          <Logo src="./assets/logos/linux.svg" />
        </div>
      </LogoContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 60%;
  min-width: 18em;
  display: flex;
  flex-direction: column;
`;

const LogoContainer = styled.div`
  border: 2px solid darkgrey;
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
  margin: 1em;
`;

const Text = styled.p`
  margin: 0.5em;
`;

const Logo = styled.img`
  width: 3em;
  height: 3em;
  padding: 0.2em;
  margin: 0.5em;
  border: 1px solid lightgrey;
`;
