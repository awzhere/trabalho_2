
const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const { cpf } = require('cpf-cnpj-validator');

const Pessoa = sequelize.define('Pessoa', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  telefone: DataTypes.STRING,
  dataNascimento: DataTypes.DATE,
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,

  },

  status: {
    type: DataTypes.ENUM('ativo', 'inativo'),
    defaultValue: 'ativo'
  }
});

module.exports = Pessoa;