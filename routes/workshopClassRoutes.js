const express = require("express");
const router = express.Router();
const workshopClassController = require("../controllers/workshopClassController");

router
  .route("/")
  .get(workshopClassController.getAllWorkshopClass)
  .post(workshopClassController.createWorkshopClass);

router
  .route("/:id")
  .get(workshopClassController.getOneWorkshopClass)
  .put(workshopClassController.updateWorkshopClass)
  .delete(workshopClassController.deleteWorkshopClass);

module.exports = router;
