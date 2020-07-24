var Sequelize = require('sequelize');
const S = Sequelize;

const Wallet = (sequelize, S) => {
    // defino el modelo
    const W = sequelize.define('wallet', {
      idWallet: {
        type: S.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      movimiento: {
        type: S.STRING,
        allowNull: false
      },
      valor: {
        type: S.REAL,
        allowNull: false
      },
      comentario: {
        type: S.TEXT,
        allowNull: true
      },
      validado: {
        type: S.BOOLEAN,
        allowNull: false
      },
      pasarela: {
        type: S.INTEGER,
        allowNull: false
      },
    //   pasarelaForma: {
    //     type: S.INTEGER,
    //     allowNull: false,
    //     primaryKey: true,
    //     autoIncrement: true,
    //   },
    });
    
    return W;
  };
  
  module.exports = Wallet;
  