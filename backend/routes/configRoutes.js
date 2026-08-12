const express = require("express");
const router = express.Router();

const configController = require("../controllers/configController.js");

router.get("/app-status", configController.getAppStatus);

module.exports = router;
