import React, { useEffect, useState } from "react";
import "./toDoList.css";
import PopUp from "../../components/modals";
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
    //setListCompleted((prevState) => [...prevState, metaConcluida]);

    api
      .post(`/metasConcluidas`, metaConcluida)
      .then((response) => {
        toast("Meta concluída com sucesso!");
        setListCompleted(response.data);
        getMetas();
        console.log(response.data);
      })
      .catch((error) => {
        let msg = "";
        if (error.response) msg = error.response.data.error;
        else msg = "Network failed";

        toast.error(msg);
      });
  }

  function delay(metaAtrasada) {
    let numDias = Math.abs(
      new Date(dateFormatt(metaAtrasada.dataFim)) -
        new Date(dateFormatt(metaAtrasada.dataInicio))
    );
    if (new Date(dateFormatt(metaAtrasada)) < new Date()) {
      api
        .post(`/metasAtrasadas`, metaAtrasada)
        .then((response) => {
          setListAtrasadas(response.data);
          getMetas();
          console.log(response.data);
        })
        .catch((error) => {
          let msg = "";
          if (error.response) msg = error.response.data.error;
          else msg = "Network failed";

          toast.error(msg);
        });
    }
  }

  const dateFormatt = (date) => {
    var d = new Date(date);

    var mes = "" + (d.getMonth() + 1);
    var dia = "" + d.getDate();
    var ano = d.getFullYear();

    if (mes.length < 2) mes = "0" + mes;
    if (dia.length < 2) dia = "0" + dia;

    return [mes, dia, ano].join("/");
  };

  useEffect(() => {
    getMetas();
    getMetasConcluidas();
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
        <List name={"Atrasadas:"} list={listAtrasadas} delay={delay}></List>
        <List
          name={"Em andamento:"}
          list={metasList}
          deletaMeta={deletaMeta}
          completed={completed}
          status="andamento"
        ></List>
        <List
          name={"Concluídas:"}
          list={listCompleted}
          completed={completed}
          status={"concluida"}
        ></List>
      </div>
      <PopUp toggle={toggle} modal={modal} save={saveMeta}></PopUp>
    </>
  );
};

export default ToDoList;
