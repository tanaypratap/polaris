import React, { SFC } from "react";
import { Link } from "react-router-dom";
import styled from "../theme";
import ThemeInterface from "../theme/theme";

const MENU_LINKS: Array<MenuItem> = [
  { link: "/", label: "Home" },
  { link: "/about", label: "About" }
];

interface MenuItem {
  link: string;
  label: string;
}

interface NavbarProps {
  menu: Array<MenuItem>;
  className?: string;
}
interface HeaderProps {
  className?: string;
}

// Basic components
const Navbar: SFC<NavbarProps> = props => (
  <nav className={props.className}>
    {props.menu.map(({ link, label }) => (
      <Link to={link} key={link}>
        {label}
      </Link>
    ))}
  </nav>
);

const Header: SFC<HeaderProps> = props => (
  <header className={props.className}>
    <StyledNavbar menu={MENU_LINKS} />
  </header>
);

// Styled components
const StyledNavbar = styled(Navbar)`
  float: left;
  margin-left: 50px;
  a {
    text-decoration: none;
    color: inherit;
    padding: 0 10px;
  }

  a:hover {
    color: #c5cae9;
  }
`;

export const StyledHeader = styled(Header)`
  position: fixed;
  left: 0;
  right: 0;
  height: 66px;
  line-height: 66px;
  color: #fff;
  background-color: ${(props: { theme: ThemeInterface }) =>
    props.theme.primaryColor};
`;
