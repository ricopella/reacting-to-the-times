const express = require("express"),
    router = express.Router(),
    request = require("request"),
    Article = require("../models/Article"),
    mongoose = require("mongoose"),
    dbURL = "mongodb://localhost/reactingtimes";


mongoose.Promise = Promise;
mongoose.connect(dbURL);

const db = mongoose.connection;

db.on("error", error => console.log("Database Error:", error));

db.once("open", () => console.log("Mongoose connection successful."));

// index route
router.get("/", (req, res) => res.sendFile(__dirname + "/public/index.html"));

// Query mongoDB for all saved articles
router.get("/api/saved", function(req, res) {

    Article.find({}).exec(function(err, doc) {

        if (err) {
            console.log(err);
        } else {
            res.send(doc);
        }
    });
});

// Save an article to the db
router.post("/api/saved", function(req, res) {

    Article.create({
            title: req.body.title,
            url: req.body.url,
            date: req.body.date
        }),
        function(err) {
            if (err) {
                console.log(err);
            } else {
                res.send("Saved Search");
            }
        }
})

// Delete a saved article from db
router.delete("/api/saved", function(req, res) {
    Article.remove({
            "_id": req.params.articleId
        })
        .exec(function(err, doc) {
            if (err) {
                console.log(err);
            } else {
                res.send(doc);
            }
        })
})


module.exports = router;