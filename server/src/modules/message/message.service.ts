import { IMessage } from "./message.interface";
import Message from "./message.model";

export const getAllMsgFromDB = async (): Promise<IMessage[] | string> => {
    try {
        let allMsg = await Message.find();
        return allMsg;

    } catch (error) {
        return `error ${error}`
    }
}


export const insertMsgToDB = async (msgData: IMessage): Promise<string> => {
    try {
        const message = new Message(msgData);
        await message.save();
        return 'done';

    } catch (error) {
        return `error ${error}`
    }
}
