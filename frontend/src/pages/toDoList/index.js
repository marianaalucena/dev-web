import React, { useEffect, useState } from "react";
import "./toDoList.css";
import PopUp from "../../components/modals/createMeta";
import api from "../../api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import List from "../../components/list";

const ToDoList = () => {
  const [modal, setModal] = useState(false);
  const [metasList, setMetasList] = useState([]);
  const [listCompleted, setListCompleted] = useState([]);
  const [listAtrasadas, setListAtrasadas] = useState([]);

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

  function getMetasConcluidas() {
    api
      .get(`/metasConcluidas`)
      .then((response) => {
        setListCompleted(response.data);
      })
      .catch((error) => {
        let msg = "";
        if (error.response) msg = error.response.data.error;
        else msg = "Network failed";
        toast.error(msg);
      });
  }

  function saveMeta(novaMeta) {
    api
      .post(`/metas`, novaMeta)
      .then((response) => {
        toast("Meta criada com sucesso!");
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

  function updateListMetas(index, meta) {
    api
      .put("/metas/" + metasList[index].id, meta)
      .then((response) => {
        toast("Meta editada com sucesso!");
        setMetasList(response.data);
      })
      .catch((error) => {
        let msg = "";
        if (error.response) msg = error.response.data.error;
        else msg = "Network failed";
        toggle();
        toast.error(msg);
      });
  }

  function deletaMeta(index) {
    console.log("deletou");
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

  function completed(metaConcluida) {
    api
      .post(`/metasConcluidas`, metaConcluida)
      .then((response) => {
        toast("Meta concluída com sucesso!");
        setListCompleted(response.data);
        getMetas();
        getMetasAtrasadas();
      })

      .catch((error) => {
        let msg = "";
        if (error.response) msg = error.response.data.error;
        else msg = "Network failed";

        toast.error(msg);
      });
  }

  function getMetasAtrasadas() {
    api
      .get(`/metasAtrasadas`)
      .then((response) => {
        setListAtrasadas(response.data);
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
    getMetasConcluidas();
    getMetasAtrasadas();
  }, []);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="header text-center">
        <h3>Minhas metas</h3>
        <button
          className="btn btn-primary mt-2"
          data-testid="criar-meta"
          onClick={() => setModal(true)}
        >
          Criar Meta
        </button>
      </div>
      <Link to="/sobre" className="about">
        Sobre
      </Link>
      <div className="task-container">
        <List
          name={"Atrasadas:"}
          list={listAtrasadas}
          deletaMeta={deletaMeta}
          completed={completed}
          status={"atrasada"}
          update={updateListMetas}
        ></List>
        <List
          name={"Em andamento:"}
          list={metasList}
          deletaMeta={deletaMeta}
          completed={completed}
          status="andamento"
          update={updateListMetas}
        ></List>
        <List
          name={"Concluídas:"}
          list={listCompleted}
          completed={completed}
          status={"concluida"}
          update={updateListMetas}
        ></List>
      </div>
      <PopUp toggle={toggle} modal={modal} save={saveMeta}></PopUp>
    </>
  );
};

export default ToDoList;
