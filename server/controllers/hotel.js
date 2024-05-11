import Hotel from "../Modules/Hotel.js";

export const createHotel = async (req, res, next) =>{
    const newHotel = new Hotel(req.body);

    try{

        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);

    }catch(err){
        //JSON is often used when data is sent from a server to a web page
        res.status(500).json(err);

    }
}

export const UpdateHotel = async (req, res, next) =>{
    console.log("update here !!");
    try{
       
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set : req.body});
        //we do this one if we want to see the new result we add -->({new : true})
        // const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set : req.body}, {new: true});

        res.status(200).json(updateHotel);


    }catch(err){
        res.status.json(err);

    }

}


// how much of hotels in each city !
export const countByCity = async (req, res, next) =>{
    const Cities = req.query.cities.split(',');

    try{
        const list = await Promise.all(Cities.map(city=>{
            return Hotel.countDocuments({city:city});
        }));
        res.status(200).json(list);
    }catch(err){
        next(err);

    }
}

// how much of hotels , apartement, resort, villa and cabine there is ..

export const countByType = async (req, res,next) =>{
   try{
            const hotelCount = await Hotel.countDocuments({type: "hotel"});
            const apartementCount = await Hotel.countDocuments({type: "apartement"});
            const resortCount = await Hotel.countDocuments({type: "resort"});
            const villaCount = await Hotel.countDocuments({type: "villa"});
            const cabinCount = await Hotel.countDocuments({type: "cabin"});
            res.status(200).json([
                {type : "hotel", count : hotelCount},
                {type: "apartement", count : apartementCount},
                {type :"resort", count : resortCount},
                {type: "villa", count: villaCount},
                {type :"cabin", count: cabinCount}

            ]);
   }catch(err)
   {
        next(err);
   }
}


export const DeleteHotel = async (req, res, next) =>{
    try{
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted");

    }catch(err){
        res.status(500).json(err);

    }
}


export const getHotel = async (req, res, next) =>{
    try{
        const hotel =  await Hotel.findById(req.params.id);
         res.status(200).json(hotel)
 
     }catch(err){
         res.status(500).json(err);
         // next(err);
     }
}

// get just featured hotels

export const getFeaturesHotel = async (req, res, next) =>{
    try{
        console.log("heree!");
        const featured = await Hotel.find(req.query);
        console.log("featured-->", featured);
        res.status(200).json(featured);
    }catch(err){
        res.status(500).json(err);

    }
}

export const getAllHotels = async (req, res, next) =>{
    try{
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    }catch(err){
        res.status(500).json(err);
        // next(err);
    }
}



export const getHotels = async (req, res, next) => {
    console.log("backend all hotels");
    const { city, min, max, ...others } = req.query; // Include city in the destructuring
    try {
      const hotels = await Hotel.find({
        ...others,
        city: city, // Use the city parameter in the query
        cheapestPrice: { $gt: min | 1, $lt: max || 999 },
      }).limit(req.query.limit);
      res.status(200).json(hotels);
    } catch (err) {
      next(err);
    }
  };
