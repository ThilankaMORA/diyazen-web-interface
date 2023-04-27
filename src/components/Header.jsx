import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Battery from "./Battery";
import arimac_logo from "./../images/arimac_logo.png";
import diyazen_logo from "./../images/diyazen_navbar.jpg";

function Header() {
  return (
    <Navbar id="navbar" bg="black" variant="dark" expand="lg" collapseOnSelect>
      <header>
        <Navbar.Brand href="#home">
          <img src={diyazen_logo} alt="Logo" className="navbar-diyazen_logo" />
          Diyazen Humanoid Robot
        </Navbar.Brand>
      </header>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Dashboard</Nav.Link>
          <Nav.Link href="/Places">places</Nav.Link>
          <Battery />
          {/* <img src={arimac_logo} alt="Logo" className="navbar-arimac_logo" /> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
