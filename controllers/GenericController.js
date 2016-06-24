/*jshint esversion: 6 */
//File: routes/tvshows.js
function GenericController(schema) {

    var _schema = schema;

    //GET - Return all _schema in the DB
    GenericController.prototype.findAll = function(req, res) {
        _schema.find(function(err, oBean) {
            if (!err) {
                console.log(`GET /findAll`);
                res.send(oBean);
            } else {
                console.log('ERROR: ' + err);
            }
        });
    };

    //GET - Return a _schema with specified ID
    GenericController.prototype.findById = function(req, res) {
        _schema.findById(req.params.id, function(err, oBean) {
            if (!err) {
                console.log('GET /findById/' + req.params.id);
                res.send(oBean);
            } else {
                console.log('ERROR: ' + err);
            }
        });
    };

    //DELETE - Delete a _schema with specified ID
    GenericController.prototype.delete = function(req, res) {
        _schema.findById(req.params.id, function(err, oBean) {
            if (!err && oBean) {
                oBean.remove(function(err) {
                    if (!err) {
                        console.log('Removed');
                        res.send({
                            'operation': 'succes'
                        });
                    } else {
                        console.log('ERROR: ' + err);
                        res.send({
                            'operation': err
                        });
                    }
                });
            } else {
                console.log('ERROR: ' + err);
                res.send({
                    'operation': err
                });
            }
        });
    };
}

module.exports = GenericController;
