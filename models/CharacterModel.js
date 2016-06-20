
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var characterSchema = new Schema({
	name:  { type: String },
	descripction:  { type: String },
	imageurl:  { type: String },
	houseid: { type: Number }
});

module.exports = mongoose.model('character', characterSchema);
