import styled from "styled-components";
import BrowserDev from "./BrowserDev";
import TopBar from "./TopBar";
import ResultData from "./ResultData";
import { useState } from "react";
import Loader from "./Loader";
import Error from "./Error";

const FinderContainer = styled.div`
  background-color: #000058;
  width: 800px;
  height: auto;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  gap: 10px;
  align-items: center;
`;
const initialForm = {
  value: "",
};
const UserFinderBox = ({ themeColor, setThemeColor }) => {
  const [search, setSearch] = useState(initialForm);
  const [consult, setConsult] = useState(false);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  return (
    <FinderContainer>
      <TopBar themeColor={themeColor} setThemeColor={setThemeColor} />
      <BrowserDev
        search={search.value}
        setSearch={setSearch}
        consult={consult}
        setConsult={setConsult}
        data={data}
        setData={setData}
        setLoading={setLoading}
        error={error}
        setError={setError}
      />

      {consult && data.created_at ? (
        <ResultData data={data} setData={setData} />
      ) : (
        ""
      )}
      {consult && !data.created_at ? <Error /> : ""}
      {loading && <Loader />}
    </FinderContainer>
  );
};

export default UserFinderBox;
