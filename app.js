/*jshint esversion: 6 */
const express = require("express"),
    app = express(),
    http = require("http"),
    server = http.createServer(app),
    mongoose = require('mongoose');

// middlewares
app.configure(function() {
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
});
// test
app.get('/', function(req, res) {
    res.send("Hello world!");
});

// import routes
tvShowRoutes = require('./routes/tvshowRoutes')(app);
characterRoutes = require('./routes/CharacterRoutes')(app);
houseRoutes = require('./routes/HouseRoutes')(app);

// db connection
mongoose.connect('mongodb://localhost/gotdb', function(err, res) {
    if (err) {
        console.log('ERROR: connecting to Database. ' + err);
    } else {
        console.log('Connected to Database');
    }
});

// server start
server.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
});
