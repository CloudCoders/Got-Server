/*jshint esversion: 6 */
module.exports = function(app, passport) {
    var controller = require('../controllers/UserController');
    //Link routes and functions
    app.get('/users', controller.findAll);
    app.get('/user/:id', controller.findById);
    app.post('/user', controller.add);
    app.put('/user/:id', controller.update);
    app.delete('/user/:id', controller.delete);


    app.get('/logout', function(req, res) {
        req.logout();
        res.send('Logout succes');
    });

    // process the signup form
    app.post('/signup', passport.authenticate('local-signup'));

    // process the login form
    app.post('/login', passport.authenticate('local-login'));
};
// Login es autenticar
// Sign Up es crear nuevo usuario

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated()) {
        return next();
    }
    // if they aren't redirect them to the home page
    res.send("Not logged!");
}
