/*jshint esversion: 6 */
//File: routes/CharacterRoutes.js

const Character = require('../models/CharacterSchema.js');
const House = require('../models/HouseSchema.js');

class CharacterController {
    //GET - Return all characters in the DB
    findAllCharacters(req, res) {
        Character.find(function(err, characters) {
            if (!err) {
                console.log('GET /characters');
                res.send(characters);
            } else {
                console.log('ERROR: ' + err);
            }
        });
    }

    //GET - Return a character with specified ID
    findById(req, res) {
        Character.findById(req.params.id, function(err, character) {
            if (!err) {
                console.log('GET /character/' + req.params.id);
                // Find the house with house_id
                House.findById(character.house_id, function(err, house) {
                    if (!err) {
                        character._doc.house = house._doc;
                        res.send(character);
                    } else {
                        console.log('ERROR: ' + err);
                        res.send('ERROR: ' + err);
                    }
                });
                // Send the character with the house
                //res.send(character);
            } else {
                console.log('ERROR: ' + err);
                res.send('ERROR: ' + err);
            }
        });
    }

    //POST - Insert a new character in the DB
    addCharacter(req, res) {
        console.log('POST');
        console.log(req.body);

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
    }

    //PUT - Update a register already exists
    updateCharacter(req, res) {
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
    }

    //DELETE - Delete a character with specified ID
    deleteCharacter(req, res) {
        Character.findById(req.params.id, function(err, character) {
            if (!err && character) {
                character.remove(function(err) {
                    if (!err) {
                        console.log('Removed');
                        res.send({
                            'operation': 'succes'
                        });
                    } else {
                        console.log('ERROR: ' + err);
                        res.send({
                            'operation': err
                        });
                    }
                });
            } else {
                console.log('ERROR: ' + err);
                res.send({
                    'operation': err
                });
            }
        });
    }
}

module.exports = new CharacterController();
