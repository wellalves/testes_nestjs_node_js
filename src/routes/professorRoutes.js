const express = require('express');
const router = express.Router();
const { validarProfessor } = require('../validators/professorValidator');
const professorController = require('../controllers/professorController');

const { validationResult } = require('express-validator');
router.get('/', professorController.listarProfessores);
router.post('/', professorController.criarProfessor);

module.exports = router;