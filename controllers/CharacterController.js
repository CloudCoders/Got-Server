/*jshint esversion: 6 */
//File: routes/CharacterRoutes.js
const Character = require('../models/CharacterSchema');
const House = require('../models/HouseSchema');

var GenericController = require('./GenericController');
// CharacterController extends GenericController
var CharacterController = new GenericController(Character);

//POST - Insert a new character in the DB
CharacterController.add = function(req, res) {
    var character = new Character({
        name: req.body.name,
        description: req.body.description,
        imageurl: req.body.imageurl,
        house_id: req.body.house_id
    });

    character.save(function(err) {
        if (!err) {
            console.log('Created');
        } else {
            console.log('ERROR: ' + err);
        }
    });

    res.send(character);
};

//PUT - Update a register already exists
CharacterController.update = function(req, res) {
    Character.findById(req.params.id, function(err, character) {
        character.name = req.body.name;
        character.description = req.body.description;
        character.imageurl = req.body.imageurl;
        character.house_id = req.body.house_id;

        character.save(function(err) {
            if (!err) {
                console.log('Updated');
            } else {
                console.log('ERROR: ' + err);
            }
            res.send(character);
        });
    });
};

// Override
//GET - Return a character with specified ID
CharacterController.findById = function(req, res) {
    Character.findById(req.params.id, function(err, character) {
        if (!err) {
            // Find the house with house_id
            House.findById(character.house_id, function(err, house) {
                if (!err) {
                    character._doc.house = house._doc;
                    res.send(character);
                } else {
                    res.send('ERROR: ' + err);
                }
            });
            // Send the character with the house
            //res.send(character);
        } else {
            res.send('ERROR: ' + err);
        }
    });
};

module.exports = CharacterController;
