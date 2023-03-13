import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <header>
          <Navbar.Brand href="#home">Diyazen Humanoid Robot</Navbar.Brand>
        </header>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    
  );
}

export default Header;
