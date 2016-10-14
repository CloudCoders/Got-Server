/*jshint esversion: 6 */
const User = require('../models/UserSchema');

var GenericController = require('./GenericController');
var UserController = new GenericController(User);

//POST - Insert a new character in the DB
UserController.add = function(req, res) {
    var user = new User({
        username: req.body.username,
        password: req.body.password
    });

    user.save(function(err) {
        if (!err) {
            console.log('Created');
        } else {
            console.log('ERROR: ' + err);
        }
    });

    res.send(user);
};

//PUT - Update a register already exists
UserController.update = function(req, res) {
    User.findById(req.params.id, function(err, user) {
        user.username = req.body.username;
        user.password = req.body.password;

        user.save(function(err) {
            if (!err) {
                console.log('Updated');
            } else {
                console.log('ERROR: ' + err);
            }
            res.send(user);
        });
    });
};

module.exports = UserController;
