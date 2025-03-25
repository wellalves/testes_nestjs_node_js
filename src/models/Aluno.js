const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Escola = require('./Escola');

const Aluno = sequelize.define('Aluno', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'alunos'
});

Aluno.belongsTo(Escola, { foreignKey: 'escolaId' });

module.exports = Aluno;