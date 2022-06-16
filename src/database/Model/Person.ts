import { DataTypes } from 'sequelize'
import { sequelize } from '../config'

export const People = sequelize.define('people', {
  cpf: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sobrenome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nasc: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tel: {
    type: DataTypes.STRING,
    allowNull: false
  },
  bairro: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cep: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  localidade: {
    type: DataTypes.STRING,
    allowNull: false
  },
  logradouro: {
    type: DataTypes.STRING,
    allowNull: false
  },
  uf: {
    type: DataTypes.STRING,
    allowNull: false
  },
  numero: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, { timestamps: false })