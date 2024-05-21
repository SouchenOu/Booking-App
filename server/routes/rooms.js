import express from "express"
import Hotel from "../Modules/Hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
import { DeleteRoom, UpdateRoom, createRoom, getAllRooms, getRoom, updateRoomAvailability } from "../controllers/room.js";


const router = express.Router();

router.post("/:hotelid",verifyAdmin, createRoom);

router.put('/:id',verifyAdmin, UpdateRoom);

router.delete('/:id/:hotelid', verifyAdmin, DeleteRoom);

router.get('/:id',verifyAdmin, getRoom);

router.get("/", verifyAdmin, getAllRooms);
// check the availabilty of the room
router.put("/availability/:id", updateRoomAvailability);

router.put("");
/************ */
export default router;