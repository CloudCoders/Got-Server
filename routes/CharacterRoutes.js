/*jshint esversion: 6 */
module.exports = function(app) {
    var controller = require('../controllers/CharacterController');

    //Link routes and functions
    app.get('/characters', controller.findAll);
    app.get('/character/:id', controller.findById);
    app.post('/character', controller.add);
    app.put('/character/:id', controller.update);
    app.delete('/character/:id', controller.delete);

};
