import React from "react";
import "./card.css";

const Card = ({ metaObj, index }) => {
  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#RCF3FC",
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1",
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1",
    },
  ];

  return (
    <div className="card-wrapper mr-5">
      <div
        className="card-top"
        style={{ "backgroundColor": colors[index % 3].primaryColor }}
      ></div>
      <div className="task-holder">
        <span
          className="card-header"
          style={{
            "backgroundColor": colors[index % 3].secondaryColor,
            "borderRadius": "10px",
          }}
        >
          {metaObj.descricao}
        </span>
        <p className="mt-2">Data inicial: {metaObj.dataInicio}</p>
        <p className="mt-2">Data final: {metaObj.dataFim}</p>
        <p className="mt-2">Tipo: {metaObj.tipo}</p>
        <p className="mt-2">Prioridade: {metaObj.prioridade}</p>
        <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
          <i
            className="far fa-edit mr-3"
            style={{ color: colors[index % 3].primaryColor }}
          ></i>
          <i
            className="far fa-trash-alt "
            style={{ color: colors[index % 3].primaryColor }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
