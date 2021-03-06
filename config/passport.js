// config/passport.js

// load all the things we need
var LocalStrategy = require('passport-local').Strategy;

// load up the user model
var User = require('../models/UserSchema');

// expose this function to our app using module.exports
module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            if (err) {
                return done(err);
            }
            done(err, user);
        });
    });

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-signup', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        function(req, username, password, done) {

            // asynchronous
            // User.findOne wont fire unless data is sent back
            process.nextTick(function() {

                // find a user whose email is the same as the forms email
                // we are checking to see if the user trying to login already exists
                User.findOne({
                    'username': username
                }, function(err, user) {
                    // if there are any errors, return the error
                    if (err) {
                        return done(err);
                    }
                    // check to see if theres already a user with that email
                    if (user) {
                        return done(null, false, {
                            'status': false,
                            'message': 'El usuario ya existe.'
                        });
                    } else {

                        // if there is no user with that email
                        // create the user
                        var newUser = new User();

                        // set the user's local credentials
                        newUser.username = username;
                        //newUser.password = password; // ******* Modificar para password encriptado
                        newUser.password = newUser.encriptPass(password);

                        // save the user
                        newUser.save(function(err) {
                            if (!err) {
                                return done(null, false, {
                                    'status': true,
                                    'user': newUser,
                                    'message': 'Registrado con exito.'
                                });
                            } else {
                                return done(null, false, {
                                    'status': false,
                                    'message': 'Fallo al guardar'
                                });
                            }
                        });
                    }

                });

            });

        }));

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-login', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        function(req, username, password, done) { // callback with email and password from our form

            // find a user whose email is the same as the forms email
            // we are checking to see if the user trying to login already exists
            User.findOne({
                'username': username
            }, function(err, user) {
                // if there are any errors, return the error before anything else
                if (err) {
                    return done(err);
                }
                // if no user is found, return the message
                if (!user) {
                    return done(null, false, {
                        'message': 'Usuario no encontrado.'
                    }); // req.flash is the way to set flashdata using connect-flash
                }
                // if the user is found but the password is wrong
                if (!user.validEncriptPassword(password)) { // ******* Modificar para password encriptado
                    return done(null, false, {
                        'message': 'Oops! El password esta mal.'
                    }); // create the loginMessage and save it to session as flashdata
                }
                // all is well, return successful user
                return done(null, user);
            });
        }));
};
