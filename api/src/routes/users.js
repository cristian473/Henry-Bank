const server = require("express").Router();
const bcrypt = require("bcrypt");
const { Users, Wallet } = require("../models/index.js");

server.get("/", (req, res) => {
  Users.findAll({
    order: [["id", "ASC"]],
  }).then((e) => {
    res.send(e);
  });
});

server.post("/new", async (req, res) => {
  console.log(req.body);
  const {
    email,
    password,
    firstName,
    lastName,
    identification,
    phone,
    birthDate,
    address,
    city,
    country,
  } = req.body;
  console.log(req.body);
  const contraseñahash = await bcrypt.hash(password, 10);
  Users.create({
    email,
    password: contraseñahash,
    firstName,
    lastName,
    identification,
    phone,
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
    .catch((err) => {
      if (err.original) res.send(err.original.messageDetail);
      else res.send("Error de validación de datos");
      //res.status(500).json({ err });
    });
});

//Get Wallet for IdUser
server.get("/wallet/:id", (req, res) => {
  Wallet.findOne({ where: { userId: req.params.id } })
    .then((user) => {
      console.log(user);
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(err).json({ err });
    });
});

module.exports = server;
