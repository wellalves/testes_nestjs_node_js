const Escola = require('../models/Escola');

async function listarEscolas(req, res) {
  const escolas = await Escola.findAll();
  res.json(escolas);
}

async function criarEscola(req, res) {
  const escola = await Escola.create({ nome: req.body.nome });
  res.status(201).json(escola);
}

module.exports = {
  listarEscolas,
  criarEscola
};