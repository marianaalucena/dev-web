import React, { useState } from "react";
import "./card.css";
import EditMetaPopUp from "../modals/editMeta";
import AlertDialog from "../modals/alertDialog";

const Card = ({ metaObj, index, deletaMeta, updateListMetas }) => {
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
    deletaMeta(index);
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
        <p className="mt-3">Data inicial: {dateFormat(metaObj.dataInicio)}</p>
        <p className="mt-2">Data final: {dateFormat(metaObj.dataFim)}</p>
        <p className="mt-2">Tipo: {metaObj.tipo}</p>
        <p className="mt-2">Prioridade: {metaObj.prioridade}</p>
        <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
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
    </div>
  );
};

export default Card;
