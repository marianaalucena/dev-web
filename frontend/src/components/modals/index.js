import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./modals.css";

function PopUp({ modal, toggle, save }) {
  const [descricao, setDescricao] = useState("");
  const [tipo, setTipo] = useState("");
  const [prioridade, setPrioridade] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");

  // const [validacao, setValidacao] = useState(true);

  const validatePrioridade = () => {
    const validation = prioridade === "" || prioridade === null;
    return !validation;
  };

  const validateTipo = () => {
    const validation = tipo === "" || tipo === null;
    return !validation;
  };

  const validateDescricao = () => {
    const validation = descricao === "" || descricao === null;
    return !validation;
  };

  const validateDataInicio = () => {
    const validation = dataInicio === "" || dataInicio === null;
    return !validation;
  };

  const validateDataFim = () => {
    const validation = dataFim === "" || dataFim === null;
    return !validation;
  };

  const validateInfo = () => {
    if (
      validatePrioridade() &&
      validateTipo() &&
      validateDataFim() &&
      validateDataInicio() &&
      validateDescricao()
    ) {
      return true;
    } else {
      return false;
    }
  };

  const saveMeta = () => {
    //console.log(validacao);
    console.log(validateInfo());
    if (validateInfo()) {
      const meta = {
        descricao,
        tipo,
        prioridade,
        dataInicio,
        dataFim,
      };
      save(meta);
    }
  };

  return (
    <Modal toggle={toggle} isOpen={modal} data-testid="modal">
      <ModalHeader toggle={toggle}>Nova Meta</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            {!validateInfo() ? (
              <h4 className="error">Todos os campos são obrigatórios</h4>
            ) : (
              ""
            )}
            <label>Descrição</label>
            <input
              type="text"
              className="form-control"
              defaultValue={descricao}
              onChange={(event) => setDescricao(event.target.value)}
              name="descricao"
              maxLength="20"
              autoComplete="off"
            ></input>
          </div>
          <div className="form-group mt-3">
            <label>Data Inicial</label>
            <DatePicker
              selected={dataInicio}
              onChange={(date) => setDataInicio(date)}
              className="form-control"
              id="data-inicio"
              autoComplete="off"
              dateFormat="dd/MM/yyyy"
              name="dataInicio"
            />
          </div>
          <div className="form-group mt-3">
            <label>Data Final</label>
            <DatePicker
              selected={dataFim}
              onChange={(date) => setDataFim(date)}
              className="form-control"
              id="dataFinal"
              autoComplete="off"
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div className="form-group mt-3">
            <label>Tipo</label>
            <input
              type="text"
              className="form-control"
              defaultValue={tipo}
              onChange={(e) => setTipo(e.target.value)}
              placeholder="Pessoal / Profissional / Financeira"
              name="tipo"
              maxLength="14"
              autoComplete="off"
            ></input>
          </div>
          <div className="form-group mt-3">
            <label>Prioridade</label>
            <input
              type="text"
              className="form-control"
              defaultValue={prioridade}
              onChange={(e) => setPrioridade(e.target.value)}
              placeholder="Alta / Média / Baixa"
              name="prioridade"
              maxLength="5"
              autoComplete="off"
            ></input>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={saveMeta}>
          Adicionar
        </Button>{" "}
        <Button onClick={toggle}>Cancelar</Button>
      </ModalFooter>
    </Modal>
  );
}
export default PopUp;
