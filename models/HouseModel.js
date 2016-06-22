var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var houseSchema = new Schema({
    name: {
        type: String
    },
    watchword: {
        type: String
    },
    imageurl: {
        type: String
    }
});

module.exports = mongoose.model('house', houseSchema);
