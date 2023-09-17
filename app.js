const express = require("express");
const mongoose = require("mongoose");
const app = express();
const connectDB = require("./config/db");
const userRoutes = require("./Routes/userRoutes");
const register_loginRoutes = require("./Routes/register_loginRoutes");
const profileRoutes = require("./Routes/profileRoutes");
const categoryRoutes = require("./Routes/categoryRoutes");
const productRoutes = require("./Routes/productRoutes");
const port = 5000;

app.use(express.json());
connectDB();

// make public folder static
app.use("/public", express.static(__dirname + "/public"));

app.use(userRoutes);
app.use(register_loginRoutes);
app.use(profileRoutes);
app.use(categoryRoutes);
app.use(productRoutes)




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
