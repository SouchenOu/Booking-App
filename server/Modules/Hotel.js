import mongoose from "mongoose";

const {Schema} = mongoose;

const HotelSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        unique : true, 

    },
    type :{
        type : String,
        required : true,
    },
    Reviews : {
        type : String,
        required : true,
    },
    city:{
        type : String,
        required : true,
    },
    address :{
        type : String,
        required : true,
    },
    distance :{
        type : String,
        required : true,
    },
    photos :{
        type : [String],
    },
    desc :{
        type : String,
        required : true,
    },
    title :{
        type : String,
        required : true,
    },
    rating :{
        type : String,
        min: 0,
        max: 10,
    },
    rooms :{
        type : [String],
    },
    Taxes : {
        type : String,
    },
    From : {
        type : String,
    },
    cheapestPrice:{
        type : Number,
        required : true,
    },
    New :{
        type : Boolean,
        required : true,
    },
    featured:{
        type : Boolean,
        default : false,
    },
})


export default mongoose.model("Hotel", HotelSchema);