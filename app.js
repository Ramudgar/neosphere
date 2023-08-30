const express = require("express");
const mongoose = require("mongoose");
const app = express();
const connectDB = require("./config/db");
const userRoutes = require("./Routes/userRoutes");
const port = 5000;

app.use(express.json());
connectDB();

app.use(userRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
