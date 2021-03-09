import React, { Component } from "react";
import styled from "styled-components";
import {
  FolderOpen,
  Save,
  Sync,
  ArrowBack,
  ArrowForward,
  Build,
  PlayArrow,
  BugReport,
  WebAsset,
  ArrowDropDown,
} from "@material-ui/icons";

export default () => {
  return (
    <Container>
      <ButtonsContainer>
        <FolderOpen style={iconStyle} />
        <Save style={iconStyle} />
        <Sync style={iconStyle} />
      </ButtonsContainer>
      <ButtonsContainer>
        <ArrowBack style={iconStyle} />
        <ArrowForward style={iconStyle} />
      </ButtonsContainer>
      <ButtonsContainer>
        <Build style={{ ...iconStyle, color: "#508f2c" }} />
        <RunConfig>IDEA</RunConfig>
        <PlayArrow style={{ ...iconStyle, color: "#508f2c" }} />
        <BugReport style={{ ...iconStyle, color: "#508f2c" }} />
      </ButtonsContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 1.5em;
  background-color: #f2f2f2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ButtonsContainer = styled.div`
  margin-right: 0.2em;
  margin-left: 0.2em;
  border-right: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RunConfig = () => {
  return (
    <RunConfigContainer>
      <WebAsset style={{ height: "0.7em", color: "#83cde7" }} />
      <Text>IDEA</Text>
      <ArrowDropDown />
    </RunConfigContainer>
  );
};

const RunConfigContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 1.2em;
  border: 1px solid grey;
`;

const iconStyle = {
  height: "0.8em",
  color: "#6e6e6e",
  marginLeft: "0.1em",
  marginRight: "0.1em",
};

const Text = styled.span`
  font-size: 0.8em;
`;
