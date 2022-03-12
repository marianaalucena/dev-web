import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditMetaPopUp = ({ modal, toggle, updateMeta, metaObj }) => {
  const [descricao, setDescricao] = useState("");
  const [tipo, setTipo] = useState("");
  const [prioridade, setPrioridade] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");

  const dateFormat = (date) => {
    var d = new Date(date);

    var mes = "" + (d.getMonth() + 1);
    var dia = "" + d.getDate();
    var ano = d.getFullYear();

    if (mes.length < 2) mes = "0" + mes;
    if (dia.length < 2) dia = "0" + dia;

    return [dia, mes, ano].join("/");
  };

  useEffect(() => {
    setDescricao(metaObj.descricao);
    setTipo(metaObj.tipo);
    setPrioridade(metaObj.prioridade);
    setDataInicio(dateFormat(metaObj.dataInicio));
    setDataFim(dateFormat(metaObj.dataFim));
  }, []);

  //ainda nao esta pronto
  const handleUpdate = (e) => {
    e.preventDefault();
    updateMeta();
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
      <ModalHeader toggle={toggle}>Editar Meta</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Descrição</label>
            <input
              type="text"
              className="form-control"
              defaultValue={descricao}
              onChange={(e) => setDescricao(e.target.value)}
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
              onChange={(e) => setDataInicio(maskDate(e.target.value))}
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
              onChange={(e) => setDataFim(maskDate(e.target.value))}
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
        <Button color="primary" onClick={handleUpdate}>
          Atualizar
        </Button>{" "}
        <Button onClick={toggle}>Cancelar</Button>
      </ModalFooter>
    </Modal>
  );
};
export default EditMetaPopUp;
