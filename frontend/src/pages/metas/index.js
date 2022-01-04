import React from "react";
import "./metas.css";
import Card from "../../components/card";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import api from "../../api";

const Metas = () => {
  const [metas, setMetas] = useState([]);

  function getMetas() {
    api
      .get(`/metas`)
      .then((response) => {
        setMetas(response.data);
      })
      .catch((error) => {
        let msg = "";
        if (error.response) msg = error.response.data.error;
        else msg = "Network failed";
        toast.error(msg);
      });
  }

  useEffect(() => {
    getMetas();
  }, []);

  return (
    <div className="container">
      {metas &&
        metas.length > 0 &&
        metas.map((meta) => (
          <Card
            nome={meta.descricao}
            dataInicio={meta.dataInicio}
            dataFim={meta.dataFim}
            pathImg="https://cdn-icons-png.flaticon.com/512/74/74472.png"
          ></Card>
        ))}
    </div>
  );
};

export default Metas;
