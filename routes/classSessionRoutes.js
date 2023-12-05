const express = require("express");
const router = express.Router();

const classSession = require("../controllers/classSessionController");

router.route("/").post(classSession.createClassSession);

module.exports = router;
