/*jshint esversion: 6 */
var TVShow = require('../models/tvshow.js');
//es6 not yet import TvShowFatherController from './tvshowController';
var GenericController = require('./genericController');

class TvShowSoonController extends GenericController {
    constructor() {
        super(TVShow);
    }

    // TODO Override some function
}
module.exports = new TvShowSoonController();
