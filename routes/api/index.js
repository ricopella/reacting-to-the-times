const router = require("express").Router();
const articlesRoutes = require("./articles");

// Book routes
router.use("/search", articlesRoutes);

module.exports = router;