const { body } = require('express-validator');

exports.validarMensalidade = [
  body('valor').isNumeric().withMessage('Valor deve ser numérico'),
  body('dataPagamento').notEmpty().withMessage('Data de pagamento é obrigatória'),
  body('alunoId').isInt().withMessage('AlunoId deve ser um número inteiro')
];