import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./form.css";

function FormComp() {
  return (
    <Card className="card">
      <Form className="form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Qual a sua meta?" />
        </Form.Group>
        <Form.Select aria-label="Default select example">
          <option className="texto">Qual o tipo?</option>
          <option value="1">Pessoal</option>
          <option value="2">Profissional</option>
          <option value="3">Saúde</option>
          <option value="4">Em grupo</option>
          <option value="5">Econômica</option>
        </Form.Select>

        <fieldset className="radio">
          <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={2}>
              Qual a prioridade?
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="Alta"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="Média"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="radio"
                label="Baixa"
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
              />
            </Col>
          </Form.Group>
        </fieldset>

        <ButtonToolbar aria-label="Toolbar with button groups">
          <ButtonGroup className="me-2" aria-label="First group">
            <Button className="button">Baixa</Button>{" "}
            <Button className="button">Média</Button>{" "}
            <Button className="button">Alta</Button>
          </ButtonGroup>
        </ButtonToolbar>

        <Button className="button" type="Criar meta">
          Criar meta
        </Button>
      </Form>
    </Card>
  );
}

export default FormComp;
