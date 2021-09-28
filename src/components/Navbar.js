import React, { useContext, useRef } from "react";
import { Navbar, Nav } from "react-bootstrap";
import ThemeContext from "../context/themeContext";

const Navbar_Component = () => {
  const themeContext = useContext(ThemeContext);
  const { navbg, bgvariant } = themeContext;
  const navbarCollapseEl = useRef(null);

  return (
    <Navbar bg={navbg} variant={bgvariant} expand="lg" className="mb-3">
      <Navbar.Brand href="#home">Brand/Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse ref={navbarCollapseEl} id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Page 1</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbar_Component;
