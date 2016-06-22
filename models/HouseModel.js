/*jshint esversion: 6 */
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const houseSchema = new Schema({
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
