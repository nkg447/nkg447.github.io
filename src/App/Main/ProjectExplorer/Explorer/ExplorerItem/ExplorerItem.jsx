import React, { Component } from "react";
import styled from "styled-components";
import { Folder, Description, ArrowDropDown } from "@material-ui/icons";

const typeToIcon = (type) => {
  if (type === "folder") {
    return <Folder style={iconStyle} />;
  } else if (type === "src") {
    return <Folder style={{ ...iconStyle, color: "#83cde7" }} />;
  } else {
    return <CodeFileIcon />;
  }
};

export default (props) => {
  const { item, onClick } = props;
  return (
    <Container
      onClick={item.type === "file" ? onClick : undefined}
      style={item.style}
      tabs={item.tabs}
    >
      <ArrowDropDown style={iconStyle} />
      {typeToIcon(item.type)}
      <Text pointer={item.type === "file"}>{item.title}</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: ${(props) => `${props.tabs}em`};
`;

const Text = styled.span`
  cursor: ${(props) => (props.pointer ? "pointer" : "alias")};
  white-space: nowrap;
`;

const iconStyle = {
  height: "0.9em",
  color: "#9a9fa7",
  marginRight: "0.1em",
};

const CodeFileIcon = styled.div`
  height: 0.9em;
  width: 0.9em;
  border-radius: 50%;
  background-color: #83cde7;
  margin-right: 0.2em;
`;
