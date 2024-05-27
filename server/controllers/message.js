import mongoose from "mongoose";
import Message from "../Moduls/Message"; // Adjust the import path as needed
import User from "../Modules/User"; // Adjust the import path as needed

export const createMessage = async (req, res, next) => {
  try {
    const { content, fromId, toId } = req.body;
    // const getUser = onlineUsers.get(toId);

    if (content && fromId && toId) {
      const sendMessage = new Message({
        content,
        sender: mongoose.Types.ObjectId(fromId),
        recipient: mongoose.Types.ObjectId(toId),
      });

      const savedMessage = await sendMessage.save();

      // Populate the sender and recipient fields
      await savedMessage.populate("sender recipient").execPopulate();

      return res.status(201).send({ message: savedMessage });
    }

    return res.status(400).send({ message: "Message, sender, and recipient users are required..." });
  } catch (err) {
    next(err);
  }
};