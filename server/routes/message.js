import express from "express";
import { createMessage, getMessage, getUsersThatHaveContactsWith } from "../controllers/message.js";

const router = express.Router();




router.post("/create" , createMessage);
router.get("/getMessage/:fromId/:toId", getMessage);
router.get("/getConversation/:fromId", getUsersThatHaveContactsWith);





export default router;