/*jshint esversion: 6 */
const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
		bcrypt   = require('bcrypt-nodejs');

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username need it!"]
    },
    password: {
        type: String,
        required: [true, "Password need it!"]
    }
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('user', userSchema);
