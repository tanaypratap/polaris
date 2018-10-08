import React, { SFC } from "react";
interface AboutProps {
  content?: string;
}

const pStyle = {
  fontSize: "20px",
  lineHeight: "1.4em"
};

const divStyle = {
  padding: "1% 3%"
};

export const About: SFC<AboutProps> = (props: AboutProps) => (
  <div style={divStyle}>
    <h1>About</h1>
    <p style={pStyle}>{props.content}</p>
  </div>
);

About.defaultProps = {
  content: `About content here`
};
