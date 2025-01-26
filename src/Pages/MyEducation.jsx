import React from "react";
import styled from "styled-components";

export default () => {
  return (
    <Container>
      <Text>
        <strong>B.Tech. CSE</strong>
      </Text>
      <Text>University of Petroleum and Energy Studies</Text>
      <Container
        style={{ flexDirection: "row", justifyContent: "space-between" }}
      >
        <Duration>07/2015 - 05/2019</Duration>
        <Duration>Dehradun, India</Duration>
      </Container>
    </Container>
  );
};

const Container = styled.div`
  width: 60%;
  min-width: 18em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const Text = styled.p`
  margin: 0px;
  font-size: 1.5em;
`;

const Duration = styled.p`
  margin: 0px;
  font-size: 1em;
  color: grey;
`;
