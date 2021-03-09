import React, { Component } from "react";
import styled from "styled-components";

import ExplorerItem from "./ExplorerItem/ExplorerItem";

export default (props) => {
  const { items, activeFileHandler } = props;
  return (
    <Container>
      {items.map((e) => (
        <ExplorerItem onClick={() => activeFileHandler(e)} item={e} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding-right: 1em;
`;
