const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    accountBalance: { type: Number, default: 1000 } // Default opening balance
});

module.exports = mongoose.model('User', UserSchema);