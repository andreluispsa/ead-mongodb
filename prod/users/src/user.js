const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: String
});

const User = mongoose.model('user', userSchema); // User Class / Model - represents the entire collection of users (data)

module.exports = User; // exports the User Model
