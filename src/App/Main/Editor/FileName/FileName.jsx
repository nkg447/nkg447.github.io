import React, { Component } from "react";
import styled from "styled-components";
import { Close } from "@material-ui/icons";
export default (props) => {
  return (
    <>
      <Container>
        <File>
          <Icon></Icon>
          <Text>{props.title}</Text>
          <Close style={{ color: "#c0c6c9", height: "0.6em" }}></Close>
        </File>
      </Container>
      <div style={{ height: "0.2em", borderBottom: "1px solid grey" }}></div>
    </>
  );
};

const Container = styled.div`
  height: 1.5em;
  background-color: #e4e6eb;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid grey;
`;

const File = styled.div`
  margin-left: 0.2em;
  margin-top: 0.2em;
  height: 1.3em;
  background-color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-top: 1px solid grey;
  border-left: 1px solid grey;
  border-right: 1px solid grey;
  border-bottom: 1px solid white;
`;
const Icon = styled.div`
  min-width: 0.9em;
  min-height: 0.9em;
  border-radius: 50%;
  background-color: #83cde7;
  margin-left: 0.2em;
  margin-right: 0.2em;
`;
const Text = styled.span`
  margin-left: 0.2em;
  margin-right: 0.2em;
`;
