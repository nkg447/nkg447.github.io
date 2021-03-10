import React from "react";
import styled from "styled-components";

export default () => {
  return (
    <Container>
      <embed
        src="./assets/Nikunj's Resume.pdf"
        style={{ width: "100%", height: "90vh" }}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
