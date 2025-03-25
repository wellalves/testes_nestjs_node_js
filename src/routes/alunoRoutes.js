const express = require('express');
const router = express.Router();
const { validarAluno } = require('../validators/alunoValidator');
const controller = require('../controllers/alunoController');

const { validationResult } = require('express-validator');
router.get('/', controller.listarAlunos);
router.post('/', validarAluno, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
}, controller.criarAluno);

module.exports = router;