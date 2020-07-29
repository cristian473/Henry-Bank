const server = require("express").Router();
const passport = require("passport");
const { Users, Wallet } = require("../models/index.js");

server.post("/changepassword");

server.post(
  "/login",
  function (req, res, next) {
    console.log("routes/auth.js, login, req.body: ");
    console.log(req.body);
    next();
  },
  passport.authenticate("local-signin"),
  (req, res) => {
    console.log("logged in", req.user);
    res.send(req.user);
  }
);

server.get("/logout");

server.post(
  "/register",
  function (req, res, next) {
    console.log("routes/auth.js, register, req.body: ");
    console.log(req.body);
    next();
  },
  passport.authenticate("local-signup", {
    // successRedirect: '/login',
    // failureRedirect: '/signup',
    // badRequestMessage: "You must fill in all of the form fields.",
    // failureFlash: true, // allow flash,
    session: false, // prevent auto-login
  }),
  (req, res) => {
    console.log("registered", req.user);
    res.send(req.user);
  }
);

server.get("/me");

//Adminsitrador puede cambiar status de usuario.
server.put("/cambiarstatus/", (req, res) => {
  Users.findOne({
    where: {
      id: req.body.id,
    },
  }).then((user) => {
    user.update({
      status: req.body.status,
    });
    res.send(user);
  });
});

function isLoggedIn(req, res, next) {
  // console.log("###### Parámetro req del isLoggedIn ######");
  // console.log(req);
  if (req.isAuthenticated()) {
    console.log("###### Propiedad session del isLoggedIn ######");
    console.log(req.session);
    var user = {
      id: req.session.passport.user,
      isloggedin: req.isAuthenticated(),
    };
    console.log("###### Variable user del isLoggedIn ######");
    console.log(user);
    return next();
  }
  res.redirect("/login");
}

module.exports = server;
