import express from "express"
import { DeleteUser, UpdateUser, getAllUsers, getUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";


const router = express.Router();

// check authentication

router.get("/checkauthentication", verifyToken, (req, res, next) =>{
    res.send("You are authenticated");
});

router.get("/checkuser/:id", verifyUser, (req,res)=>{
    res.send("Hello user ,you are logged in and you can delete your account")
});

router.get("/checkadmin/:id", verifyAdmin, (req, res, next)=>{
    res.send("Hello admin, you are logged in and you can delete all accounts")
})


router.put('/:id',verifyUser, UpdateUser);

router.delete('/',verifyUser, DeleteUser);

router.get('/:id',verifyAdmin, getUser);

router.get("/", verifyAdmin, getAllUsers);
/************ */
export default router;