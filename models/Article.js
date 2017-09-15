const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

let ArticleSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    url: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

let Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;