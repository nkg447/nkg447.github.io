import React from "react";
import styled from "styled-components";
import { isDesktop } from "../common/helper";

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
      <LogoContainer>
        <img
          align="left"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=nkg447&amp;layout=compact&amp;hide=html"
          alt="nkg447"
          style={{ width: isDesktop() ? "auto" : "100%" }}
        />
      </LogoContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 40%;
  min-width: 18em;
  display: flex;
  flex-wrap: wrap;
`;

const LogoContainer = styled.div`
  border: 2px solid darkgrey;
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
  margin: 1em;
  background-color: white;
  width: ${isDesktop() ? "initial" : "100%"};
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
