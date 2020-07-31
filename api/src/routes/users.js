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
    email_hash: email,
  })
    .then((user) => {
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
      res.status(200).json(user);
    })
    .catch((err) => {
      res.json({ err });
    });
});

module.exports = server;
