import styled from "styled-components";

const DivError = styled.div`
  background-color: #df4759;
  width: 80%;
  border-radius: 8px;
  text-align: center;
`;

const MyH2 = styled.h2`
  font-family: "Roboto Mono", monospace;
  font-size: 1.2rem;
  font-weight: bold;
`;

const Error = () => {
  return (
    <DivError>
      <MyH2>User not found</MyH2>
    </DivError>
  );
};

export default Error;
