import express from "express"
import Hotel from "../Modules/Hotel.js";


const router = express.Router();


/****Create new hotel */

router.post("/", async (req, res)=>{
    const newHotel = new Hotel(req.body);

    try{

        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);

    }catch(err){
        //JSON is often used when data is sent from a server to a web page
        res.status(500).json(err);

    }
})

/********Update the hotel */

router.put('/:id', async (req, res)=>{

    try{
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set : req.body});
        //we do this one if we want to see the new result we add -->({new : true})
        // const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set : req.body}, {new: true});

        res.status(200).json(updateHotel);


    }catch(err){
        res.status.json(err);

    }

})

export default router;