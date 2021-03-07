const express = require("express");
const router = express.Router();
const controller = require("../controller/logout");

router.get("/logout", controller.logout_get);

module.exports = router;
