import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./form.css";
import api from "../../api";
import { toast } from "react-toastify";

function FormComp() {
  const [descricao, setDescricao] = useState("");
  const [tipo, setTipo] = useState("");
  const [prioridade, setPrioridade] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");

  const stylesInvalid = {
    label: {
      color: "red",
    },
  };

  const stylesValid = {
    label: {
      color: "#F4F4F4",
    },
  };

  const validateDescricao = () => {
    const validation = descricao === "" || descricao === null;
    setDescricao(validation ? stylesInvalid : stylesValid);
  };

  const validateTipo = () => {
    const validation = tipo === "" || tipo === null;
    setTipo(validation ? stylesInvalid : stylesValid);
  };

  const validatePrioridade = () => {
    const validation = prioridade === "" || prioridade === null;
    setPrioridade(validation ? stylesInvalid : stylesValid);
  };

  const validateDataInicio = () => {
    const validation = dataInicio === "" || dataInicio === null;
    setDataInicio(validation ? stylesInvalid : stylesValid);
  };

  const validateDataFim = () => {
    const validation = dataFim === "" || dataFim === null;
    setDataFim(validation ? stylesInvalid : stylesValid);
  };

  const validateInfo = () =>
    validateDescricao() &&
    validateTipo() &&
    validatePrioridade() &&
    validateDataInicio() &&
    validateDataFim;

  const novaMeta = () => {
    if (validateInfo()) {
      const body = {
        descricao,
        tipo,
        prioridade,
        dataInicio,
        dataFim,
      };

      api
        .post("/metas", body)
        .then(async (response) => {
          toast("Meta criada com sucesso!");
        })
        .catch((error) => {
          let msg = "";
          if (error.response) msg = error.response.data.error;
          else msg = "Network failed";

          toast.error(msg);
        });
    }
  };

  return (
    <Card className="card">
      <Form className="form">
        <p className="prioridade">Qual a sua meta?</p>
        <Form.Group className="mb-3" type="text">
          <Form.Control
            name="DESCRICAO"
            value={descricao}
            onChange={setDescricao}
          />
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
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            value={dataInicio}
            onChange={setDataInicio}
            placeholder="DD/MM/AAAA"
          />
        </Form.Group>

        <p className="prioridade">Qual a data final?</p>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            value={dataFim}
            onChange={setDataFim}
            placeholder="DD/MM/AAAA"
          />
        </Form.Group>
        <Button className="button" type="Criar meta" onClick={novaMeta}>
          Criar meta
        </Button>
      </Form>
    </Card>
  );
}

export default FormComp;
