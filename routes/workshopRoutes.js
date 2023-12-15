const express = require("express");
const authController = require("./../controllers/authController");
const router = express.Router();
const workshopController = require("../controllers/workshopController");

router
  .route("/")
  .get(workshopController.getAllWorkshop)
  .post(workshopController.createWorkshop);

router
  .route("/:id")
  .get(workshopController.getWorkshop)
  .put(workshopController.updateWorkshop)
  .delete(workshopController.deleteWorkshop);

module.exports = router;
