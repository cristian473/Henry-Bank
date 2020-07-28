<<<<<<< HEAD
var Sequelize = require('sequelize');
const S = Sequelize;

const Transactions = (sequelize, S) => {
    // defino el modelo
    const T = sequelize.define('transactions', {
      idSender: {
        type: S.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      idReceiver: {
        type: S.INTEGER,
        allowNull: false
      },
      value: {
        type: S.INTEGER,
        allowNull: false
      },
      state: {
        type: S.ENUM(['Aceptado','Procesada','Rechazada']),
        allowNull: false
      },
      description: {
        type: S.TEXT,
        allowNull: true
      }
    });
    
    return T;
  };
  
  module.exports = Transactions;
  
=======
const Sequelize = require("sequelize");
const S = Sequelize;

const Transactions = (sequelize, S) => {
  // defino el modelo
  const T = sequelize.define("transactions", {
    idSender: {
      type: S.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    idReceiver: {
      type: S.INTEGER,
      allowNull: false,
    },
    value: {
      type: S.INTEGER,
      allowNull: false,
    },
    state: {
      type: S.ENUM(["Aceptado", "Procesada", "Rechazada"]),
      allowNull: false,
    },
    description: {
      type: S.TEXT,
      allowNull: true,
    },
  });

  return T;
};

module.exports = Transactions;
>>>>>>> 53f5c0b7266a731bb5582e66267b8c2bc1e6fd1e
