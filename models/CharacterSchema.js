/*jshint esversion: 6 */
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const characterSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name need it!"]
    },
    description: {
        type: String,
        required: [true, "Descripction need it!"]
    },
    imageurl: {
        type: String,
        required: [true, "Image url need it!"]
    },
    house_id: {
        type: String,
        default: null
    }
});

module.exports = mongoose.model('character', characterSchema);
