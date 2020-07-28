const Sequelize = require("sequelize");

function db() {
<<<<<<< HEAD
  return new Sequelize('postgres://postgres:123@localhost/henryBank', {
    logging: false, // set to console.log to see the raw SQL queries
=======
  return new Sequelize("postgres://postgres:postgres@localhost/henrybank", {
    logging: console.log, // set to console.log to see the raw SQL queries
>>>>>>> 53f5c0b7266a731bb5582e66267b8c2bc1e6fd1e
    native: true, // lets Sequelize know we can use pg-native for ~30% more speed
  });
}

module.exports = db;
