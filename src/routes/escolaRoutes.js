const express = require('express');
const router = express.Router();
const { validarEscola } = require('../validators/escolaValidator');
const escolaController = require('../controllers/escolaController');

const { validationResult } = require('express-validator');
router.get('/', escolaController.listarEscolas);
router.post('/', escolaController.criarEscola);

module.exports = router;