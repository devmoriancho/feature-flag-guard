const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`📡 MongoDB Cloud Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Database Connection Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
