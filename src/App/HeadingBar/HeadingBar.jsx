import React, { Component } from "react";
import NavButton from "./NavButton/NavButton";
import styled from "styled-components";

export default () => {
  return (
    <Container>
      <NavContainer>
        <NavButton backgroundColor="#e64f50" />
        <NavButton backgroundColor="#ebaf5f" />
        <NavButton backgroundColor="#6bbd4e" />
      </NavContainer>
      <Title>Nikunj Gupta</Title>
    </Container>
  );
};

const Container = styled.div`
  height: 1.5em;
  background-color: #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
  border-bottom: 1px solid grey;
`;

const NavContainer = styled.div`
  display: flex;
`;

const Title = styled.span`
  width: 100%;
  text-align: center;
`;
