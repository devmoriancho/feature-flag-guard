const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

const statusRoutes = require("./routes/statusRoutes");
const configRoutes = require("./routes/configRoutes");

app.use("/api", statusRoutes);
app.use("/api", configRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend server is running smoothly on port ${PORT}`);
});
