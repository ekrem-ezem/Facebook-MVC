const express = require("express");
const router = express.Router();
const controller = require("../controller/controllers");

router.all("/feed", controller.Homepage);
router.get("/feed/:id", controller.oneFeed);
router.get("/delete/feed/:id", controller.deleteFeed);
router.all("/feed/edit/:id", controller.editFeed);

module.exports = router;
