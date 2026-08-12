const AppConfig = require("../models/AppConfig");
exports.getAppStatus = async (req, res) => {
  try {
    let config = await AppConfig.findOne();
    if (!config) {
      config = await AppConfig.create({ isMaintenance: false });
    }
    res.json({
      success: true,
      isMaintenance: config.isMaintenance,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server failed to fetch system state settings",
      error: error.message,
    });
  }
};
