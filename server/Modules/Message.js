import mongoose from "mongoose";

const { Schema } = mongoose;

// Define the User schema (assuming it has at least an id field)
const userSchema = new Schema({
  
});

const User = mongoose.model("User", userSchema);

// Define the Message schema
const messageSchema = new Schema(
  {
    sender: { 
      type: Schema.Types.ObjectId, 
      ref: 'User', 
      required: true 
    },
    recipient: { 
      type: Schema.Types.ObjectId, 
      ref: 'User', 
      required: true 
    },
    type: { 
      type: String, 
      default: 'text' 
    },
    content: { 
      type: String, 
      required: true 
    },
    messageStatus: { 
      type: String, 
      default: 'sent' 
    },
    createdAt: { 
      type: Date, 
      default: Date.now 
    }
  },
  { timestamps: true }
);

export default mongoose.model("Message", messageSchema);