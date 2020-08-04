const server = require("express").Router();
const passport = require("passport");
const axios = require("axios");
const { SMTPClient } = require("emailjs");
const { Users } = require("../models/index.js");
const { GOOGLE_API_KEY } = require("../env-config.js");


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
    res.redirect('http://localhost:3000/cliente');
  }
);

/* server.get("/logout"); */

server.get(
  "/logout",
  function(req, res) {
    req.logout();
    req.session.destroy(function(err) {
       
    });
    res.sendStatus(200)
});




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
    validateEmail(req.user.email, req.user.email_hash);
    res.send(req.user);
  }
);

//Validar y continuar con el registro de un Usuario.
server.get("/validate/account/:email_hash", async (req, res) => {
  const user = await Users.findOne({
    where: { email_hash: req.params.email_hash },
  });
  if (user === null) {
    res
      .status(404)
      .send({
        status: `No se ha encontrado al Usuario especificado. Contacte a su Administrador`,
      });
  } else {
    switch (user.status) {
      case "Pendiente":
        user.update({
          status: "Validado",
        });
        res.redirect(`http://localhost:3000/new/${user.id}`);
        res.send({
          status: `El Usuario ${user.email} ha sido validado correctamente`,
        });
        break;
      case "Validado":
        res.send({ status: `El Usuario ${user.email} ya está validado` });
        break;
      case "Bloqueado":
        res.send({
          status: `El Usuario ${user.email} se encuentra bloqueado. Contacte a su Administrador`,
        });
        break;
      default:
        res.send({ status: `Acción no válida. Contacte a su Administrador` });
        break;
    }
  }
});

//Normalizar una Dirección
server.get("/validate/street", async (req, res) => {
  const { street, city, country } = req.body;
  var input = `${street ? street : ''} ${city ? city : ''} ${country ? country : ''}`.trim();
  await axios.get('https://maps.googleapis.com/maps/api/place/autocomplete/json', {
    params: {
      key: GOOGLE_API_KEY,
      input, 
      language: "es"
    }
  })
  .then((response) => {
    if (response.data.status === 'OK') {
      const results = response.data.predictions;
      var streetArr = []
      results.forEach(r => {
        streetArr.push({street: r.description})
      })
      res.json(streetArr);
    } else {
      res.json({status: 'Sin resultados. Intente usar términos más específicos'})
    }
  });
});

server.get("/me");
server.get("/profileuser", (req, res) => {
  const profile = Users.findOne({
    where: {
      id: req.user.id,
    },
  }).then((result) => {
    if (result === null) {
      res.send("el usuario no ha sido encontrado");
    } else {
      res.send(result);
    }
  });
});

//Administrador puede cambiar status de usuario.
server.put("/changestatus/", (req, res) => {
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
      isLoggedIn: req.isAuthenticated(),
    };
    console.log("###### Variable user del isLoggedIn ######");
    console.log(user);
    return next();
  }
  res.redirect("/login");
}

function validateEmail(email, email_hash) {
  const valUrl = `http://localhost:3001/auth/validate/account/${email_hash}`;

  const client = new SMTPClient({
    user: "henrybank@mauricioarizaga.com.ar",
    password: "Henrybank12345",
    host: "smtp.hostinger.com.ar",
    ssl: false,
    port: 587,
  });

  const message = {
    text: `Bienvenido. Se adjunta enlace para validar y continuar con el registro :${valUrl}`,
    from: "Henry Bank FT02 <henrybank@mauricioarizaga.com.ar>",
    to: `Nuevo Usuario <${email}>`,
    // cc: 'else <else@your-email.com>',
    subject: "Henry Bank - Validación de Usuario",
  };

  // send the message and get a callback with an error or details of the message that was sent
  client.send(message, function (err, message) {
    //console.log(err || message);
  });
}

module.exports = server;
