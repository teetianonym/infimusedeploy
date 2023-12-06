const express = require("express");
const router = express.Router();

const classSession = require("../controllers/classSessionController");

router
  .route("/")
  .post(classSession.createClassSession)
  .get(classSession.getAllClassSession);
router
  .route("/:id")
  .get(classSession.getOneClassSession)
  .put(classSession.updateClassSession)
  .delete(classSession.deleteClassSession);
module.exports = router;
