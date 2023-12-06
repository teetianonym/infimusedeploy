const express = require("express");
const router = express.Router();
const packageSessionController = require("./../controllers/packageSessionController");

router
  .route("/")
  .get(packageSessionController.getAllPackageSessions)
  .post(packageSessionController.createPackageSession);

router
  .route("/:id")
  .get(packageSessionController.getOnePackageSession)
  .put(packageSessionController.updatePackageSession)
  .delete(packageSessionController.deletePackageSession);

module.exports = router;
