const express=require('express');
const mongoose=require('mongoose');
const app=express();
const connectDB=require('./config/db');

app.use(express.json());
connectDB();



 