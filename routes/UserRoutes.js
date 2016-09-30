/*jshint esversion: 6 */
module.exports = function(app, passport) {
    var controller = require('../controllers/UserController');
    //Rutas genericas publicas
    app.get('/users', controller.findAll);
    app.get('/user/:id', controller.findById);

		//Rutas genericas privadas
    app.post('/user', function(req, res) {
        isLoggedIn(req, res, controller.add);
    });
    app.put('/user/:id', function(req, res) {
        isLoggedIn(req, res, controller.update);
    });
    app.delete('/user/:id', function(req, res) {
        isLoggedIn(req, res, controller.delete);
    });

    app.get('/logout', function(req, res) {
        req.logout();
        res.send('Logout succes');
    });

    // Registra un nuevo usuario
    app.post('/signup', passport.authenticate('local-signup'));
    // Loguea un usuario y lo mete en sesion
    app.post('/login', passport.authenticate('local-login'),
        // Si esta logueado devuelve el user
        function(req, res) {
            res.send("Logueado con exito!!!");
        }
    );
};

//Comprueba que el usuario esta registrado en la sesion
function isLoggedIn(req, res, callback) {
    // Si el user esta autenticado ejecuta el callback pasandole res y req
    if (req.isAuthenticated()) {
        return callback(req, res);
    }
    res.send("Not logged! Nor permited.");
}
