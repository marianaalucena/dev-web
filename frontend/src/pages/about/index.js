import React from "react";
import { Link } from "react-router-dom";
import "./about.css";

function About() {
  return (
    <>
      <div className="about">
        <h1>Sobre</h1>

        <Link to="/">retornar a página inicial</Link>
      </div>
      <div className="body">
        <span className="text">
          Sabemos da importância de ter metas e objetivos claros e bem
          definidos, seja na vida pessoal, profissional ou financeira. Estes
          elementos têm a grande capacidade de nortear as ações e a jornada
          evolutiva de quaisquer tipos de pessoas. Tendo isso em vista,
          consideramos criar uma ferramenta web com o objetivo principal
          auxiliar o usuário a traçar suas metas e mantê-las em dia. A proposta
          trás consigo a possibilidade de organizar suas metas de acordo com
          seus tipos e suas prioridades.
        </span>
      </div>
    </>
  );
}

export default About;
