const db = require("../models")

module.exports = {
    findAll: function (req, res) {
        db
            .Article
            .find({})
            .sort({date: -1})
            .then(dbModel => res.send(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db
            .Article
            .create({title: req.body.title, url: req.body.url})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db
            .Article
            .remove({"_id": req.params.id})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findAllHistory: function (rec, res) {
        db
            .History
            .find({})
            .sort({date: -1})
            .then(dbModel => res.send(dbModel))
            .catch(err => res.status(422).json(err));
    },
    createHistory: function (req, res) {
        db
            .History
            .create({title: req.body.title, startYear: req.body.startYear, endYear: req.body.endYear})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }

};