const express = require('express');
const router = express.Router();
const { validarMensalidade } = require('../validators/mensalidadeValidator');
const controller = require('../controllers/mensalidadeController');

const { validationResult } = require('express-validator');
router.get('/', controller.listarMensalidades);
router.post('/', validarMensalidade, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
}, controller.criarMensalidade);

module.exports = router;