/*jshint esversion: 6 */
//File: routes/HouseRoutes.js
module.exports = function(app) {

    const House = require('../models/HouseModel.js');

    //GET - Return all houses in the DB
    findAllHouses = function(req, res) {
        House.find(function(err, houses) {
            if (!err) {
                console.log('GET /houses');
                res.send(houses);
            } else {
                console.log('ERROR: ' + err);
            }
        });
    };

    //GET - Return a house with specified ID
    findById = function(req, res) {
        House.findById(req.params.id, function(err, house) {
            if (!err) {
                console.log('GET /house/' + req.params.id);
                res.send(house);
            } else {
                console.log('ERROR: ' + err);
            }
        });
    };

    //POST - Insert a new house in the DB
    addHouse = function(req, res) {
        console.log('POST');
        console.log(req.body);

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
    updateHouse = function(req, res) {
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

    //DELETE - Delete a house with specified ID
    deleteHouse = function(req, res) {
        House.findById(req.params.id, function(err, house) {
            if (!err && house) {
                house.remove(function(err) {
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
    app.get('/houses', findAllHouses);
    app.get('/house/:id', findById);
    app.post('/house', addHouse);
    app.put('/house/:id', updateHouse);
    app.delete('/house/:id', deleteHouse);

};
