import React, { useEffect, useState } from "react";
import "./toDoList.css";
import PopUp from "../../components/modals";
import api from "../../api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import List from "../../components/list";
import { Container } from "reactstrap";

const ToDoList = () => {
  const [modal, setModal] = useState(false);
  const [metasList, setMetasList] = useState([]);
  const [listCompleted, setListCompleted] = useState([]);

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

  function completed(metaConcluida) {
    console.log("antes");
    console.log(listCompleted);
    console.log(metaConcluida);
    setListCompleted(metaConcluida);
    console.log("depois");
    console.log(listCompleted);
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
      <Container>
        <div className="task-container">
          <List
            name={"Suas metas:"}
            list={metasList}
            completed={completed}
            deletaMeta={deletaMeta}
          ></List>
          <List
            name={"Concluídas:"}
            list={listCompleted}
            completed={completed}
            deletaMeta={deletaMeta}
          ></List>
        </div>
      </Container>
      <PopUp toggle={toggle} modal={modal} save={saveMeta}></PopUp>
    </>
  );
};

export default ToDoList;
