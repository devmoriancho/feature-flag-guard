const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getCurrentUser,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.get("/me", protect, getCurrentUser);
router.post("/", registerUser);
router.post("/login", loginUser);

module.exports = router;
