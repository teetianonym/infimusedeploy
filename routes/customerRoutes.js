const express = require("express");
const router = express.Router();

const customerController = require("../controllers/customerController");
const authController = require("../controllers/authController");

router.post("/login", authController.login);
router.post("/signup", authController.signup);
router.route("/").get(customerController.getAllCustomers);

router
  .route("/:id")
  .put(customerController.updateCustomer)
  .get(customerController.getCustomer)
  .delete(customerController.deleteCustomer);
module.exports = router;
