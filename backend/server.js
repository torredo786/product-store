// const express = require('express');
import express from "express";
import cors from "cors";

import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js"
import mongoose from "mongoose";
import Product from "./models/product.model.js";

dotenv.config();
const app= express();
app.use(cors({ origin: "http://localhost:5173" })); // Allow requests from your frontend origin


const PORT = process.env.PORT || 5000;
app.use(express.json());//its a middleware allows us to e=accept json data in the req.body
connectDB();
app.use("/api/products", productRoutes);

app.listen(PORT, ()=>{
    console.log(`server started at http://localhost:${PORT}`)
});