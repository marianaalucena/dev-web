import React from "react";
import Card from "../card";
import "./list.css";

export default function List({
  list,
  deletaMeta,
  completed,
  name,
  status,
  update,
}) {
  return (
    <div className="list">
      <h4 className="title">{name}</h4>
      {list &&
        list.map((obj, index) => (
          <Card
            metaObj={obj}
            index={index}
            key={index}
            deletaMeta={deletaMeta}
            completed={completed}
            status={status}
            update={update}
          ></Card>
        ))}
    </div>
  );
}
