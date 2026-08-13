const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name "],
    },

    email: {
      type: String,
      required: [true, "Please provide an email address"],
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: [true, "Please provide a secure password"],
    },

    creatdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { autoIndex: true },
);

module.exports = mongoose.model("User", userSchema);
