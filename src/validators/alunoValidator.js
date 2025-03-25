const { body } = require('express-validator');

exports.validarAluno = [
  body('nome').notEmpty().withMessage('Nome é obrigatório'),
  body('escolaId').isInt().withMessage('EscolaId deve ser um número inteiro')
];