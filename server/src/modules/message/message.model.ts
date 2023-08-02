import { Schema, model } from "mongoose";
import { IMessage } from "./message.interface";

const messageSchema = new Schema<IMessage>({
    content: { type: String, required: true, unique: true },
    authorId: { type: String, required: true, unique: true },
    timestamp: { type: String, required: true, unique: true }
});

const Message = model<IMessage>("message", messageSchema);

export default Message;