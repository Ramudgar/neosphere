const express=require('express');
const mongoose=require('mongoose');
const app=express();
const connectDB=require('./config/db');
connectDB();


app.use(express.json({extended:false}));

 