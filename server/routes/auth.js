import express from "express";
import { login, logout, register, sendVerificationCode } from "../controllers/auth.js";

const router = express.Router();


router.get("/", (req, res)=>{
    res.send("This is auth");
});

router.post("/register" , register);
router.post("/login", login);
router.get("/logout", logout);
router.post("/sendVerification", sendVerificationCode);




export default router;