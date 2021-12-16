import "./App.css";
import Card from "./components/card";
import Navbar from "./components/navbar";
import Form from "./components/form";

function App() {
  return (
    <div className="App">
      <div class="container">
        <Navbar></Navbar>
        <Card
          nome="Fluência em inglês"
          dataInicio="05/09/2020"
          dataFim="29/09/2029"
          pathImg="https://cdn-icons-png.flaticon.com/512/74/74472.png"
        ></Card>
        <Form></Form>
      </div>
    </div>
  );
}

export default App;
