import mongoose from "mongoose";
import Message from "../Modules/Message.js"; // Adjust the import path as needed
import Users from "../Modules/Users.js";
// import User from "../Modules/Users.js"; // Adjust the import path as needed

export const createMessage = async (req, res, next) => {
  try {
    const { content, fromId, toId } = req.body;
    // const getUser = onlineUsers.get(toId);

    if (content && fromId && toId) {
      const sendMessage = new Message({
        content,
        sender: new mongoose.Types.ObjectId(fromId),
        recipient: new mongoose.Types.ObjectId(toId),
      });

      const savedMessage = await sendMessage.save();


      return res.status(201).send({ message: savedMessage });
    }

    return res.status(400).send({ message: "Message, sender, and recipient users are required..." });
  } catch (err) {
    next(err);
  }
};

export const getMessage = async (req, res, next) => {
    try {
      const { fromId, toId } = req.params;
      console.log("fromId-->", fromId);
      console.log("toId", toId);
  
      const allMessages = await Message.find({
        $or: [
            { sender: new mongoose.Types.ObjectId(fromId), recipient: new mongoose.Types.ObjectId(toId) },
            { sender: new mongoose.Types.ObjectId(toId), recipient: new mongoose.Types.ObjectId(fromId) },
          ],
      })
      .sort({ _id: 1 }) // Sort by id (or _id in MongoDB) in ascending order
      .populate('sender'); // Populate the sender field
  
      
      console.log("allMessages-->", allMessages);
      
  
      return res.status(200).send({ messages: allMessages });
    } catch (err) {
      next(err);
    }
  };

  export const getUsersThatHaveContactsWith = async (req, res, next) => {
    try {
        const userId = req.params.fromId;

        // Find messages where the user is either the sender or recipient
        const messages = await Message.find({
            $or: [
                { sender: new mongoose.Types.ObjectId(userId) },
                { recipient: new mongoose.Types.ObjectId(userId) }
            ]
        })
        .populate('sender')
        .populate('recipient')
        .sort({ createdAt: -1 });
        console.log("message here--->", messages);

        // Collect unique user IDs that have communicated with the given user
        const userIds = [];

        messages.forEach(msg => {
            console.log("sender msg here-->, userId", msg.sender.id, userId);
            console.log("recipient msg here-->, userId", msg.recipient.id, userId);
            if (msg.sender.id !== userId) {
                userIds.push(msg.sender.id);
            }
            if (msg.recipient.id !== userId) {
                userIds.push(msg.recipient.id);
            }
        });
        console.log("first userId, ", userIds);
        // console.log("object-->", userObjectIds);
        const users = await Users.find({ _id: { $in: userIds} });
        console.log("users hna final-->", users);

        
        res.status(200).json({ users });

    } catch (err) {
        next(err);
    }
};