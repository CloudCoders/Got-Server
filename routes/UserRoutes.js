/*jshint esversion: 6 */
module.exports = function(app, passport) {
    var controller = require('../controllers/UserController');

    // Private acces, only if loggued in
    app.get('/users', function(req, res) {
        isLoggedIn(req, res, controller.findAll);
    });
    app.get('/user/:id', function(req, res) {
        isLoggedIn(req, res, controller.findById);
    });
    app.put('/user/:id', function(req, res) {
        isLoggedIn(req, res, controller.update);
    });
    app.delete('/user/:id', function(req, res) {
        isLoggedIn(req, res, controller.delete);
    });

    // public access, not logged
    app.get('/logout', function(req, res) {
        req.logout();
        res.send({
            'status': true,
            'message': 'Logout succes'
        });
    });
    // Registra un nuevo usuario
    app.post('/signup', function(req, res, next) {
        passport.authenticate('local-signup', function(err, user, info) {
            if (err) {
                return next(err); // will generate a 500 error
            }
            return res.send(info); // Imprime el mensaje generado en config/passport
        })(req, res, next);
    });
    // Loguea un usuario y lo mete en sesion
    app.post('/login',
        function(req, res, next) {
            passport.authenticate('local-login', function(err, user, info) {
                if (err) {
                    return next(err); // will generate a 500 error
                }
                // Generate a JSON response reflecting authentication status
                if (!user) {
                    return res.send({
                        success: false,
                        message: info.message // Imprime el mensaje generado en config/passport
                    });
                }
                req.login(user, loginErr => {
                    if (loginErr) {
                        return next(loginErr);
                    }
                    return res.send({
                        success: true,
                        message: 'autenticado con exito'
                    });
                });
            })(req, res, next);
        }
    );
};

//Comprueba que el usuario esta registrado en la sesion
function isLoggedIn(req, res, callback) {
    // Si el user esta autenticado ejecuta el callback pasandole res y req
    if (req.isAuthenticated()) {
        return callback(req, res);
    }
    res.send("No estas logueado!");
}
