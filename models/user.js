(function() {
    'use strict';
    const mongoose = require('mongoose');
    const userSchema = mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        email: {
            type: String,
            required: true,
            unique: true,
            match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        },
        password: { type: String, required: true, minlength: [8, "password is too short"], maxlength: [60, "password is too long"] }
    });
    const tokens = mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        date: { type: Date, default: Date.now }
    });
    module.exports.User = mongoose.model('User', userSchema);
    module.exports.Token = mongoose.model("Token", tokens);
})();