const { Router } = require("express");
const server = require("express").Router();
const router = Router();
const { Op } = require("sequelize");
const { Users } = require("../models/index.js");

//Ruta para traer contactos de un usuario

server.get("/:idUser", (req,res) => {

    const idUser =  req.params.idUser
    
    Users.findByPk(idUser)
        .then(user => {
            var contacts =  user.contacts
            var contactsUser = [];

            contacts.forEach(element => {
                Users.findByPk(element)
                .then(contact => {

                    //No estoy pudiendo pushear el contacto que encuentro en el array
                    //que defini mas arriba
                    contactsUser.push(contact);
                })
                
            });

            

            if(contactsUser!=={}) res.status(200).send(contactsUser)
            else res.status(404).json({message: "No se tiene contactos"})
        })

        .catch(err => res.status(400).json(err));


})


server.post('/:idUser/addContact', (req,res)=> {

    const idUser =  req.params.idUser;
    const email = req.body.email;

    let usuario = Users.findByPk(idUser)
    let agregado = Users.findOne({where: {email: email}})
    

    Promise.all([usuario,agregado])
        .then(users=>{
            var contacts = users[0].contacts;
            contacts.push(users[1].id)

            Users.update({
                contacts: contacts
            },{
                returning: true, where: {id: users[0].id}
            })
            .then(userUpdated=>{
                res.status(200).send(userUpdated);
            })




        })

        .catch(err => { res.status(400).send(err); 
                    console.log(err)});
        
    
})


module.exports = server;