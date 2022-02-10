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
    <div class="card-wrapper mr-5">
      <div
        class="card-top"
        style={{ "background-color": colors[index % 3].primaryColor }}
      ></div>
      <div class="task-holder">
        <span
          class="card-header"
          style={{
            "background-color": colors[index % 3].secondaryColor,
            "border-radius": "10px",
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
            class="far fa-edit mr-3"
            style={{ color: colors[index % 3].primaryColor }}
          ></i>
          <i
            class="far fa-trash-alt "
            style={{ color: colors[index % 3].primaryColor }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
