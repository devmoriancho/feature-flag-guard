const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getCurrentUser,
  logoutUser,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.get("/me", protect, getCurrentUser);
router.post("/", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

module.exports = router;
