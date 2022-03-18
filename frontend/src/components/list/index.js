import React from "react";
import { Container } from "reactstrap";
import Card from "../card";
import "./list.css";

export default function List({
  list,
  deletaMeta,
  completed,
  delay,
  name,
  status,
}) {
  return (
    <Container>
      <h4 className="title">{name}</h4>
      <ul>
        {list &&
          list.map((obj, index) => (
            <Card
              metaObj={obj}
              index={index}
              key={index}
              deletaMeta={deletaMeta}
              completed={completed}
              delay={delay}
              status={status}
            ></Card>
          ))}
      </ul>
    </Container>
  );
}
