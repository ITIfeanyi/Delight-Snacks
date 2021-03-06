const express = require("express");
const router = express.Router();
const controller = require("../controller/orders");

router.post("/orders", controller.post_orders);

module.exports = router;
