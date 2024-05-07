import express from "express"
import Hotel from "../Modules/Hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
import { DeleteRoom, UpdateRoom, createRoom, getAllRooms, getRoom } from "../controllers/room.js";


const router = express.Router();

router.post("/:hotelid",verifyAdmin, createRoom);

router.put('/:id',verifyAdmin, UpdateRoom);

router.delete('/:id/:hotelid', verifyAdmin, DeleteRoom);

router.get('/:id',verifyAdmin, getRoom);

router.get("/", verifyAdmin, getAllRooms);
/************ */
export default router;