import HeadingBar from "./App/HeadingBar/HeadingBar";
import TopBar from "./App/TopBar/TopBar";
import Main from "./App/Main/Main";
import styled from "styled-components";
function App() {
  return (
    <Container>
      <HeadingBar />
      <TopBar />
      <Main />
    </Container>
  );
}

export default App;

const Container = styled.div`
  margin: 0.2em;
  height: 99vh;
  width: 99vw;
  overflow-y: hidden;
  border: 1px solid grey;
`;
