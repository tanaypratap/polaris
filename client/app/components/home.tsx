import React, { SFC } from "react";
interface HomeProps {
  projectName: string;
}

const flexDivStyle = {
  height: "calc(100% - 66px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: 0,
  padding: 0
};

export const Home: SFC<HomeProps> = props => (
  <div style={flexDivStyle}>
    <h1>Hi ! Welcome onboard with project {props.projectName}!</h1>
  </div>
);

Home.defaultProps = {
  projectName: "Polaris"
};
