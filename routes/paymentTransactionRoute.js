const express = require("express");
const router = express.Router();

const paymentTransactionController = require("../controllers/paymentTransactionController");

router
  .route("/")
  .get(paymentTransactionController.getAllPaymentTransactions)
  .post(paymentTransactionController.createPaymentTransaction);

router
  .route("/:id")
  .put(paymentTransactionController.updatePaymentTransaction)
  .get(paymentTransactionController.getPaymentTransaction)
  .delete(paymentTransactionController.deletePaymentTransaction);
module.exports = router;
