import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import api from "../../api";
import { toast } from "react-toastify";

const PopUp = ({ modal, toggle, save }) => {
  const [descricao, setDescricao] = useState("");
  const [tipo, setTipo] = useState("");
  const [prioridade, setPrioridade] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");

  const maskDate = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d)/, "$1");
  };

  const novaMeta = () => {
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
  };

  return (
    <Modal toggle={toggle} isOpen={modal}>
      <ModalHeader toggle={toggle}>Nova Meta</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Descrição</label>
            <input
              type="text"
              className="form-control"
              defaultValue={descricao}
              onChange={setDescricao}
              name="descricao"
            ></input>
          </div>
          <div className="form-group mt-3">
            <label>Data Inicial</label>
            <input
              type="text"
              className="form-control"
              defaultValue={dataInicio}
              onChange={setDataInicio}
              name="dataInicio"
              placeholder="DD/MM/AAAA"
              maxLength="10"
            ></input>
          </div>
          <div className="form-group mt-3">
            <label>Data Final</label>
            <input
              type="text"
              className="form-control"
              defaultValue={dataFim}
              onChange={setDataFim}
              name={dataFim}
              placeholder="DD/MM/AAAA"
              maxLength="10"
            ></input>
          </div>
          <div className="form-group mt-3">
            <label>Tipo</label>
            <input
              type="text"
              className="form-control"
              defaultValue={tipo}
              onChange={setTipo}
              placeholder="Pessoal / Profissional / Financeira"
              name="tipo"
            ></input>
          </div>
          <div className="form-group mt-3">
            <label>Prioridade</label>
            <input
              type="text"
              className="form-control"
              defaultValue={prioridade}
              onChange={setPrioridade}
              placeholder="Alta / Média / Baixa"
              name="prioridade"
            ></input>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={novaMeta}>
          Adicionar
        </Button>{" "}
        <Button onClick={toggle}>Cancelar</Button>
      </ModalFooter>
    </Modal>
  );
};
export default PopUp;
