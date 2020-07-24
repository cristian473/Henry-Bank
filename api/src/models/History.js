var Sequelize = require('sequelize');
const S = Sequelize;

const Transactions = (sequelize, S) => {
    // defino el modelo
    const H = sequelize.define('transactions', {
      idMovimiento: {
        type: S.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      idWallet: {
        type: S.INTEGER,
        allowNull: false
      },
      idUser: {
        type: S.INTEGER,
        allowNull: false
      },
      status: {
        type: S.BOOLEAN,
        allowNull: false
      },
      reason: {
        type: S.TEXT,
        allowNull: true
      },
      idComercio: {
        type: S.INTEGER,
        allowNull: true
      }
    });
    
    return H;
  };
  
  module.exports = Transactions;
  