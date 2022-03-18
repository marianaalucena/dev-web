import React from "react";
import { Container } from "reactstrap";
import Card from "../card";
import "./list.css";

export default function List({ list, deletaMeta, completed, name }) {
  return (
    <Container>
      <ul>
        {list &&
          list.map((obj, index) => (
            <Card
              metaObj={obj}
              index={index}
              key={index}
              deletaMeta={deletaMeta}
              completed={completed}
            ></Card>
          ))}
      </ul>
    </Container>
  );
}
