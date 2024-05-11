import express from "express"
import Hotel from "../Modules/Hotel.js";
import { DeleteHotel, UpdateHotel, countByCity, countByType, createHotel, getAllHotels, getFeaturesHotel, getHotel, getHotels } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();


/****Create new hotel */

// router.post("/", async (req, res)=>{
//     const newHotel = new Hotel(req.body);

//     try{

//         const savedHotel = await newHotel.save();
//         res.status(200).json(savedHotel);

//     }catch(err){
//         //JSON is often used when data is sent from a server to a web page
//         res.status(500).json(err);

//     }
// })

router.post("/",verifyAdmin, createHotel);

/********Update the hotel */

// router.put('/:id', async (req, res)=>{

//     try{
//         const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set : req.body});
//         //we do this one if we want to see the new result we add -->({new : true})
//         // const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set : req.body}, {new: true});

//         res.status(200).json(updateHotel);


//     }catch(err){
//         res.status.json(err);

//     }

// })

router.put('/:id',verifyAdmin, UpdateHotel);

/********Delete request *****/

// router.delete('/', async(req, res)=>{
//     try{
//         await Hotel.findByIdAndDelete(req.params.id);
//         res.status(200).json("Hotel has been deleted");

//     }catch(err){
//         res.status(500).json(err);

//     }
// })
router.delete('/', verifyAdmin, DeleteHotel);

/*********Get all hotels****** */
// router.get('/:id', async(req, res, next)=>{
//     try{
//        const hotel =  await Hotel.findById(req.params.id);
//         res.status(200).json(hotel)

//     }catch(err){
//         res.status(500).json(err);
//         // next(err);
//     }

// })
router.get('find/:id',verifyAdmin, getHotel);
router.get('/features', getFeaturesHotel);

/*********Find all hotels******/

// router.get("/", async(req,res, next)=>{
//     try{
//         const hotels = await Hotel.find();
//         res.status(200).json(hotels);
//     }catch(err){
//         res.status(500).json(err);
//         // next(err);
//     }
// })


router.get("/cities", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
/************ */
export default router;