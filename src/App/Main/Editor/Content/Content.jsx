import React, { Component } from "react";
import styled from "styled-components";

export default (props) => {
  const { children } = props;
  return <Container>{children}</Container>;
};

const Container = styled.div`
  width: 100%;
  height: 95vh;
  padding-bottom: 5em;
  padding-left: 1em;
  background-color: #f2f3f7;
  overflow-y: scroll;
`;
