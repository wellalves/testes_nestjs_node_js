const Aluno = require('../models/Aluno');

async function listarAlunos(req, res) {
  const alunos = await Aluno.findAll();
  res.json(alunos);
}

async function criarAluno(req, res) {
  const aluno = await Aluno.create({
    nome: req.body.nome,
    escolaId: req.body.escolaId
  });
  res.status(201).json(aluno);
}

module.exports = { listarAlunos, criarAluno };