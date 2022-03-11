import React, { useEffect, useState } from "react";
import "./toDoList.css";
import PopUp from "../modals";
import Card from "../card";
import api from "../../api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ToDoList = () => {
  const [modal, setModal] = useState(false);
  const [metasList, setMetasList] = useState([]);

  function getMetas() {
    api
      .get(`/metas`)
      .then((response) => {
        setMetasList(response.data);
      })
      .catch((error) => {
        let msg = "";
        if (error.response) msg = error.response.data.error;
        else msg = "Network failed";
        toast.error(msg);
      });
  }

  function saveMeta(novaMeta) {
    console.log(novaMeta.dataInicio);

    api
      .post(`/metas`, novaMeta)
      .then((response) => {
        toast("Meta criada com sucesso!");
        toggle();
        setMetasList(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        let msg = "";
        if (error.response) msg = error.response.data.error;
        else msg = "Network failed";

        toast.error(msg);
      });
  }

  /*
  //falta a rota no back
  function updateListMetas(obj, index) {
    api
      .put("/metas" + novaMeta.index, novaMeta)
      .then((response) => {
        toast("Meta editada com sucesso!");
        toggle();
        setMetasList(response.data);
      })
      .catch((error) => {
        let msg = "";
        if (error.response) msg = error.response.data.error;
        else msg = "Network failed";

        toast.error(msg);
      });
  }
*/

  function deletaMeta(index) {
    api
      .delete(`/metas/delete/` + metasList[index].id)
      .then((response) => {
        getMetas();
        toast("Meta deletada!");
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

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="header text-center">
        <Link to="/sobre" className="about">
          Sobre
        </Link>
        <h3>Metas</h3>
        <button
          className="btn btn-primary mt-2"
          data-testid="criar-meta"
          onClick={() => setModal(true)}
        >
          Criar Meta
        </button>
      </div>

      <div className="task-container">
        {metasList.map((obj, index) => (
          <Card
            metaObj={obj}
            index={index}
            key={index}
            deletaMeta={deletaMeta}
          ></Card>
        ))}
      </div>
      <PopUp toggle={toggle} modal={modal} save={saveMeta}></PopUp>
    </>
  );
};

export default ToDoList;
