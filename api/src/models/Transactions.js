const Transactions = (sequelize, S) => {
  // defino el modelo
  const T = sequelize.define("transactions", {
    id: {
      type: S.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    idSender: {
      type: S.INTEGER,
      allowNull: false,
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
      type: S.ENUM(["Procesada", "Aceptada", "Rechazada"]),
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
