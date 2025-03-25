const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Escola = sequelize.define('Escola', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'escolas'
});

module.exports = Escola;