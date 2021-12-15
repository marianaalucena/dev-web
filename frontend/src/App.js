import "./App.css";
import Card from "./components/card";

function App() {
  return (
    <div className="App">
      <Card
        nome="Fluência em inglês"
        dataInicio="05/09/2020"
        dataFim="29/09/2029"
        pathImg="https://cdn-icons-png.flaticon.com/512/74/74472.png"
      ></Card>
    </div>
  );
}

export default App;
