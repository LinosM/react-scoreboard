const router = require("express").Router();
const scoreController = require("../../controllers/scoreController");

router.route("/")
  .get(scoreController.findAll)
  .post(scoreController.create);

router
  .route("/:id")
  .put(scoreController.update)

module.exports = router;
