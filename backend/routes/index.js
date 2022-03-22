var express = require("express");
var router = express.Router();

let metas = []; // As informações ficaram armazenadas dentro deste array []
let concluidas = [];
let atrasadas = [];

function Meta(id, descricao, dataInicio, dataFim, tipo, prioridade) {
  return {
    id: id,
    descricao: descricao,
    dataInicio: dataInicio,
    dataFim: dataFim,
    tipo: tipo,
    prioridade: prioridade,
  };
}

/* GET home page. */
router.get("/", function (req, res, next) {
  res.redirect("/metas");
});

router.get("/metas", function (req, res, next) {
  for (let i = 0; i < metas.length; i++) {
    if (
      new Date(metas[i].dataFim).getTime() + 86400000 <
      new Date().getTime()
    ) {
      atrasadas.push(metas[i]);
      metas = metas.filter((meta) => meta.id !== metas[i].id);
    }
  }

  return res.json(metas);
}); //rota para listar todas as metas sem atraso

router.post("/metas", (req, res, next) => {
  const meta = new Meta(
    Math.floor(Math.random() * 1000),
    req.body.descricao,
    req.body.dataInicio,
    req.body.dataFim,
    req.body.tipo,
    req.body.prioridade
  );

  metas.push(meta);

  res.json(metas);
  console.log(metas);
});

router.put("/metas/:id", (req, res, next) => {
  const { id } = req.params;
  const metaAtualizada = new Meta(
    id,
    req.body.descricao,
    req.body.dataInicio,
    req.body.dataFim,
    req.body.tipo,
    req.body.prioridade
  );

  const idInt = parseInt(id);
  const updatedAndamento = metas.find((meta) => parseInt(meta.id) === idInt);

  if (updatedAndamento) {
    metas = metas.filter((meta) => parseInt(meta.id) !== idInt);
    metas.push(metaAtualizada);
  }

  res.json(metas);
  console.log(metas);
});

router.delete("/metas/delete/:id", (req, res, next) => {
  const { id } = req.params;
  const idInt = parseInt(id);
  const deleted = metas.find((meta) => parseInt(meta.id) === idInt);
  if (deleted) {
    metas = metas.filter((meta) => parseInt(meta.id) !== idInt);
    console.log(metas);
    res.status(200).json(deleted);
  } else {
    res.status(404).json({ message: "Meta não encontrada" });
  }
});

router.get("/metasConcluidas", function (req, res, next) {
  return res.json(concluidas);
}); //rota para listar todas as metas concluidas

router.post("/metasConcluidas", (req, res, next) => {
  const metaConcluida = new Meta(
    req.body.id,
    req.body.descricao,
    req.body.dataInicio,
    req.body.dataFim,
    req.body.tipo,
    req.body.prioridade
  );

  const removeMeta = metas.find(
    (meta) => meta.id === req.body.id && meta.descricao === req.body.descricao
  );
  const removeAtrasada = atrasadas.find(
    (meta) => meta.id === req.body.id && meta.descricao === req.body.descricao
  );
  if (removeMeta) {
    console.log("entrou");
    metas = metas.filter((meta) => meta.id !== req.body.id);
  }
  if (removeAtrasada) {
    atrasadas = atrasadas.filter((meta) => meta.id !== req.body.id);
  }

  concluidas.push(metaConcluida);
  res.json(concluidas);
});

router.get("/metasAtrasadas", function (req, res, next) {
  return res.json(atrasadas);
}); //rota para listar todas as metas concluidas

router.post("/metasAtrasadas", (req, res, next) => {
  const metaAtrasada = new Meta(
    req.body.id,
    req.body.descricao,
    req.body.dataInicio,
    req.body.dataFim,
    req.body.tipo,
    req.body.prioridade
  );

  atrasadas.push(metaAtrasada);
  res.json(atrasadas);
});

module.exports = router;
