const express = require("express");
const router = express.Router();
const controller = require("../controller/snacks");

router.get("/snacks", controller.snacks_get);

router.get("/snacks", controller.snacks_getOneByID);

router.post("/snacks", controller.snacks_post);

router.delete("/snacks", controller.snacks_deleteOne);

module.exports = router;
