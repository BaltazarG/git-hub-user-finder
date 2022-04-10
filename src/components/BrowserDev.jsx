import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

const InputContainer = styled.div`
  background-color: #15157e;
  padding: 4px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 80%;
`;
const InputBar = styled.input`
  width: 80%;
  border: none;
  outline: none;
  background-color: #15157e;
  color: #fff;
  font-family: "Roboto Mono", monospace;
`;
const SearchButton = styled.button`
  background-color: #1a4bec;
  padding: 4px;
  border-radius: 4px;
  border: none;
  font-family: "Roboto Mono", monospace;
  align-items: center;
  color: #fff;
  font-weight: bold;
  transition: 0.5s;
  font-size: 0.8rem;

  &:hover {
    background-color: #000058;
    transition: 0.5s;
  }
`;

const BrowserDev = ({
  search,
  setSearch,
  setConsult,
  setData,
  setLoading,
  error,
  setError,
}) => {
  const handleChange = (e) => {
    setSearch({ value: e.target.value });
  };
  const handleClick = async () => {
    try {
      setLoading(true);
      const profile = await fetch(`https://api.github.com/users/${search}`);
      const profileJson = await profile.json();

      if (profileJson) {
        setData(profileJson);
        setConsult(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <InputContainer>
        <BsSearch style={{ color: "#1a4bec", fontSize: "18px" }} />
        <InputBar
          placeholder="Search GitHub username..."
          onChange={handleChange}
          value={search.value}
        />
        <SearchButton type="button" onClick={handleClick}>
          Search
        </SearchButton>
      </InputContainer>
    </>
  );
};

export default BrowserDev;
