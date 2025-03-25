const { body } = require('express-validator');

exports.validarProfessor = [
  body('nome').notEmpty().withMessage('Nome é obrigatório'),
  body('escolaId').isInt().withMessage('EscolaId deve ser um número inteiro')
];