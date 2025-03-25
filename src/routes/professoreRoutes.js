const express = require('express');
const router = express.Router();
const controller = require('../controllers/professoreController');

router.get('/', controller.listarProfessores);
router.post('/', controller.criarProfessore);

module.exports = router;