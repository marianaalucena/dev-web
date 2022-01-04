import "./App.css";
import Card from "./components/card";
import Navbar from "./components/navbar";
import Form from "./components/form";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import api from "./api";

function App() {
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
    <div className="App">
      <div className="container">
        <Navbar></Navbar>
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

        <Form></Form>
      </div>
    </div>
  );
}

export default App;
