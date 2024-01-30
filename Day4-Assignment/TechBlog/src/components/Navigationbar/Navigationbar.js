import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigationbar = () => {
  return (
    <div>
      <Navbar expand="lg" bg="">
        <Container>
          <Navbar.Brand href="#About">Tech Blog</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#About">About</Nav.Link>
              <Nav.Link href="#Design">Design</Nav.Link>
              <Nav.Link href="#Social">Social</Nav.Link>
              <Nav.Link href="#Contant">Contant</Nav.Link>
              <Nav.Link href="#Contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigationbar;
