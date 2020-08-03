const Wallet = (sequelize, S) => {
  // defino el modelo
  const W = sequelize.define("wallet", {
    id: {
      type: S.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: S.STRING,
      defaultValue: "Cuenta Corriente",
      allowNull: true,
    },
    balance: {
      type: S.DECIMAL(10, 2),
      defaultValue: 0.0,
      allowNull: true,
      validate: {
        min: 0,
      },
    },
    currency: {
      type: S.TEXT,
      allowNull: true,
    },
  });

  return W;
};

module.exports = Wallet;
