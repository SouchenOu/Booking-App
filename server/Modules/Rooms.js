import mongoose from "mongoose";

const {Schema} = mongoose;


const Roomschema = new mongoose.Schema({
    
    title : {
        type : String,
        required : true,
        unique : true, 

    },
    price : {
        type : Number,
        required : true,
    },
    MaxPoeple : {
        type : Number,
        required : true,

        // default : false,
    },
    desc :{
        type : String,
        required : true,

    },
    photos :{
        type : [String],
    },
    unavailableDates: {
        type : [Date],
        
    }

},
        {timestamps : true}
);

export default mongoose.model("Rooms", Roomschema);