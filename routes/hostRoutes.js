const express = require("express");
const router = express.Router();

const hostController = require("../controllers/hostController");

router
  .route("/")
  .get(hostController.getAllHost)
  .post(hostController.createHost);

router
  .route("/:id")
  .put(hostController.updateHost)
  .get(hostController.getHost)
  .delete(hostController.deleteHost);
module.exports = router;
