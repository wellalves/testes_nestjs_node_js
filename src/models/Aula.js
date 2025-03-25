const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Professor = require('./Professor');

const Aula = sequelize.define('Aula', {
  materia: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'aulas'
});

Aula.belongsTo(Professor, { foreignKey: 'professorId' });

module.exports = Aula;