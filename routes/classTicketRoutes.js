const express = require("express");
const router = express.Router();

const classTicketController = require("../controllers/classTicketController");

router
  .route("/")
  .get(classTicketController.getAllClassTickets)
  .post(classTicketController.createClassTicket);

router
  .route("/:id")
  .put(classTicketController.updateClassTicket)
  .get(classTicketController.getClassTicket)
  .delete(classTicketController.deleteClassTicket);
module.exports = router;
