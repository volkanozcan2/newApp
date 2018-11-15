const express = require('express');
const router = express.Router();
const { verify, sign } = require("../controllers/jwt");
const { readdirSync } = require("fs");
const { join } = require("path");
const { randomBytes } = require("crypto");
const stream = require("stream");
const ls = readdirSync(join(__dirname, "../secret/cats"));
const options = {
    root: join(__dirname, "../secret/cats")
};

router.get('/', verify, (req, res, next) => {
    const data = res.locals;
    console.log(data);
    res.render("index", { data });
});

router.post("/", sign, (req, res) => {
    res.status(200).json({ token: res.locals.token });
});

router.get("/cat", verify, (req, res) => {
    const file = ls[~~(Math.random() * ls.length >> 0)];
    res.sendFile(file, options);
});

router.get("/file", verify, (req, res) => {
    const file = ls[~~(Math.random() * ls.length >> 0)];
    res.end(randomBytes(1024 * 1024 * 10), "binary");
});

module.exports = router;