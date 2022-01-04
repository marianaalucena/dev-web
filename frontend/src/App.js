import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Metas from "./pages/metas";
import Form from "./components/form";
import CompNavbar from "./components/navbar";

function App() {
  return (
    <>
      <CompNavbar></CompNavbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Metas />} />
          <Route path="/NovaMeta" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
