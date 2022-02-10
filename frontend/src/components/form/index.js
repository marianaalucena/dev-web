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
  const [labelDescicaoStyle, setLabelDescicaoStyle] = useState({});

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

      console.log(
        "descricao: " +
          descricao +
          ", tipo: " +
          tipo +
          ", prioridade: " +
          prioridade +
          ", dataInicio: " +
          dataInicio +
          ", dataFim: " +
          dataFim
      );

      api
        .post("/metas", body)
        .then((response) => {
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

  // 00/00/0000
  const maskDate = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d)/, "$1");
  };

  return (
    <Card className="card">
      <Form className="form">
        <p className="prioridade">Qual a sua meta?</p>
        <Form.Group className="mb-3" type="text">
          <Form.Control
            name="DESCRICAO"
            defaultValue={descricao}
            onChange={setDescricao}
          />
        </Form.Group>
        <Form.Select
          aria-label="Default select example"
          onChange={(event) => setTipo(event.target.value)}
        >
          <option className="texto">Qual o tipo?</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Profissional">Profissional</option>
          <option value="Saúde">Saúde</option>
          <option value="Em grupo">Em grupo</option>
          <option value="Econômica">Econômica</option>
        </Form.Select>
        <p className="prioridade">Qual a prioridade?</p>

        <fieldset className="radio">
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Alta"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
              value="Alta"
            />
            <Form.Check
              type="radio"
              label="Média"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
              value="Média"
            />
            <Form.Check
              type="radio"
              label="Baixa"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
              value="Baixa"
            />
          </Col>
        </fieldset>
        <p className="prioridade">Qual a data inicial?</p>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            value={dataInicio}
            onChange={(event) => setDataInicio(maskDate(event.target.value))}
            placeholder="DD/MM/AAAA"
            maxLength="10"
          />
        </Form.Group>

        <p className="prioridade">Qual a data final?</p>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            value={dataFim}
            onChange={(event) => setDataFim(maskDate(event.target.value))}
            placeholder="DD/MM/AAAA"
            maxLength="10"
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
