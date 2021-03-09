import React, { Component } from "react";
import styled from "styled-components";
import { WebAsset, ArrowDropDown } from "@material-ui/icons";

export default () => {
  return (
    <Container>
      <WebAsset style={{ color: "#6e6e6e" }} />
      <Text>Project</Text>
      <ArrowDropDown style={{ color: "#6e6e6e" }} />
    </Container>
  );
};

const Container = styled.div`
  height: 1.5em;
  background-color: #ccd4e1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Text = styled.span`
  margin-left: 0.2em;
  margin-right: 0.2em;
`;
