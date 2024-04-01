import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from 'path'

import authRoutes from "../Backend/routes/auth.routes.js";
import messageRoutes from "../Backend/routes/message.routes.js";
import userRoutes from "../Backend/routes/user.routes.js";

import { connectToDB } from "./db/connectToMongoDb.js";
import {app, server } from "./socket/socket.js";


dotenv.config();

const __dirname = path.resolve();
const port = process.env.PORT || 5000;

app.use(express.json()) // to parse income request with json payloads (req,res)
app.use(cookieParser()) // extracts cookies from the Cookie header of the HTTP request and make them available in req.cookies

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users",userRoutes);
 
// connecting backend to frontend 
app.use(express.static(path.join(__dirname,"/Frontend/dist")))

app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname,"Frontend","dist","index.html"))
})

server.listen(port, () => {
  // connetion establishment with db  
  connectToDB();
  console.log(`server is running on the ${port}`);
});
