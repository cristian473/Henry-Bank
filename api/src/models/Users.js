const Users = (sequelize, S) => {
  // defino el modelo
  const U = sequelize.define(
    "users",
    {
      id: {
        type: S.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      firstName: {
        type: S.STRING,
        allowNull: true,
      },
      lastName: {
        type: S.STRING,
        allowNull: true,
      },
      password: {
        type: S.STRING,
        allowNull: false,
      },
      email: {
        type: S.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      identification: {
        type: S.STRING,
        allowNull: true,
        unique: true,
      },
      phone: {
        type: S.STRING,
        allowNull: true,
      },
      birthDate: {
        type: S.DATEONLY,
        allowNull: true,
      },
      address: {
        type: S.STRING,
        allowNull: true,
      },
      city: {
        type: S.STRING,
        allowNull: true,
      },
      country: {
        type: S.STRING,
        allowNull: true,
      },
      status: {
        type: S.ENUM,
        values: ["Pendiente", "Validado", "Bloqueado"],
        defaultValue: "Pendiente",
      },
      contacts: {
        type: S.ARRAY(S.INTEGER),
        defaultValue: null,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );

  U.addHook("beforeCreate", function (Users, options) {
    let ageCheck = new Date();
    ageCheck.setFullYear(ageCheck.getFullYear() - 16);
    let birthDate = new Date(Users.birthDate);
    if (ageCheck < birthDate) {
      throw new Error("No esta permitido usuarios menores a 16");
    }
  });

  return U;
};

module.exports = Users;
