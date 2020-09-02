const express = require("express");
const router = express.Router();
require("dotenv").config();

/* GET home page. */
router.get("/", (req, res, next) => {
    res.render("main", { memberLists: req.app.get("memberList"), domain: process.env.DOMAIN, port: req.app.get("port") });
});

module.exports = router;
