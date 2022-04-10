import styled from "styled-components";
import ThemeChanger from "./ThemeChanger";
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;
const Title = styled.h1`
  font-family: "Ubuntu", sans-serif;
  font-weight: 700;
  color: #fff;
  font-style: italic;
  font-size: 1.3rem;
`;
const TopBar = ({ themeColor, setThemeColor }) => {
  return (
    <>
      <Header>
        <Title>DevFinder</Title>
        <ThemeChanger themeColor={themeColor} setThemeColor={setThemeColor} />
      </Header>
    </>
  );
};

export default TopBar;
