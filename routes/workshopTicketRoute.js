const express = require("express");
const router = express.Router();

const workshopTicketController = require("../controllers/workshopTicket");

router
  .route("/")
  .get(workshopTicketController.getAllWorkshopTickets)
  .post(workshopTicketController.createWorkshopTicket);

router
  .route("/:id")
  .put(workshopTicketController.updateWorkshopTicket)
  .get(workshopTicketController.getWorkshopTicket)
  .delete(workshopTicketController.deleteWorkshopTicket);
module.exports = router;
