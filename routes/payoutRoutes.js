const express = require("express");
const router = express.Router();

const payoutCotroller = require("../controllers/payoutController");

router
  .route("/")
  .get(payoutCotroller.getAllPayouts)
  .post(payoutCotroller.createPayout);

router
  .route("/:id")
  .put(payoutCotroller.updatePayout)
  .get(payoutCotroller.getPayout)
  .delete(payoutCotroller.deletePayout);
module.exports = router;
