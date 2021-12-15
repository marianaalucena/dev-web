import React from "react";
import "./card.css";

function Card({ nome, dataInicio, dataFim, tipo, prioridade, pathImg }) {
  return (
    <div class="card">
      <h2>{nome}</h2>
      <p>Data inicio: {dataInicio}</p>
      <p>Data fim: {dataFim}</p>
      <img className="imagem" src={pathImg}></img>
    </div>
  );
}

export default Card;
