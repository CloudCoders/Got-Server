/*jshint esversion: 6 */
module.exports = function(app) {
    //var controller = require('../controllers/tvshowController');
    var controller = require('../controllers/tvshowSoonController');

    //Link routes and functions
    app.get('/tvshows', controller.findAllTVShows);
    app.get('/tvshow/:id', controller.findById);
    app.post('/tvshow', controller.addTVShow);
    app.put('/tvshow/:id', controller.updateTVShow);
    app.delete('/tvshow/:id', controller.deleteTVShow);

};
