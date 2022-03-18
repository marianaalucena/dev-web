import React, { useState } from "react";
import "./card.css";
import EditMetaPopUp from "../modals/editMeta";
import AlertDialog from "../modals/alertDialog";
import { Button } from "reactstrap";

const Card = ({
  metaObj,
  index,
  deletaMeta,
  updateListMetas,
  completed,
  status,
}) => {
  const [modal, setModal] = useState(false);
  const [dialog, setDialog] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const toggleDialog = () => {
    setDialog(!dialog);
  };

  //falta rota no back
  const updateMeta = (obj) => {
    updateListMetas(obj, index);
  };

  const handleDelete = () => {
    toggleDialog();
    deletaMeta(index);
  };

  const concluido = () => {
    completed(metaObj);
  };

  const dateFormat = (date) => {
    var d = new Date(date);

    var mes = "" + (d.getMonth() + 1);
    var dia = "" + d.getDate();
    var ano = d.getFullYear();

    if (mes.length < 2) mes = "0" + mes;
    if (dia.length < 2) dia = "0" + dia;

    return [dia, mes, ano].join("/");
  };

  const dateFormatt = (date) => {
    var d = new Date(date);

    var mes = "" + (d.getMonth() + 1);
    var dia = "" + d.getDate();
    var ano = d.getFullYear();

    if (mes.length < 2) mes = "0" + mes;
    if (dia.length < 2) dia = "0" + dia;

    return [mes, dia, ano].join("/");
  };

  return (
    <div className="card-wrapper mr-5">
      <div
        className={
          metaObj.prioridade === "Alta"
            ? "prior-Alta-Top"
            : metaObj.prioridade === "Média"
            ? "prior-Media-Top"
            : "prior-Baixa-Top"
        }
      ></div>
      <div className="task-holder">
        <span
          className={
            metaObj.prioridade === "Alta"
              ? "prior-Alta-header"
              : metaObj.prioridade === "Média"
              ? "prior-Media-header"
              : "prior-Baixa-header"
          }
        >
          {metaObj.descricao}
        </span>
        <div className="front">
          <p className="mt-3">Data inicial: {dateFormat(metaObj.dataInicio)}</p>
          <p className="mt-2">Data final: {dateFormat(metaObj.dataFim)}</p>
          <p className="mt-2">Tipo: {metaObj.tipo}</p>
          <p className="mt-2">Prioridade: {metaObj.prioridade}</p>
          <EditMetaPopUp
            modal={modal}
            toggle={toggle}
            updateMeta={updateMeta}
            metaObj={metaObj}
          />
          <AlertDialog
            toggleDialog={toggleDialog}
            dialog={dialog}
            handleDelete={handleDelete}
          ></AlertDialog>
        </div>
        {status === "concluida" ? (
          <div className="back">
            <h4 className="text">
              Sua meta foi concluída em{" "}
              {Math.round(
                Math.abs(
                  new Date(dateFormatt(metaObj.dataInicio)) - new Date()
                ) /
                  (1000 * 3600 * 24) -
                  1
              )}{" "}
              dia(s).
            </h4>
          </div>
        ) : (
          <div className="back">
            <h4 className="text">
              Você tem{" "}
              {Math.abs(
                new Date(dateFormatt(metaObj.dataFim)) -
                  new Date(dateFormatt(metaObj.dataInicio))
              ) /
                (1000 * 3600 * 24)}{" "}
              dia(s) para concluir sua meta dentro do prazo.
            </h4>
            <Button color="info" onClick={concluido}>
              Concluir
            </Button>
            <div style={{ position: "absolute", right: "20px", top: "200px" }}>
              <i
                className="far fa-edit mr-3"
                style={{ color: "#000000", cursor: "pointer" }}
                onClick={() => setModal(true)}
              ></i>{" "}
              <i
                className="far fa-trash-alt "
                style={{ color: "#000000", cursor: "pointer" }}
                onClick={() => setDialog(true)}
              ></i>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
