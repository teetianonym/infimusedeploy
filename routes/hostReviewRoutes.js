const express = require("express");
const router = express.Router();
const hostReviewController = require("./../controllers/hostReview");
router
  .route("/")
  .get(hostReviewController.getAllhostReviews)
  .post(hostReviewController.createhostReview);

router
  .route("/:id")
  .get(hostReviewController.gethostReview)
  .put(hostReviewController.updatehostReview)
  .delete(hostReviewController.deletehostReview);

module.exports = router;
