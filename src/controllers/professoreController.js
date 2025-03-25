const Professor = require('../models/Professor');

async function listarProfessores(req, res) {
  const professores = await Professor.findAll();
  res.json(professores);
}

async function criarProfessor(req, res) {
  const professor = await Professor.create({
    nome: req.body.nome,
    escolaId: req.body.escolaId
  });
  res.status(201).json(professor);
}

module.exports = { listarProfessores, criarProfessor };