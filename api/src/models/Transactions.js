const Transactions = (sequelize, S) => {
  // defino el modelo
  const T = sequelize.define("transactions", {
    id: {
      type: S.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
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
    type:{
      type: S.STRING,
      allowNull: false
    },
    state: {
      type: S.ENUM(["Procesada", "Aceptada", "Rechazada"]),
      allowNull: true,
    },
    description: {
      type: S.TEXT,
      allowNull: true,
    },
  });

  return T;
};

module.exports = Transactions;
