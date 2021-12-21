import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./form.css";

function FormComp() {
  return (
    <Card className="card">
      <Form className="form">
        <p className="prioridade">Qual a sua meta?</p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" />
        </Form.Group>
        <Form.Select aria-label="Default select example">
          <option className="texto">Qual o tipo?</option>
          <option value="1">Pessoal</option>
          <option value="2">Profissional</option>
          <option value="3">Saúde</option>
          <option value="4">Em grupo</option>
          <option value="5">Econômica</option>
        </Form.Select>
        <p className="prioridade">Qual a prioridade?</p>

        <fieldset className="radio">
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
        </fieldset>
        <p className="prioridade">Qual a data inicial?</p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="DD/MM/AAAA" />
        </Form.Group>

        <p className="prioridade">Qual a data final?</p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="DD/MM/AAAA" />
        </Form.Group>
        <Button className="button" type="Criar meta">
          Criar meta
        </Button>
      </Form>
    </Card>
  );
}

export default FormComp;
