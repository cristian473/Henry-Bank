const { Router } = require("express");
const server = require("express").Router();
const router = Router();
const { Op } = require("sequelize");
const { Users } = require("../models/index.js");

//Ruta para traer contactos de un usuario

server.get("/:idUser", (req,res) => {

    const idUser =  req.params.idUser
    
    //busco el usuario por id
    Users.findByPk(idUser)
        .then(user => {
            var contacts =  user.contacts
            //creo un array vacío
            var contactsUser = [];
               
            if (contacts)
            {
                    for (let i = 0; i < contacts.length; i++) {
                    
                    Users.findByPk(contacts[i])
                        .then(contact => {
                            
                            //pusheo en el nuevo array, los contactos que voy encontrando
                            contactsUser.push(contact);

                            //en la ultima iteracion devuelvo el array con la info de todos los contactos
                            if(i==contacts.length-1)
                                res.status(200).json({contactsUser})

                        

                        })
                }
            }
            
            else{
                res.status(404).json({message: "No se tiene contactos aúnnnnnnnn"})
            }
            
        })

        .catch(err => res.status(400).json({err}));


})


server.post('/:idUser/addContact', (req,res)=> {

    const idUser =  req.params.idUser;
    const email = req.body.email;

    //busco usuario y usuario a agregar
    let usuario = Users.findByPk(idUser)
    let agregado = Users.findOne({where: {email: email}})
    

    Promise.all([usuario,agregado])
        .then(users=>{
            var contacts = users[0].contacts;
            //pusheo en el array de contactos el id del contacto a agregar
            contacts.push(users[1].id)

            //updateo el array con el nuevo array que creé
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



server.delete('/:idUser/deleteContact', (req,res) => {

    const idUser =  req.params.idUser;
    const email = req.body.email;

    //busco usuario y usuario a borrar

    let usuario = Users.findByPk(idUser)
    let deleteado = Users.findOne({where: {email: email}})
    

    Promise.all([usuario,deleteado])
        .then(users=>{
            var contacts = users[0].contacts;
            //creo un nuevo array donde NO exista el id del usuario que quiero borrar
            const newContacts = contacts.filter(idUsers =>  idUsers != users[1].id)

            //modifico el array de contactos con el nuevo array que excluyó el id a eliminar
            Users.update({
                contacts: newContacts
            },{
                returning: true, where: {id: users[0].id}
            })
            .then(userUpdated=>{
                res.status(200).send(userUpdated);
            })




        })

        .catch(err => { res.status(400).send(err)});


})


module.exports = server;