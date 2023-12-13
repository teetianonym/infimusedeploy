const express = require("express");
const router = express.Router();

const Cart = require("../controllers/cartController");

router.route("/").post(Cart.createCart).get(Cart.getAllCart);
router
  .route("/:id")
  .get(Cart.getOneCart)
  .put(Cart.updateCart)
  .delete(Cart.deleteCart);
module.exports = router;
