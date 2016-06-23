/*jshint esversion: 6 */
module.exports = function(app) {
    //var controller = require('../controllers/tvshowController');
    var controller = require('../controllers/HouseController');

    //Link routes and functions
    app.get('/houses', controller.findAllHouses);
    app.get('/house/:id', controller.findById);
    app.post('/house', controller.addHouse);
    app.put('/house/:id', controller.updateHouse);
    app.delete('/house/:id', controller.deleteHouse);

};
