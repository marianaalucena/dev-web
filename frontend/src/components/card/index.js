import React, { useState } from "react";
import "./card.css";
import EditMetaPopUp from "../modals/editMeta";

const Card = ({ metaObj, index, deletaMeta, updateListMetas }) => {
  const [modal, setModal] = useState(false);

  const colors = [
    {
      primaryColor: "#F0E68C",
      secondaryColor: "#FFFACD",
    },
    {
      primaryColor: "#00FF7F",
      secondaryColor: "#98FB98",
    },
    {
      primaryColor: "#DC143C",
      secondaryColor: "#F08080",
    },
  ];

  const toggle = () => {
    setModal(!modal);
  };

  //falta rota no back
  const updateMeta = (obj) => {
    updateListMetas(obj, index);
  };

  const handleDelete = () => {
    deletaMeta(index);
  };

  return (
    <div className="card-wrapper mr-5">
      <div
        className="card-top"
        style={{ backgroundColor: colors[index % 3].primaryColor }}
      ></div>
      <div className="task-holder">
        <span
          className="card-header"
          style={{
            backgroundColor: colors[index % 3].secondaryColor,
            borderRadius: "10px",
          }}
        >
          {metaObj.descricao}
        </span>
        <p className="mt-3">Data inicial: {metaObj.dataInicio}</p>
        <p className="mt-2">Data final: {metaObj.dataFim}</p>
        <p className="mt-2">Tipo: {metaObj.tipo}</p>
        <p className="mt-2">Prioridade: {metaObj.prioridade}</p>
        <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
          <i
            className="far fa-edit mr-3"
            style={{ color: colors[index % 3].primaryColor, cursor: "pointer" }}
            onClick={() => setModal(true)}
          ></i>{" "}
          <i
            className="far fa-trash-alt "
            style={{ color: colors[index % 3].primaryColor, cursor: "pointer" }}
            onClick={handleDelete}
          ></i>
        </div>
        <EditMetaPopUp
          modal={modal}
          toggle={toggle}
          updateMeta={updateMeta}
          metaObj={metaObj}
        />
      </div>
    </div>
  );
};

export default Card;
