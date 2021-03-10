import React, { useState } from "react";
import styled from "styled-components";
import ProjectExplorer from "./ProjectExplorer/ProjectExplorer";
import Editor from "./Editor/Editor";

import data from "../../data.json";

const dataParser = (data, tabs = 0) => {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    const { children, ...stuff } = data[i];
    result.push({ ...stuff, tabs });
    const childrens = dataParser(data[i].children, tabs + 1);
    childrens.forEach((element) => {
      result.push(element);
    });
  }
  return result;
};

export default () => {
  const [activeFile, setActiveFile] = useState(undefined);
  const activeFileHandler = (file) => {
    console.log(file);
    setActiveFile(file);
  };
  const items = dataParser(data);
  return (
    <Container>
      <Body>
        <ProjectExplorer activeFileHandler={activeFileHandler} items={items} />
        <Editor activeFile={activeFile} />
      </Body>
      <Footer>
        <Button target="_blank" href="https://github.com/nkg447">
          <Logo
            src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg"
            alt="nkg447"
          />
          github
        </Button>
        <Button target="_blank" href="https://fb.com/nikunj.gupta.3557">
          <Logo
            src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/facebook.svg"
            alt="nikunj.gupta.3557"
          />
          facebook
        </Button>
        <Button
          target="_blank"
          href="https://www.linkedin.com/in/nikunj-gupta-a49034129/"
        >
          <Logo
            src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg"
            alt="nikunj-gupta-a49034129"
          />
          linkedIn
        </Button>
        <Button
          target="_blank"
          href="https://www.hackerrank.com/nikunj_gupta447"
        >
          <Logo
            src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/hackerrank.svg"
            alt="nikunj_gupta447"
          />
          hackerrank
        </Button>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
`;
const Body = styled.div`
  height: 95vh;
  display: flex;
  width: 100%;
  justify-content: flex-start;
`;

const Footer = styled.div`
  background-color: #e4e6eb;
  position: absolute;
  width: 99vw;
  overflow-x: hidden;
  height: 1.6em;
  bottom: 0.2em;
  left: 0em;
  margin-left: 0.2em;
  border: 1px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 0.5em;
  margin-left: 0.5em;
  text-decoration: none;
  color: black;
`;

const Logo = styled.img`
  width: 0.8em;
  height: 0.8em;
  margin-right: 0.2em;
  margin-left: 0.2em;
`;
