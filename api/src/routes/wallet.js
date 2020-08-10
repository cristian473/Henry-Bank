const server = require("express").Router();
const { Users, Wallet } = require("../models/index.js");

//Obtener todas las Billeteras (Productos) de un Usuario, y darles formato
server.get("/myWallets", (req, res) => {
    Wallet.findAll({ where: { userId: req.body.userId } })
    .then((wallets) => {
        var walletArr = [];
        wallets.forEach(wallet => {
            var accType = wallet.type;
            var currency = wallet.currency;
            var created = wallet.createdAt.toISOString().split('T')[0];
            walletArr.push({accType, currency, created});
        })
        res.status(200).json(walletArr);
    })
    .catch((err) => {
        res.json({ err });
    });
});

//Obtener la Billetera de un Usuario
server.get("/:id", (req, res) => {
    Wallet.findOne({ where: { userId: req.params.id } })
    .then((wallet) => {
        res.status(200).json(wallet);
    })
    .catch((err) => {
        res.json({ err });
    });
});

module.exports = server;