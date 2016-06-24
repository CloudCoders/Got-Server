/*jshint esversion: 6 */
var TVShow = require('../models/TVShowSchema');
//es6 not yet import TvShowFatherController from './tvshowController';
var GenericController = require('./GenericController');

var TvShowSoonController = new GenericController(TVShow);

//POST - Insert a new TVShow in the DB
TvShowSoonController.add = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var tvshow = new TVShow({
        title: req.body.title,
        year: req.body.year,
        country: req.body.country,
        poster: req.body.poster,
        seasons: req.body.seasons,
        genre: req.body.genre,
        summary: req.body.summary
    });

    tvshow.save(function(err) {
        if (!err) {
            console.log('Created');
        } else {
            console.log('ERROR: ' + err);
        }
    });

    res.send(tvshow);
};

//PUT - Update a register already exists
TvShowSoonController.update = function(req, res) {
    TVShow.findById(req.params.id, function(err, tvshow) {
        tvshow.title = req.body.title;
        tvshow.year = req.body.year;
        tvshow.country = req.body.country;
        tvshow.poster = req.body.poster;
        tvshow.seasons = req.body.seasons;
        tvshow.genre = req.body.genre;
        tvshow.summary = req.body.summary;

        tvshow.save(function(err) {
            if (!err) {
                console.log('Updated');
            } else {
                console.log('ERROR: ' + err);
            }
            res.send(tvshow);
        });
    });
};
module.exports = TvShowSoonController;
