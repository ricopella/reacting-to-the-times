const express = require("express"),
    router = express.Router(),
    request = require("request"),
    cheerio = require("cheerio"),
    Article = require("../models/Article"),
    mongoose = require("mongoose"),
    dbURL = "mongodb://localhost/reactingtimes";


mongoose.Promise = Promise;
mongoose.connect(dbURL);

const db = mongoose.connection;

db.on("error", error => console.log("Database Error:", error));

db.once("open", () => console.log("Mongoose connection successful."));

// index route
router.get("/", (req, res) => res.render("index"));






module.exports = router;