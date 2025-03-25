const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Aluno = require('./Aluno');

const Mensalidade = sequelize.define('Mensalidade', {
  valor: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  dataPagamento: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'mensalidades'
});

Mensalidade.belongsTo(Aluno, { foreignKey: 'alunoId' });

module.exports = Mensalidade;