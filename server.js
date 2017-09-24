const express = require('express'),
    colors = require("colors"),
    bodyParser = require("body-parser"),
    logger = require("morgan"),
    Article = require("./models/Article"),
    Comments = require("./models/Comments"),
    mongoose = require("mongoose"),
    dbURL = "mongodb://localhost/reactingtimes",
    app = express(),
    port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({type: "application/vnd.api+json"}));
app.use(express.static("public"));

mongoose.Promise = Promise;
mongoose.connect(dbURL);

// Query mongoDB for all saved articles
app.get("/api/saved", function (req, res) {

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
app.post("/api/saved", function (req, res) {
    console.log("oh we're saving!");
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
app.delete("/api/saved/:id", (req, res) => {
    console.log(req.params.id);
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

// retrieve single article ID
app.get("/api/saved/:id", (req, res) => {

    Article.findOne({"_id": req.params.id})
    // .populate("comments")
        .exec((error, doc) => {
        if (error) {
            console.log(error);
        } else {
            res.json(doc);
        }
    })
})

// retrieve comments
app.get("/api/saved/:id/:comment", (req, res) => {
    Comments
        .findOne({"_id": req.params.comment})
        .exec((error, doc) => {
            if (error) {
                console.log(error);
            } else {
                res.json(doc);
            }
        })
})

// create new comment
app.post("/api/saved/:id", (req, res) => {

    let newComment = new Comments(req.body);
    // console.log(newComment);
    newComment.save(function (err, doc) {

        if (err) {
            console.log(err // Otherwise
            );
        } else {
            // Use the article id to find and update it's note
            Article.findOneAndUpdate({
                "_id": req.params.id
            }, {
                $push: {
                    "comments": doc._id
                }
            }, {new: true})
                .exec(function (err, doc) {
                    // Log any errors
                    if (err) {
                        console.log(err);
                    } else {
                        // Or send the document to the browser
                        res.send(doc);
                    }
                });
        }
    })
})

// delete comment
app.delete("api/saved/:articleId/:commentId", (req, res) => {
    Comments
        .remove({"_id": req.params.commentId})
        .exec(function (err, doc) {
            if (err) {
                console.log(err);
            } else {
                res.send(doc);
            }
        })
})

const db = mongoose.connection;

db.on("error", error => console.log("Database Error:", error));

db.once("open", () => console.log("Mongoose connection successful."));

app.use("/", (req, res) => res.sendFile(__dirname + "/public/index.html"));

app.use((req, res) => res.status(404).send("Sorry can't find that!"));

app.listen(port, () => {
    console.log(`==> 🌎  Listening on PORT ${port}. Visit http://localhost:${port}`.green)
});