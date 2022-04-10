import { useState } from "react";
import styled from "styled-components";
import UserFinderBox from "./components/UserFinderBox";
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.themeColor};
  height: 100vh;
  align-items: center;
`;

function App() {
  const [themeColor, setThemeColor] = useState("#040425");

  return (
    <MainContainer themeColor={themeColor}>
      <UserFinderBox themeColor={themeColor} setThemeColor={setThemeColor} />
    </MainContainer>
  );
}

export default App;
