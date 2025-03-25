const Aula = require('../models/Aula');

async function listarAulas(req, res) {
  const aulas = await Aula.findAll();
  res.json(aulas);
}

async function criarAula(req, res) {
  const aula = await Aula.create({
    materia: req.body.materia,
    professorId: req.body.professorId
  });
  res.status(201).json(aula);
}

module.exports = { listarAulas, criarAula };