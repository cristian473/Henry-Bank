const Transactions = (sequelize, S) => {
  // defino el modelo
  const T = sequelize.define("transactions", {
    idSender: {
      type: S.INTEGER,
      allowNull: true,
    },
    idReceiver: {
      type: S.INTEGER,
      allowNull: true,
    },
    value: {
      type: S.DECIMAL(10, 2),
      allowNull: true,
    },
    type: {
      type: S.STRING,
      allowNull: true,
    },
    state: {
      type: S.ENUM(["Procesada", "Aceptada", "Rechazada"]),
      allowNull: true,
    },
    description: {
      type: S.TEXT,
      allowNull: true,
    },
    transactionNumber: {
      type: S.INTEGER,
      allowNull: false,
    }
  });

  return T;
};

module.exports = Transactions;
