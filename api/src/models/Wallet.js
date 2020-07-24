var Sequelize = require('sequelize');
const S = Sequelize;

const Wallet = (sequelize, S) => {
    // defino el modelo
    const W = sequelize.define('wallet', {
      idUsuario: {
        type: S.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      type: {
        type: S.STRING,
        allowNull: false
      },
      saldo: {
        type: S.REAL,
        allowNull: false
      },
      divisa: {
        type: S.TEXT,
        allowNull: true
      }
    });
    
    return W;
  };
  
  module.exports = Wallet;
  