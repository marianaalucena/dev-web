import React from "react";
import ToDoList from "./components/toDoList";
import About from "./pages/about";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ToDoList />}></Route>
        <Route path="/sobre" element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
