const { DataTypes } = require('sequelize');
const sequelize = require('../bd');

const estudande = sequelize.define(
  'estudante', 
  {
    nome: {
      type: DataTypes.STRING,
    },
    idade: {
      type: DataTypes.INTEGER,
    }
  },
  {
    tableName: 'estudante',
    timestamps: true
  }
);

module.exports = estudande;