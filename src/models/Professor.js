const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Escola = require('./Escola');

const Professor = sequelize.define('Professor', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'professores'
});

Professor.belongsTo(Escola, { foreignKey: 'escolaId' });
Escola.hasMany(Professor, { foreignKey: 'escolaId' });

module.exports = Professor;