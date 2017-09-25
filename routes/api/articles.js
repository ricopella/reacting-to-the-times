const router = require("express").Router();
const reController = require("../../controllers/reacting");

// Matchs /api/saved
router
    .route("/")
    .get(reController.findAll)
    .post(reController.create);

// Matches /api/saved/:id - for Delete
router
    .route("/:id")
    .delete(reController.remove);

// Matches /api/saved/history
router
    .route("/history")
    .get(reController.findAllHistory)
    .post(reController.createHistory);

module.exports = router;