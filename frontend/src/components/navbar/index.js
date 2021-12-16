import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";

function CompNavbar() {
  return (
    <>
      <Navbar fixed="top">
        <Container>
          <Navbar.Brand href="#home">Metas</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#features">Sobre</Nav.Link>
            <Nav.Link href="#pricing">Resultados</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default CompNavbar;
