var express = require("express");
var router = express.Router();

let metas = []; // As informações ficaram armazenadas dentro deste array []
let concluidas = [];

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
  return res.json(metas);
}); //rota para listar todas as metas

router.post("/metas", (req, res, next) => {
  const meta = new Meta(
    metas.length + 1,
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

  metas = metas.filter((meta) => meta.id !== req.body.id);
  concluidas.push(metaConcluida);
  res.json(concluidas);
});

//nao esta pronta
router.put("/metas/:id", (req, res, next) => {
  /*
  const { id } = req.params;
  const body = req.body;
  const idInt = parseInt(id);
  const updated = metas.find((meta) => meta.id === idInt);

  res.json(metas);
  console.log(metas);
  */
});

router.delete("/metas/delete/:id", (req, res, next) => {
  const { id } = req.params;
  const idInt = parseInt(id);
  const deleted = metas.find((meta) => meta.id === idInt);
  if (deleted) {
    metas = metas.filter((meta) => meta.id !== idInt);
    res.status(200).json(deleted);
  } else {
    res.status(404).json({ message: "Meta não encontrada" });
  }
});

module.exports = router;
