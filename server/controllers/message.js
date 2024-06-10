import mongoose from "mongoose";
import Message from "../Modules/Message.js"; // Adjust the import path as needed
import Users from "../Modules/Users.js";
// import User from "../Modules/Users.js"; // Adjust the import path as needed

export const createMessage = async (req, res, next) => {
  try {
    const { content, fromId, toId } = req.body;

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
     
  
      const allMessages = await Message.find({
        $or: [
            { sender: new mongoose.Types.ObjectId(fromId), recipient: new mongoose.Types.ObjectId(toId) },
            { sender: new mongoose.Types.ObjectId(toId), recipient: new mongoose.Types.ObjectId(fromId) },
          ],
      })
      .sort({ _id: 1 }) // Sort by id (or _id in MongoDB) in ascending order
      .populate('sender'); // Populate the sender field
  
      
      
  
      return res.status(200).send({ messages: allMessages });
    } catch (err) {
      next(err);
    }
  };

  export const getUsersThatHaveContactsWith = async (req, res, next) => {
    try {
        const userId = req.params.fromId;

        const messages = await Message.find({
            $or: [
                { sender: new mongoose.Types.ObjectId(userId) },
                { recipient: new mongoose.Types.ObjectId(userId) }
            ]
        })
        .populate('sender')
        .populate('recipient')
        .sort({ createdAt: -1 });

        const userIds = [];
        const latestMessages = {};

        messages.forEach(msg => {
            
            if (msg.sender.id !== userId) {
                userIds.push(msg.sender.id);
                if (!latestMessages[msg.sender.id] || msg.createdAt > latestMessages[msg.sender.id].createdAt) {
                  latestMessages[msg.sender.id] = msg;
              }
            }
            if (msg.recipient.id !== userId) {
                userIds.push(msg.recipient.id);
                if (!latestMessages[msg.recipient.id] || msg.createdAt > latestMessages[msg.recipient.id].createdAt) {
                  latestMessages[msg.recipient.id] = msg;
              }
            }
        });
        const users = await Users.find({ _id: { $in: userIds} });
   
      const response = {
        users: users.map(user => {
            const lastMessage = latestMessages[user._id.toString()];
            return {
                _id: user._id,
                username: user.username,
                lastMessage: lastMessage ? {
                    _id: lastMessage._id,
                    type: lastMessage.type,
                    content: lastMessage.content,
                    messageStatus: lastMessage.messageStatus,
                    createdAt: lastMessage.createdAt,
                    sender: {
                        _id: lastMessage.sender._id,
                        username: lastMessage.sender.username
                    },
                    recipient: {
                        _id: lastMessage.recipient._id,
                        username: lastMessage.recipient.username
                    }
                } : null
            };
        })
    };
        
        res.status(200).json({ response });

    } catch (err) {
        next(err);
    }
};