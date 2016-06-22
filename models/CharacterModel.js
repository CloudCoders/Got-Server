/*jshint esversion: 6 */
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const characterSchema = new Schema({
    name: {
        type: String
    },
    descripction: {
        type: String
    },
    imageurl: {
        type: String
    },
    house_id: {
        type: String
    }
});

module.exports = mongoose.model('character', characterSchema);
