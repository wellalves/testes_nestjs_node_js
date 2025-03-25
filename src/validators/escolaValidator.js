const { body } = require('express-validator');

exports.validarEscola = [
  body('nome').notEmpty().withMessage('Nome é obrigatório')
];