const express = require("express");
const router = express.Router();
const controller = require("../controllers/databaseController");

router.get("/insert/:name", controller.insert);

module.exports = router;
