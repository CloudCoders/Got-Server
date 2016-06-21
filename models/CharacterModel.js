
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var characterSchema = new Schema({
	name:  { type: String },
	descripction:  { type: String },
	imageurl:  { type: String },
	house_id: { type: String }
});

module.exports = mongoose.model('character', characterSchema);
