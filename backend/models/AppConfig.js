const mongoose = require("mongoose");
const appConfigSchema = new mongoose.Schema(
  {
    isMaintenance: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("AppConfig", appConfigSchema);
