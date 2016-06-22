/*jshint esversion: 6 */
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const houseSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name need it!"]
    },
    watchword: {
        type: String,
        required: [true, "Watchword need it!"]
    },
    imageurl: {
        type: String,
        required: [true, "Image url need it!"]
    }
});

module.exports = mongoose.model('house', houseSchema);
// font: http://mongoosejs.com/docs/validation.html
