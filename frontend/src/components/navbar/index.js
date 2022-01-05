import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./navbar.css";

import IconArrowLeft from "../icons/iconArrowLeft";

function CompNavbar() {
  const back = (
    <>
      <button type="button" className="arrow-left-icon-button">
        <IconArrowLeft styles={{ color: "#000000" }} />
      </button>
    </>
  );

  return (
    <>
      <Navbar fixed="top">
        {back}
        <Container>
          <Navbar.Brand href="/">Início</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/NovaMeta">Adicionar Meta</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default CompNavbar;
