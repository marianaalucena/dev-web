import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./modals.css";

function PopUp({ modal, toggle, save, edit, updated, metaObj }) {
  const [descricao, setDescricao] = useState(edit ? metaObj.descricao : "");
  const [tipo, setTipo] = useState(edit ? metaObj.tipo : "");
  const [prioridade, setPrioridade] = useState(edit ? metaObj.prioridade : "");
  const [dataInicio, setDataInicio] = useState(
    edit ? new Date(metaObj.dataInicio) : ""
  );
  const [dataFim, setDataFim] = useState(edit ? new Date(metaObj.dataFim) : "");

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
    if (dataFim < dataInicio) {
      return "data";
    }
    /*
    if (new Date(dataFim).getTime() + 86400000 < new Date().getTime()) {
      return "data-menor";
    }
    */
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

  const limpaForm = () => {
    setDescricao("");
    setDataInicio("");
    setDataFim("");
    setTipo("");
    setPrioridade("");
  };

  const saveMeta = () => {
    if (validateInfo()) {
      const meta = {
        descricao,
        tipo,
        prioridade,
        dataInicio,
        dataFim,
      };
      save(meta);
      limpaForm();
    }
  };

  const updateMeta = () => {
    if (validateInfo()) {
      const meta = {
        descricao,
        tipo,
        prioridade,
        dataInicio,
        dataFim,
      };
      toggle();
      updated(meta);
    }
  };

  return (
    <Modal toggle={toggle} isOpen={modal} data-testid="modal">
      {edit ? (
        <ModalHeader toggle={toggle}>Editar Meta</ModalHeader>
      ) : (
        <ModalHeader toggle={toggle}>Nova Meta</ModalHeader>
      )}
      <ModalBody>
        <form>
          <div className="form-group">
            {!validateInfo() ? (
              <h4 className="error">Todos os campos são obrigatórios.</h4>
            ) : validateInfo() === "data" ? (
              <h4 className="error">
                A data final deve ser maior que a data inicial
              </h4>
            ) : validateInfo() === "data-menor" ? (
              <h4 className="error">
                A data final deve ser maior ou igual a data de hoje.
              </h4>
            ) : (
              ""
            )}
            <label>Descrição</label>
            <input
              value={descricao}
              type="text"
              className="form-control"
              onChange={(event) => setDescricao(event.target.value)}
              name="descricao"
              maxLength="25"
              autoComplete="off"
            ></input>
          </div>
          <div className="form-group mt-3">
            <label>Data Inicial</label>
            <DatePicker
              selected={dataInicio}
              onChange={(date) => {
                setDataInicio(date);
              }}
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
              value={tipo}
              type="text"
              className="form-control"
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
              value={prioridade}
              type="text"
              className="form-control"
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
        {edit ? (
          <Button value="Submit" color="primary" onClick={updateMeta}>
            Editar
          </Button>
        ) : (
          <Button value="Submit" color="primary" onClick={saveMeta}>
            Adicionar
          </Button>
        )}{" "}
        <Button onClick={toggle}>Cancelar</Button>
      </ModalFooter>
    </Modal>
  );
}
export default PopUp;
