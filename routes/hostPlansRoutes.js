const express = require("express");
const router = express.Router();

const HostPlan = require("../controllers/hostPlanController");

router.route("/").post(HostPlan.createHostPlan).get(HostPlan.getAllHostPlan);
router
  .route("/:id")
  .get(HostPlan.getOneHostPlan)
  .put(HostPlan.updateHostPlan)
  .delete(HostPlan.deleteHostPlan);
module.exports = router;
