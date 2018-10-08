import React, { SFC } from "react";
import { Link } from "react-router-dom";

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

const navbarStyle = {
  marginLeft: "50px"
};

const navbarAStyle = {
  textDecoration: "none",
  color: "inherit",
  padding: "0 10px"
};

const headerStyle = {
  left: 0,
  right: 0,
  height: "66px",
  lineHeight: "66px",
  color: "#ffffff",
  backgroundColor: "#24292e"
};

// Basic components
const Navbar: SFC<NavbarProps> = (props: NavbarProps) => (
  <nav style={navbarStyle}>
    {props.menu.map(({ link, label }) => (
      <Link to={link} key={link} style={navbarAStyle}>
        {label}
      </Link>
    ))}
  </nav>
);

export const Header: SFC<HeaderProps> = (props: HeaderProps) => (
  <header style={headerStyle}>
    <Navbar menu={MENU_LINKS} />
  </header>
);
