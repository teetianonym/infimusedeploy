const express = require("express");
const router = express.Router();

const guestController = require("../controllers/guestController");

router
  .route("/")
  .get(guestController.getAllGuests)
  .post(guestController.createGuest);

router
  .route("/:id")
  .put(guestController.updateGuest)
  .get(guestController.getGuest)
  .delete(guestController.deleteGuest);
module.exports = router;
