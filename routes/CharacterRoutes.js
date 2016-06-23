/*jshint esversion: 6 */
module.exports = function(app) {
    //var controller = require('../controllers/tvshowController');
    var controller = require('../controllers/CharacterController');

    //Link routes and functions
    app.get('/characters', controller.findAllCharacters);
    app.get('/character/:id', controller.findById);
    app.post('/character', controller.addCharacter);
    app.put('/character/:id', controller.updateCharacter);
    app.delete('/character/:id', controller.deleteCharacter);

};
