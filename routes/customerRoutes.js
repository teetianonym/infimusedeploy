const express = require("express");
const router = express.Router();

const customerController = require("../controllers/customerController");

router
  .route("/")
  .get(customerController.getAllCustomers)
  .post(customerController.createCustomer);

router
  .route("/:id")
  .put(customerController.updateCustomer)
  .get(customerController.getCustomer)
  .delete(customerController.deleteCustomer);
module.exports = router;
