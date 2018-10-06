import React, { SFC } from "react";
import styled from "../theme";
interface HomeProps {
  projectName: string;
}

const FlexContainerDiv = styled.div`
  height: calc(100% - 66px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

export const Home: SFC<HomeProps> = props => (
  <FlexContainerDiv>
    <h1>Hi ! Welcome onboard with project {props.projectName}!</h1>
  </FlexContainerDiv>
);

Home.defaultProps = {
  projectName: "Polaris"
};
