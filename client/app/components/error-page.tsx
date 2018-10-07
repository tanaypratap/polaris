import React, { SFC } from "react";
interface ErrorPageProps {
  code: Number;
  message: string;
}

const flexDivStyle = {
  height: "calc(100% - 66px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: 0,
  padding: 0
};

export const ErrorPage: SFC<ErrorPageProps> = (props: ErrorPageProps) => (
  <div style={flexDivStyle}>
    <h1>
      {props.code}: {props.message}
    </h1>
  </div>
);

ErrorPage.defaultProps = {
  code: 404,
  message: "This is not the page you are looking for"
};
