import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useForm } from "react-hook-form";

const PopUp = ({ modal, toggle, save }) => {
  const [descricao, setDescricao] = useState("");
  const [tipo, setTipo] = useState("");
  const [prioridade, setPrioridade] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");

  const saveMeta = () => {
    const meta = {
      descricao,
      tipo,
      prioridade,
      dataInicio,
      dataFim,
    };
    save(meta);
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
    <Modal toggle={toggle} isOpen={modal} data-testid="modal">
      <ModalHeader toggle={toggle}>Nova Meta</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Descrição</label>
            <input
              type="text"
              className="form-control"
              defaultValue={descricao}
              onChange={(event) => setDescricao(event.target.value)}
              name="descricao"
              maxLength="20"
            ></input>
          </div>
          <div className="form-group mt-3">
            <label>Data Inicial</label>
            <input
              type="text"
              className="form-control"
              defaultValue={dataInicio}
              onChange={(event) => setDataInicio(maskDate(event.target.value))}
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
              onChange={(event) => setDataFim(maskDate(event.target.value))}
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
              onChange={(e) => setTipo(e.target.value)}
              placeholder="Pessoal / Profissional / Financeira"
              name="tipo"
              maxLength="14"
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
};
export default PopUp;
