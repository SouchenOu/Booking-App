import Hotel from "../Modules/Hotel.js";
import Rooms from "../Modules/Rooms.js";


export const createRoom = async( req, res, next) =>{
    const hotelId = req.params.hotelid;
    //check if there is this hotel 
    const checkHotel = await Hotel.findById(hotelId);
    if(!checkHotel)
    return res.status(400).json("This hotel not found");
    const newRoom = new Rooms(req.body);
   // find if there is a room that have the same id
   const { title } = req.body;
   const existingRoom = await Rooms.findOne({ title });
   if (existingRoom) {
        // If a room with the same name exists, return an error
        return res.status(400).json({ error: 'Room with the same name already exists' });
    }
    try{
        const savedRoom = await newRoom.save();
        try{
            await Hotel.findByIdAndUpdate(hotelId, {$push: {rooms: savedRoom._id}});
        }catch(err){
            next(err);

        }
        res.status(200).json(savedRoom);

    }catch(err){
        next(err);

    }
}

export const UpdateRoom = async (req, res, next) =>{
    try{
        const updateRoom = await Rooms.findByIdAndUpdate(req.params.id, { $set : req.body});
        //we do this one if we want to see the new result we add -->({new : true})
        // const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set : req.body}, {new: true});

        res.status(200).json(updateRoom);


    }catch(err){
        res.status.json(err);

    }

}


export const DeleteRoom = async (req, res, next) =>{
    try{
        const HotelId = req.params.hotelid;
        await Rooms.findByIdAndDelete(req.params.id);
        res.status(200).json("Room has been deleted");
        try{
            await Hotel.findByIdAndUpdate(HotelId, {$pull : {rooms : req.params.id}});
        }catch(err){
            
        }

    }catch(err){
        res.status(500).json(err);

    }
}


export const getRoom = async (req, res, next) =>{
    try{
        const Room =  await Rooms.findById(req.params.id);
         res.status(200).json(Room)
 
     }catch(err){
         res.status(500).json(err);
         // next(err);
     }
}

export const getAllRooms = async (req, res, next) =>{
    try{
        const AllRooms = await Rooms.find();
        res.status(200).json(AllRooms);
    }catch(err){
        res.status(500).json(err);
        // next(err);
    }
}

export const   updateRoomAvailability = async (req, res, next) => {
    try {
        console.log("enter here available");
      const test =   await Rooms.updateOne(
        { "roomNumbers._id": req.params.id },
        {
          $push: {
            "roomNumbers.$.unavailableDates": req.body.dates
          },
        }
      );
      res.status(200).json(test);
    } catch (err) {
      next(err);
    }
  };
