/*jshint esversion: 6 */
module.exports = function(app) {
    var controller = require('../controllers/TVShowController');

    //Link routes and functions
    app.get('/tvshows', controller.findAll);
    app.get('/tvshow/:id', controller.findById);
    app.post('/tvshow', controller.add);
    app.put('/tvshow/:id', controller.update);
    app.delete('/tvshow/:id', controller.delete);

};
