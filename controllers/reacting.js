const express = require("express"),
    router = express.Router(),
    path = require("path"),
    request = require("request"),
    Article = require("../models/Article"),
    SearchHistory = require("../models/History"),
    mongoUrl = require("../keys"),
    dbURL = "mongodb://localhost/reactingtimes",
    mongoose = require("mongoose");

mongoose.Promise = Promise;
mongoose.connect(dbURL);
const db = mongoose.connection;
db.on("error", error => console.log("Database Error:", error));
db.once("open", () => console.log("Mongoose connection successful."));

router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// retrieve all articles
router.get("/api/saved", function (req, res) {

    Article
        .find({})
        .exec(function (err, doc) {

            if (err) {
                console.log(err);
            } else {
                res.send(doc);
            }
        });
});

// Save an article to the db
router.post("/api/saved", function (req, res) {
    Article.create({title: req.body.title, url: req.body.url}),
    function (err) {
        if (err) {
            console.log(err);
        } else {
            res.send("Saved Search");
        }
    }
})

// Delete a saved article from db
router.delete("/api/saved/:id", (req, res) => {
    Article
        .remove({"_id": req.params.id})
        .exec(function (err, doc) {
            if (err) {
                console.log(err);
            } else {
                res.send(doc);
            }
        })
})

// get all searches
router.get("/api/saved/history", function (req, res) {

    SearchHistory
        .find({})
        .exec((err, doc) => {
            if (err) {
                console.log(err);
            } else {
                res.send(doc);
            }
        });
});

// Save an search to the db
router.post("/api/saved/history", function (req, res) {

    SearchHistory.create({title: req.body.title, startYear: req.body.startYear, endYear: req.body.endYear}),
    function (err) {
        if (err) {
            console.log(err);
        } else {
            res.send("Saved Search");
        }
    }
})

module.exports = router;