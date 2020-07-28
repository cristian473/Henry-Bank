const { Router } = require("express");
const server = require("express").Router();
const router = Router();
const { Op } = require("sequelize");
const { Users, Wallet, Transactions } = require("../models/index.js");

//do transactions

//cargar dinero//

server.post("/loadBalance/:idUser", (req, res) => {
  Wallet.update(
    {
      balance: req.body.money,
    },
    {
      returning: true,
      where: { userId: req.params.idUser },
    }
  )
    .then((newBalance) => {
      res.status(200).send(newBalance);
      Transactions.create({
        idReceiver: req.params.idUser,
        type: "Carga",
        balanceType: "increment",
        value: req.body.money,
        state: "Aceptado",
      });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
});

//transferencia de dinero//

server.put("/:idSender/:idReceiver", (req, res) => {
  let money = req.body.money;
  //busqueda de wallets
  let userSender = Wallet.findOne({ where: { userId: req.params.idSender } });
  let userReceiver = Wallet.findOne({
    where: { userId: req.params.idReceiver },
  });

  Promise.all([userSender, userReceiver])
    .then((users) => {
      //convertir los valores a decimal
      let moneyFloat = parseFloat(money);
      let ballanceReceiver = parseFloat(users[1].balance);
      let ballanceSender = parseFloat(users[0].balance);
      //suma y resta de de montos
      let newBalanceSender = ballanceSender - moneyFloat;
      let newBalanceReceiver = ballanceReceiver + moneyFloat;

      //updates en las dos billeteras
      let receiver = Wallet.update(
        {
          balance: newBalanceReceiver,
        },
        {
          returning: true,
          where: { userId: req.params.idReceiver },
        }
      );
      let send = Wallet.update(
        {
          balance: newBalanceSender,
        },
        {
          returning: true,
          where: { userId: req.params.idSender },
        }
      );

      Promise.all([send, receiver])
        .then((promises) => {
          //se registra la transaccion
          Transactions.create({
            idSender: req.params.idSender,
            idReceiver: req.params.idReceiver,
            type: "Transferencia",
            balanceType: "decrement & increment",
            value: req.body.money,
            state: "Aceptado",
          })
            .then((transaccion) =>
              res
                .status(200)
                .json({
                  message:
                    "transaccion N°" + transaccion.id + " realizada con exito!",
                  transaccion,
                })
            )
            .catch((err) =>
              res.status(400).json({ message: "No se registró el movimiento" })
            );
        })

        .catch((err) => {
          res
            .status(400)
            .json({ message: "No se pudo modificar el saldo", err });
        });
    })

    .catch((err) =>
      res
        .status(400)
        .json({
          message:
            "Usuario no encontrado! por favor ingrese nuevamente los usuarios",
          error: err,
        })
    );
});

//RUTA PARA RETORNAR SUMA GENERAL DE INGRESOS Y EGRESOS X USUARIO//

server.get("/history/:idUser", (req, res) => {
  //busco todas las transacciones del cliente y las separo por ingresos y decrementos
  let ingresos = Transactions.findAll({
    where: { idReceiver: req.params.idUser },
  });
  let decrements = Transactions.findAll({
    where: { idSender: req.params.idUser },
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

server.get("/history/time/:idUser", (req, res) => {
  //LA FECHA LE LLEGA POR BODY.DATE EN FORMATO "new Date()"
  var d = req.body.date;

  //busco todas las transacciones del cliente y las separo por ingresos y decrementos
  let ingresos = Transactions.findAll({
    where: { idReceiver: req.params.idUser, createdAt: { [Op.gt]: d } },
  });
  let decrements = Transactions.findAll({
    where: { idSender: req.params.idUser, createdAt: { [Op.gt]: d } },
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

module.exports = server;
