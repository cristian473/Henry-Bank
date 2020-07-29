// var bCrypt = require('bcrypt-nodejs');
const bcrypt = require("bcrypt");
const { Users, Wallet } = require("./models/index.js");

module.exports = function(passport) {
    var LocalStrategy = require('passport-local').Strategy;

    passport.use('local-signup', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
     
        },
        function(req, email, password, done) {
            console.log(Users);
            Users.findOne({
                where: {
                    email: email
                }
            })
            .then(function(user) {
                if (user) {
                    return done(null, false, {
                        message: 'That email is already taken'
                    });
                } 
                else {
                    console.log(req.body);
                    const {
                        email,
                        password,
                    } = req.body;
                    console.log(req.body);
                    const contraseñahash = bcrypt.hashSync(password, 10);
                    Users.create({
                        email,
                        password: contraseñahash,
                    })
                    .then((user) => {
                        console.log(user);
                        if (!user) {
                            return done(null, false);
                        }
        
                        if (user) {
                            Wallet.create({
                                userId: user.id,
                            });
                            return done(null, user);
                        }
                    })
                    .catch((err) => {
                        console.log("Error:", err);

                        return done(null, false, {
                            message: 'Something went wrong with your Signup'
                        });
                    });
                }
            });
        }
    ));

    //LOCAL SIGNIN
    passport.use('local-signin', new LocalStrategy(
        {
            // by default, local strategy uses username and password, we will override with email
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        function(req, email, password, done) {
            console.log(Users);
            var isValidPassword = function(password, userpass) {
                return bcrypt.compareSync(password, userpass);
            }

            Users.findOne({
                where: {
                    email: email
                },
            })
            .then(function(user) {
                // console.log(user);
                if (!user) {
                    console.log('Email does not exist')
                    return done(null, false, {
                        message: 'Email does not exist'
                    });
                }
                //Comprobación de contraseñas
                //1. Si está previamente encriptada del registro, usa la comprobación por hash
                //2. Si no lo está, usa comprobación normal de strings
                if (!isValidPassword(password, user.password)) {
                    console.log('Incorrect password.')
                    return done(null, false, {
                        message: 'Incorrect password.'
                    });
                }
                // else 
                // if (password !== user.password) {
                //     console.log('Incorrect password.')
                //     return done(null, false, {
                //         message: 'Incorrect password.'
                //     });
                // }

                var userinfo = user.get();
                console.log("###### Variable userinfo del passport.use (signin) ######");
                console.log(userinfo);

                return done(null, userinfo);
            })
            .catch(function(err) {
                console.log("Error:", err);

                return done(null, false, {
                    message: 'Something went wrong with your Signin'
                });
            });
        }
    ));

    //serialize
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // deserialize user 
    passport.deserializeUser(function(id, done) {
        Users.findByPk(id).then(function(user) {
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        });
    });
}