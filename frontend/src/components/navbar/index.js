import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./navbar.css";

function CompNavbar() {
  return (
    <>
      <Navbar fixed="top">
        <Container>
          <Navbar.Brand href="/">Início</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/NovaMeta">Adicionar Meta</Nav.Link>
            <Nav.Link href="/Resultados">Resultados</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default CompNavbar;
