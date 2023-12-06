const express = require("express");
const router = express.Router();
const packageclassController = require("../controllers/packageClassController");

router
  .route("/")
  .get(packageclassController.getAllPackageClass)
  .post(packageclassController.createPackageClass);

router
  .route("/:id")
  .get(packageclassController.getPackageClass)
  .put(packageclassController.updatePackageClass)
  .delete(packageclassController.deletePackageClass);

module.exports = router;
