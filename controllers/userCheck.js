const mongoose = require("mongoose");
const { User } = require("../models/user");
const jwt = require("jsonwebtoken");
const signup = (req, res, next) => {
    User.find({ email: req.body.email }).exec().then(result => {
        if (result.length >= 1) {
            res.status(409).json({
                message: "Mail kayıtlı",
                status: false
            });
        } else {
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                email: req.body.email,
                password: req.body.password
            });
            user.save().then(result => {
                res.status(200).json({ message: result, status: true });
            }).catch((err) => {
                res.status(400).json({ message: err, status: false });
            });
        }
    });
};
const login = (req, res, next) => {
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length < 1) {
                res.status(401).json({
                    message: "Auth failed"
                });
            }
            if (req.body.password == user[0].password) {
                res.status(200).json({
                    message: "login succeded"
                });
            } else {
                res.status(400).json({
                    message: "Auth failed"
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
    next();
};
module.exports = { login, signup };