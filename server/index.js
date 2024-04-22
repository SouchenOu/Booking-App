import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();
dotenv.config();

const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connect to mongoose");
      } catch (error) {
        throw error
      }
}

mongoose.connection.on("disconnect", ()=>{
    console.log("mongoDb disconnected");
});

mongoose.connection.on("connected", ()=>{
    console.log("mongoDb connected");
})


/*******requests */

app.get("/", (req,res)=>{
    res.send("hello first request");
})


app.listen(8000 , ()=>{
    connect();
    console.log("Connected to backend");
})