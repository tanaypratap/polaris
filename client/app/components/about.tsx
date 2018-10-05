import React, { SFC } from "react";

interface AboutProps {
  content?: string;
}

export const About: SFC<AboutProps> = props => (
  <div>
    <h1>About</h1>
    <p>{props.content}</p>
  </div>
);

About.defaultProps = {
  content: "This is a test !"
};
