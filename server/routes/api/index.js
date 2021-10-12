const router = require("express").Router();
const scoreRoutes = require("./score");

// Book routes
router.use("/score", scoreRoutes);

module.exports = router;
