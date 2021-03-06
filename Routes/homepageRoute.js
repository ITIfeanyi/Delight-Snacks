const express = require("express");
const router = express.Router();
const controller = require("../controller/homepage");
const { checkVerification } = require("../Auth/jwtVerification");

router.get("/", checkVerification, controller.home);

module.exports = router;
