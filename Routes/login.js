const express = require("express");
const router = express.Router();
const controller = require("../controller/login");
router.get("/login", controller.login);

router.post("/login", controller.login_post);

module.exports = router;
