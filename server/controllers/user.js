import Hotel from "../Modules/Hotel.js";
import Users from "../Modules/Users.js";


export const UpdateUser = async (req, res) =>{
    
    try{
        const updateUser = await Users.findByIdAndUpdate(req.params.id, { $set : req.body});
        //we do this one if we want to see the new result we add -->({new : true})
        // const updateUser = await User.findByIdAndUpdate(req.params.id, { $set : req.body}, {new: true});

        res.status(200).json(updateUser);

    }catch(err){
        res.status.json(err);

    }

}


export const DeleteUser = async (req, res) =>{
    try{
        await Users.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted");

    }catch(err){
        res.status(500).json(err);

    }
}


export const getUser = async (req, res) =>{
    try{
        const User =  await Users.findById(req.params.id);
         res.status(200).json(User)
 
     }catch(err){
         res.status(500).json(err);
     }
}

export const getAllUsers = async (req, res) =>{
    console.log("enter here");
    try{
        console.log("yesss");
        const Allusers =  await Users.find();
        console.log("users here-->". Allusers);
        res.status(200).json(Allusers);
    }catch(err){
        res.status(500).json(err);
    }
}
