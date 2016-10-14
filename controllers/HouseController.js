/*jshint esversion: 6 */
//File: routes/HouseRoutes.js
var House = require('../models/HouseSchema');
var GenericController = require('./GenericController');
// HouseController extends GenericController
var HouseController = new GenericController(House);

//POST - Insert a new house in the DB
HouseController.add = function(req, res) {
    var house = new House({
        name: req.body.name,
        watchword: req.body.watchword,
        imageurl: req.body.imageurl
    });

    house.save(function(err) {
        if (!err) {
            console.log('Created');
        } else {
            console.log('ERROR: ' + err);
        }
    });

    res.send(house);
};

//PUT - Update a register already exists
HouseController.update = function(req, res) {
    House.findById(req.params.id, function(err, house) {
        house.name = req.body.name;
        house.watchword = req.body.watchword;
        house.imageurl = req.body.imageurl;

        house.save(function(err) {
            if (!err) {
                console.log('Updated');
            } else {
                console.log('ERROR: ' + err);
            }
            res.send(house);
        });
    });
};

module.exports = HouseController;
