import express from "express"
import Hotel from "../Modules/Hotel.js";


const router = express.Router();


/****Create new hotel */

router.post("/", async (req, res)=>{
    const newHotel = new Hotel(req.body);

    try{

        const savedHotel = await newHotel.save();
        res.status(200).json();

    }catch(err){
        //JSON is often used when data is sent from a server to a web page
        res.status(500).json(err);

    }
})

export default router;