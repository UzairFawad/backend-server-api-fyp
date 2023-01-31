/** @format */

const express = require("express");
const dotenv = require("dotenv");
//const logger = require('./middleware/logger');
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

const uri = "mongodb+srv://EBusinessCards:Ykoijkl6685@ebusinesscluster.tgou4tk.mongodb.net/EBusinessCards";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

//dotenv.config({ path: "./config/config.env" });
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// app.use(logger);
app.use("/api/users", require("./routes/users"));

connect();
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on ${PORT}`));

