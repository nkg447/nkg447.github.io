import React, { Component } from "react";
import TopBar from "./TopBar/TopBar.jsx";
import Explorer from "./Explorer/Explorer";
import styled from "styled-components";

export default (props) => {
  const { items, activeFileHandler } = props;
  return (
    <Container>
      <TopBar />
      <Explorer activeFileHandler={activeFileHandler} items={items} />
    </Container>
  );
};

const Container = styled.div`
  border-right: 2px solid grey;
  height: 100%;
`;
