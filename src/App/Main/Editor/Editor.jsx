import React from "react";
import styled from "styled-components";
import FileName from "./FileName/FileName";
import AboutMe from "../../../Pages/AboutMe";
import MyEducation from "../../../Pages/MyEducation";
import MySkills from "../../../Pages/MySkills";
import MyProjects from "../../../Pages/MyProjects";
import Default from "../../../Pages/Default";
import Content from "./Content/Content";

const fileToComponent = (file) => {
  if (file === "About Me") return <AboutMe />;
  if (file === "My Education") return <MyEducation />;
  if (file === "My Skills") return <MySkills />;
  if (file === "My Projects") return <MyProjects />;
  return <Default />;
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
