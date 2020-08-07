const Sequelize = require("sequelize");

function db() {
<<<<<<< HEAD
  return new Sequelize(
    "postgres://postgres:postgres@localhost:5432/henrybank",
    {
      logging: console.log, // set to console.log to see the raw SQL queries
      native: true, // lets Sequelize know we can use pg-native for ~30% more speed
    }
  );
=======
  return new Sequelize("postgres://postgres:123@localhost/henryBank", {
    logging: false, // set to console.log to see the raw SQL queries
    native: true, // lets Sequelize know we can use pg-native for ~30% more speed
  });
>>>>>>> 460884c68be7167eaf08af723ee34b99f5d451ab
}

module.exports = db;
