import React, { SFC } from "react";
import { Link } from "react-router-dom";

export const Header: SFC<{}> = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </div>
);
