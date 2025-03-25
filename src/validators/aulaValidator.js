const { body } = require('express-validator');

exports.validarAula = [
  body('materia').notEmpty().withMessage('Matéria é obrigatória'),
  body('professorId').isInt().withMessage('ProfessorId deve ser um número inteiro')
];