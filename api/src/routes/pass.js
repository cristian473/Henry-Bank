const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const { Router } = require("express");
const router = Router();
const { Users } = "../models/index.js";
const server = require("./users");
const passport = require("passport");
const { serializeUser, deserializeUser } = require("passport");
const e = require("express");

function passportLocal() {
  console.log("Hola Primer Local");
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "contraseña",
      },
      function (email, password, done) {
        console.log("Hola Local");
        console.log(email);
        console.log(password);
        Users.findOne({ where: { email: email } })
          .then((user) => {
            console.log(user);
            if (!user) {
              return done(null, false, {
                message: "El correo electrónico no existe.",
              });
            }
            if (!user.checkPassword(password)) {
              return done(null, false, {
                message: "La contraseña es incorrecta.",
              });
            }
            return done(null, user);
          })
          .catch((err) => {
            if (err) {
              return done(err);
            }
          });
      }
    )
  );
}
module.exports = passportLocal;
