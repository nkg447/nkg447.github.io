import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 1em;
  height: 1em;
  border-radius: 1em;
  margin-left: 0.5em;
  background-color: ${(props) => props.backgroundColor};
`;
export default Container;