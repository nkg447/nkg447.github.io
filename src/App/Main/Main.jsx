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
      <ProjectExplorer activeFileHandler={activeFileHandler} items={items} />
      <Editor activeFile={activeFile} />
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
`;
