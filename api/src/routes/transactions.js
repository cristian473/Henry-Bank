const { Router } = require("express");
const server = require("express").Router();
const router = Router();
const { Op } = require("sequelize");
const { Wallet, Transactions, Merchants } = require("../models/index.js");

//do transactions

//cargar dinero//

server.post("/loadBalance/:idUser", async (req, res) => {
  const { idUser } = req.params;
  const saldo = await Wallet.findOne({
    where: { userId: req.params.idUser },
  });
  const value = Math.floor((Math.random() * 10000) + 1);
  const saldoConsolidado =
    parseFloat(saldo.balance) + parseFloat(value);
  await Wallet.update(
    {
      balance: saldoConsolidado,
    },
    {
      returning: true,
      where: { userId: idUser },
    }
  )
    .then(async (newBalance) => {
      const randomToken = function () {
        return Math.floor((Math.random() * 5) + 1)
      };
      const randomTransactionNumber = function () {
        return Math.floor((Math.random() * 500000) + 1)
      };
      const merchant = Merchants.findOne({
        where: { id: randomToken() }
      });
      const transactions = Transactions.create({
        idSender: 0,
        idReceiver: idUser,
        type: "Carga",
        value: value,
        state: "Aceptada",
        transactionNumber: randomTransactionNumber()
      });
      const prom = await Promise.all([merchant, newBalance, transactions])
      res.status(200).json(prom);
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
});

//transferencia de dinero//

server.put("/:idSender/:idReceiver", async (req, res) => {
  let money = req.body.money;
  const { idSender, idReceiver } = req.params;
  const randomTransactionNumber = function () {
    return Math.floor((Math.random() * 500000) + 1)
  };
  //busqueda de wallets
  let userSender = await Wallet.findOne({ where: { userId: idSender } });
  let userReceiver = await Wallet.findOne({
    where: { userId: idReceiver },
  });
  console.log(userSender.balance)
  if (userSender.balance <= money) {
    Promise.all([userSender, userReceiver])
      .then((users) => {
        //convertir los valores a decimal
        let moneyFloat = parseFloat(money);
        let balanceReceiver = parseFloat(users[1].balance);
        let balanceSender = parseFloat(users[0].balance);
        //suma y resta de montos
        let newBalanceSender = balanceSender - moneyFloat;
        let newBalanceReceiver = balanceReceiver + moneyFloat;

        //updates en las dos billeteras
        let receiver = Wallet.update(
          {
            balance: newBalanceReceiver,
          },
          {
            returning: true,
            where: { userId: idReceiver },
          }
        );
        let send = Wallet.update(
          {
            balance: newBalanceSender,
          },
          {
            returning: true,
            where: { userId: idSender },
          }
        );

        Promise.all([send, receiver])
          .then((promises) => {
            //se registra la transaccion
            Transactions.create({
              idSender: idSender,
              idReceiver: idReceiver,
              type: "Transferencia",
              value: money,
              state: "Aceptada",
              transactionNumber: randomTransactionNumber()
            })
              .then((transaccion) =>
                res.status(200).json({
                  message:
                    "transaccion N°" + transaccion.id + " realizada con exito!",
                  transaccion,
                })
              )
              .catch((err) => {
                res.status(400).json({
                  message: "No se registro el movimiento",
                });
              });
          })

          .catch((err) => {
            res
              .status(400)
              .json({ message: "No se pudo modificar el saldo", err });
          });
      })

      .catch((err) =>
        res.status(400).json({
          message:
            "Usuario no encontrado! por favor ingrese nuevamente los usuarios",
          error: err,
        })
    );} else {
      res.json({ message: "el usuario no tiene fondos suficientes" })
    }
});

//RUTA PARA RETORNAR SUMA GENERAL DE INGRESOS Y EGRESOS X USUARIO//

server.get("/history/:idUser", (req, res) => {
  //busco todas las transacciones del cliente y las separo por ingresos y decrementos
  const { idUser } = req.params;
  let ingresos = Transactions.findAll({
    where: { idReceiver: idUser },
  });
  let decrements = Transactions.findAll({
    where: { idSender: idUser },
  });

  Promise.all([ingresos, decrements])
    .then((transacciones) => {
      var ing = 0.0;
      var dec = 0.0;

      transacciones[0].forEach((element) => {
        //parseo a Decimal de nuevo ¬¬
        ing = parseFloat(ing) + parseFloat(element.value);
      });

      transacciones[1].forEach((element) => {
        dec = parseFloat(dec) + parseFloat(element.value);
      });
      res.status(200).json({ ingresos: ing, decrements: dec });
    })

    .catch((err) =>
      res.status(400).json({ message: "no se pudo realizar la consulta" })
    );
});

//RUTA PARA RETORNAR SUMA GENERAL POR FECHA DE INGRESOS Y EGRESOS X USUARIO//

server.get("/history/time/:idUser", async (req, res) => {
  //LA FECHA LE LLEGA POR BODY.DATE EN FORMATO "new Date()"
  var d = req.body.date;
  const idUser = req.params.idUser;
  //busco todas las transacciones del cliente y las separo por ingresos y decrementos
  let ingresos = await Transactions.findAll({
    where: { idReceiver: req.params.idUser, createdAt: { [Op.gt]: d } },
  });
  let decrements = await Transactions.findAll({
    where: { idSender: req.params.idUser, createdAt: { [Op.gt]: d } },
  });

  Promise.all([ingresos, decrements])
    .then((transacciones) => {
      var ing = 0.0;
      var dec = 0.0;

      transacciones[0].forEach((element) => {
        //parseo a Decimal de nuevo ¬¬
        const e = element.dataValues;
        ing = parseFloat(ing) + parseFloat(e.value);
      });

      transacciones[1].forEach((element) => {
        const e = element.dataValues;
        dec = parseFloat(dec) + parseFloat(e.value);
      });
      res.status(200).json({ ingresos: ing, decrements: dec });
    })

    .catch((err) =>
      res.status(400).json({ message: "no se pudo realizar la consulta" })
    );
});

// server.get('/recargatoken', (req, res) =>{
//   var token = function () {
//     return Math.floor((Math.random() * 10000000000) + 1)
//   };
//   res.json(token());
// });

module.exports = server;
