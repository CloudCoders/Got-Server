/*jshint esversion: 6 */
module.exports = function(app) {
    var controller = require('../controllers/HouseController');

    //Link routes and functions
    app.get('/houses', controller.findAll);
    app.get('/house/:id', controller.findById);
    app.post('/house', controller.add);
    app.put('/house/:id', controller.update);
    app.delete('/house/:id', controller.delete);

};
