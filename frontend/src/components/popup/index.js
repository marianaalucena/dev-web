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

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "descricao") {
      setDescricao(value);
    } else if (name === "tipo") {
      setTipo(value);
    } else if (name === "prioridade") {
      setPrioridade(value);
    } else if (name === "dataInicio") {
      setDataInicio(maskDate(value));
    } else {
      setDataFim(maskDate(value));
    }
  };

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
              value={descricao}
              onChange={handleChange}
              name="descricao"
            ></input>
          </div>
          <div className="form-group mt-3">
            <label>Data Inicial</label>
            <input
              type="text"
              className="form-control"
              value={dataInicio}
              onChange={handleChange}
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
              value={dataFim}
              onChange={handleChange}
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
              value={tipo}
              onChange={handleChange}
              name="tipo"
            ></input>
          </div>
          <div className="form-group mt-3">
            <label>Prioridade</label>
            <input
              type="text"
              className="form-control"
              value={prioridade}
              onChange={handleChange}
              name="prioridade"
            ></input>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle && novaMeta}>
          Adicionar
        </Button>{" "}
        <Button onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};
export default PopUp;
