import React from "react";
import styled from "styled-components";

export default () => {
  return (
    <Container>
      <h4>
        Hi,
        <br /> You have reached nikunjgupta-portfolio. Click on any of the file
        on the project explorer to see the source code.
      </h4>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
