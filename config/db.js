const mongoose = require('mongoose');
const connectDB = async () => {
    try {
     const conn= await mongoose.connect("mongodb://127.0.0.1:27017/EcommerceApp", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
      });
  
      console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (e) {
      console.error(`Error connecting to MongoDB: ${e.message}`);
      process.exit(1);
    }
  };

module.exports = connectDB;