/*jshint esversion: 6 */
//File: routes/CharacterRoutes.js
module.exports = function(app) {

    const Character = require('../models/CharacterModel.js');
    const House = require('../models/HouseModel.js');
    //GET - Return all characters in the DB
    findAllCharacters = function(req, res) {
        Character.find(function(err, characters) {
            if (!err) {
                console.log('GET /characters');
                res.send(characters);
            } else {
                console.log('ERROR: ' + err);
            }
        });
    };

    //GET - Return a character with specified ID
    findById = function(req, res) {
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
    };

    //POST - Insert a new character in the DB
    addCharacter = function(req, res) {
        console.log('POST');
        console.log(req.body);

        var character = new Character({
            name: req.body.name,
            descripction: req.body.descripction,
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
    updateCharacter = function(req, res) {
        Character.findById(req.params.id, function(err, character) {
            character.name = req.body.name;
            character.descripction = req.body.descripction;
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

    //DELETE - Delete a character with specified ID
    deleteCharacter = function(req, res) {
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
    };

    //Link routes and functions
    app.get('/characters', findAllCharacters);
    app.get('/character/:id', findById);
    app.post('/character', addCharacter);
    app.put('/character/:id', updateCharacter);
    app.delete('/character/:id', deleteCharacter);

};
