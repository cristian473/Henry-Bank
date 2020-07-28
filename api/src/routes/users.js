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
  const { email, password, firstName, lastName, identification, birthDate, address, city, country } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  Users.create({
    firstName,
    lastName,
    password: hashedPassword,
    email,
    identification,
    birthDate,
    address,
    city,
    country,
  })
  .then((user) => {
    console.log(user);
    Wallet.create({
      userId: user.id,
    });
    return res.json(user);
  })
  .catch((e) => {
    res.sendStatus(404);
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
