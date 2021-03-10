import React, { useState } from "react";
import TopBar from "./TopBar/TopBar.jsx";
import Explorer from "./Explorer/Explorer";
import styled from "styled-components";

import { Folder } from "@material-ui/icons";

export default (props) => {
  const { items, activeFileHandler } = props;
  const [openExplorer, setOpenExplorer] = useState(window.innerWidth > 700);
  const activeFileHandlerMiddle = (data) => {
    setOpenExplorer(window.innerWidth > 700);
    activeFileHandler(data);
  };
  return (
    <>
      <Sidebar>
        <div
          onClick={() => {
            setOpenExplorer(!openExplorer);
          }}
          style={{ cursor: "pointer" }}
        >
          <div
            style={{
              width: "1.3em",
              height: "5em",
              backgroundColor: openExplorer ? "#c3c6c9" : "transparent",
            }}
          ></div>
          <VerticalText
            style={{
              backgroundColor: openExplorer ? "#c3c6c9" : "transparent",
            }}
          >
            <Folder style={iconStyle} />
            Project
          </VerticalText>
        </div>
      </Sidebar>
      {openExplorer && (
        <Container>
          <TopBar />
          <Explorer activeFileHandler={activeFileHandlerMiddle} items={items} />
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  border: 2px solid grey;
  height: 100%;
`;

const Sidebar = styled.div`
  border: 2px solid grey;
  background-color: #e4e6eb;
  width: 1.5em;
  height: 100%;
`;

const VerticalText = styled.div`
  display: flex;
  align-items: center;
  background-color: #c3c6c9;
  transform: rotateZ(270deg);
  border-left: 1px solid grey;
`;
const iconStyle = {
  height: "0.5em",
  width: "0.5em",
  color: "#6e6e6e",
  marginLeft: "0.1em",
  marginRight: "0.2em",
  transform: "rotateZ(-270deg)",
};
