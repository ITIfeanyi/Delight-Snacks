const express = require("express");
const router = express.Router();
const controller = require("../controller/snacks");

router.get("/snacks", controller.snacks_get);

router.get("/snacks/:ID", controller.snacks_getOneByID);

router.post("/snacks", controller.snacks_post);

router.delete("/snacks/:ID", controller.snacks_deleteOne);

router.patch("/snacks/:ID", controller.snacks_updateSingle_item);

module.exports = router;
