const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API server communication link is fully secure!",
  });
});

module.exports = router;
