const { verify, sign } = require("jsonwebtoken");
const { Token } = require("../models/user");
const { randomBytes } = require("crypto");
module.exports = {
    verify: (req, res, next) => {
        try {
            const token = req.headers.authorization.split(" ")[1];
            verify(token, process.env.SECRET, (err, decoded) => {
                if (err) {
                    res.locals.verified = false;
                    res.locals.err = err;

                } else {
                    res.locals.verified = true;
                    res.locals.decoded = decoded;
                }
                next();
            });
        } catch (e) {
            res.locals.verified = false;
            console.log(e);
            next();
        }
    },
    sign: (req, res, next) => {
        sign({ admin: 1, id: randomBytes(20).toString("hex") }, process.env.SECRET, { expiresIn: 60 * 60 * 24 }, (err, token) => {
            if (err) {
                res.status(400).json({ err });
            }
            res.locals.token = token;
            next();
        });
    }
};