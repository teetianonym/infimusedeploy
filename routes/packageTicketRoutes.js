const express = require("express");
const router = express.Router();

const packageTicketController = require("../controllers/packageTicketController");

router
  .route("/")
  .get(packageTicketController.getAllPackageTickets)
  .post(packageTicketController.createPackageTicket);

router
  .route("/:id")
  .put(packageTicketController.updatePackageTicket)
  .get(packageTicketController.getPackageTicket)
  .delete(packageTicketController.deletePackageTicket);
module.exports = router;
