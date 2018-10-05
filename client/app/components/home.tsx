import React, { SFC } from "react";

interface HomeProps {
  projectName: string;
}

export const Home: SFC<HomeProps> = props => (
  <div>
    <h1>Hi ! Welcome on the project {props.projectName}</h1>
  </div>
);

Home.defaultProps = {
  projectName: "Polaris-2018"
};
