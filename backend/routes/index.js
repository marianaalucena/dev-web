var express = require("express");
var router = express.Router();

const metas = []; // As informações ficaram armazenadas dentro deste array []

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
  return res.json(metas);
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

  //res.json(metas);
  console.log(metas);
  res.json({ message: "Usuário criado!" });
});

module.exports = router;
