const Sequelize = require("sequelize");
const S = Sequelize;

const Wallet = (sequelize, S) => {
  // defino el modelo
  const W = sequelize.define("wallet", {
    idUser: {
      type: S.INTEGER,
      allowNull: false,
    },

    type: {
      type: S.STRING,
      defaultValue: "Cuenta Corriente",
      allowNull: true,
    },
    saldo: {
      type: S.DECIMAL(10, 2),
      defaultValue: 0.0,
      allowNull: true,
    },
    divisa: {
      type: S.TEXT,
      allowNull: true,
    },
  });

  return W;
};

module.exports = Wallet;
