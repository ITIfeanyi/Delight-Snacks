const express = require("express");
const router = express.Router();
const controller = require("../controller/register");
router.get("/register", controller.register);

router.post("/register", controller.register_post);

module.exports = router;
