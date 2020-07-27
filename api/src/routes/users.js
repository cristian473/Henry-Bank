const server = require("express").Router();
const { Router } = require("express");
const router = Router();
const { Users, Wallet } = require("../models/index.js");
const session = require("express-session");
const bcrypt = require("bcrypt");
const passport = require("passport");
const passportLocal = require("./pass.js");

passport.serializeUser(function (users, done) {
  done(null, users.id);
});

passport.deserializeUser(function (id, done) {
  Users.findById(id, function (err, users) {
    done(err, users);
  });
});

//secreto
server.use(
  session({
    secret: "hbft",
    resave: true,
    saveUninitialized: true,
  })
);

server.use(passport.initialize());
server.use(passport.session());

server.post("/new", async (req, res) => {
  console.log(req.body);
  const contraseñahash = await bcrypt.hash(req.body.password, 10);
  Users.create({
    email: req.body.email,
    password: contraseñahash,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    identification: req.body.identification,
    birthDate: req.body.birthdate,
    address: req.body.address,
    city: req.body.city,
    country: req.body.country,
  })
    .then((user) => {
      res.json(user);
      return user;
    })
    .then((user) => {
      console.log(user);
      Wallet.create({
        idUser: user.userId,
      });
    });
});

server.post("/login", (req, res, next) => {
  console.log(req.body);
  console.log(req.session);
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return json({
        success: false,
        message: err.message,
        info,
      });
    }
    if (!user) {
      return res.json({
        success: false,
        info,
      });
    }
    req.logIn(user, function (err) {
      if (err) {
        return res.json(err);
      }
      return res.json({
        success: true,
        message: "You have successfully logged in!",
        info,
        user,
      });
    });
  });
});
module.exports = server;
