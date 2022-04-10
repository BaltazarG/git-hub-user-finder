import { BsSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";

import styled from "styled-components";
const Button = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 10px;
  background-color: transparent;
  border: none;
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 1.3rem;
  color: #fff;
  transition: 0.5s;

  &:hover {
    font-size: 1.6rem;
    transition: 0.5s;
  }
`;
const ThemeChanger = ({ themeColor, setThemeColor }) => {
  const handleClick = () => {
    themeColor === "#040425"
      ? setThemeColor("#ececec")
      : setThemeColor("#040425");
  };
  return (
    <div>
      <Button type="button" onClick={handleClick}>
        {themeColor === "#ececec" || <BsSunFill />}
        {themeColor === "#040425" || <MdDarkMode />}
      </Button>
    </div>
  );
};

export default ThemeChanger;
