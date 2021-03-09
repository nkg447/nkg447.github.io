import React, { Component } from "react";
import styled from "styled-components";
import FileName from "./FileName/FileName";
import AboutMe from "../../../Pages/AboutMe";
import MyEducation from "../../../Pages/MyEducation";
import MySkills from "../../../Pages/MySkills";
import Content from "./Content/Content";

const fileToComponent = (file) => {
  if (file === "About Me") return <AboutMe />;
  if (file === "My Education") return <MyEducation />;
  if (file === "My Skills") return <MySkills />;
  return "hello";
};

export default (props) => {
  const { activeFile } = props;
  return (
    <Container>
      <FileName title={activeFile?.title} />
      <Content>{fileToComponent(activeFile?.title)}</Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;
