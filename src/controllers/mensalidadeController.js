const Mensalidade = require('../models/Mensalidade');

async function listarMensalidades(req, res) {
  const mensalidades = await Mensalidade.findAll();
  res.json(mensalidades);
}

async function criarMensalidade(req, res) {
  const mensalidade = await Mensalidade.create({
    valor: req.body.valor,
    dataPagamento: req.body.dataPagamento,
    alunoId: req.body.alunoId
  });
  res.status(201).json(mensalidade);
}

module.exports = { listarMensalidades, criarMensalidade };