import React from "react";
import "./card.css";
import Card from "react-bootstrap/Card";

function CardComp({ nome, dataInicio, dataFim, tipo, prioridade, pathImg }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{nome}</Card.Title>
        <Card.Text>Data inicio: {dataInicio}</Card.Text>
        <Card.Text>Data fim: {dataFim}</Card.Text>
        <img className="imagem" src={pathImg}></img>
      </Card.Body>
    </Card>
  );
}

export default CardComp;
