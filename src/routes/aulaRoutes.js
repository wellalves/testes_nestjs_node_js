const express = require('express');
const router = express.Router();
const { validarAula } = require('../validators/aulaValidator');
const controller = require('../controllers/aulaController');

const { validationResult } = require('express-validator');
router.get('/', controller.listarAulas);
router.post('/', validarAula, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
}, controller.criarAula);

module.exports = router;