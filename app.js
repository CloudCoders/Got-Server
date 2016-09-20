/*jshint esversion: 6 */
var express = require("express"),
    app = express(),
    http = require("http"),
    server = http.createServer(app),
    mongoose = require('mongoose'),
    passport = require('passport'),
    session = require('express-session');

// db connection
mongoose.connect('mongodb://localhost/gotdb', function(err, res) {
    if (err) {
        console.log('ERROR: connecting to Database. ' + err);
    } else {
        console.log('Connected to Database');
    }
});

// middlewares
app.configure(function() {
	app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(express.methodOverride());
		app.use(session({
				secret: 'stronquens is the best'
		})); // session secret
    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions
    app.use(app.router);
});
// Passport login -signup
require('./config/passport')(passport);

// import routes
require('./routes/TVShowRoutes')(app, passport);
require('./routes/CharacterRoutes')(app, passport);
require('./routes/HouseRoutes')(app, passport);
require('./routes/UserRoutes')(app, passport);

// server start
server.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
});
