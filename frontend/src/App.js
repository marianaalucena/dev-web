import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Metas from "./pages/metas";
import CompNavbar from "./components/navbar";
import CriarMeta from "./pages/criarMeta";

function App() {
  return (
    <>
      <CompNavbar></CompNavbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Metas />} />
          <Route path="/NovaMeta" element={<CriarMeta />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
