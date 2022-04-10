import styled from "styled-components";
import { MdLocationPin } from "react-icons/md";
import { BsTwitter, BsLink45Deg, BsGithub } from "react-icons/bs";

const DataBox = styled.div`
  width: 80%;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  background-color: #15157e;
  border-radius: 8px;
`;
const MainData = styled.div`
  display: flex;
  gap: 40px;
`;
const MainImage = styled.img`
  border-radius: 50%;
  width: 20%;
  margin-top: 10px;
`;
const MainInfo = styled.div`
  width: 80%;
  font-family: "Roboto Mono", monospace;
  color: #a19d9d;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-right: 10px;
`;

const DivOne = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
`;
const Username = styled.h1`
  font-size: 1.3rem;
  color: #fff;
  font-weight: bold;
`;
const H2 = styled.h2`
  font-size: 12px;
  font-family: "Roboto Mono", monospace;
  font-weight: bold;
`;

const StatsInfo = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: 20%;
  background-color: #000058;
  border-radius: 8px;
  padding-top: 15px;
  padding-bottom: 10px;
`;
const StatsInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  justify-content: center;
`;
const H3 = styled.h2`
  font-family: "Roboto Mono", monospace;

  font-size: 17px;
  font-weight: bold;
`;

const PersonalDataDiv = styled.div`
  width: 80%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20%;
`;
const DivTwo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  color: #fff; ;
`;
const ResultData = ({ data }) => {
  return (
    <>
      <DataBox>
        <MainData>
          <MainImage src={data.avatar_url} />
          <MainInfo>
            <DivOne>
              <Username>{data.login}</Username>
              <H2>
                <a
                  href={data.html_url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  @{data.login}
                </a>
              </H2>
              <H2>{data.bio}</H2>
            </DivOne>

            <DivOne>
              <H2 style={{ textAlign: "end" }}>
                Joined{" "}
                {data.created_at ? data.created_at.slice(8, 10) + "-" : ""}
                {data.created_at ? data.created_at.slice(5, 7) + "-" : ""}
                {data.created_at ? data.created_at.slice(0, 4) : ""}
              </H2>
            </DivOne>
          </MainInfo>
        </MainData>
        <StatsInfo>
          <StatsInfoDiv>
            <H2>Repos</H2>
            <H3>{data.public_repos}</H3>
          </StatsInfoDiv>
          <StatsInfoDiv>
            <H2>Followers</H2>
            <H3>{data.followers}</H3>
          </StatsInfoDiv>
          <StatsInfoDiv>
            <H2>Following</H2>
            <H3>{data.following}</H3>
          </StatsInfoDiv>
        </StatsInfo>
        <PersonalDataDiv>
          <DivTwo>
            <H2>
              <MdLocationPin />{" "}
              {data.location ? data.location : "Not Available"}
            </H2>
            <H2>
              {" "}
              <BsLink45Deg /> {data.blog ? data.blog : "Not Available"}
            </H2>
          </DivTwo>
          <DivTwo>
            <H2>
              <BsTwitter />{" "}
              {data.twitter_username ? data.twitter_username : "Not Available"}
            </H2>
            <H2>
              <a
                href={data.html_url}
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <BsGithub /> {data.html_url}
              </a>
            </H2>
          </DivTwo>
        </PersonalDataDiv>
      </DataBox>
    </>
  );
};

export default ResultData;
