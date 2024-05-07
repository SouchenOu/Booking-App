import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";

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

// app.get("/", (req,res)=>{
//     res.send("hello first request");
// })

/*****This is middleWares */


app.use(express.json());
app.use(cookieParser());

// app.use((err, req, res, next)=>{
//     console.log("errr here");
//     return res.status(500).json("Hello error from handler");
// })

app.use("/auth", authRoute);
app.use("/hotels", hotelsRoute);
app.use("/rooms", roomsRoute);
app.use("/users", usersRoute);

app.listen(8000 , ()=>{
    connect();
    console.log("Connected to backend");
})