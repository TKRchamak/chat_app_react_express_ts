import { NextFunction, Request, Response } from "express";
import { getAllMsgFromDB, insertMsgToDB } from "./message.service";

export const getAllMsg = async (req: Request, res: Response, next: NextFunction) => {
    const allMsg = await getAllMsgFromDB();
    res.status(200).json({
        status: "success",
        data: allMsg
    })
}

export const insertMsg = async (req: Request, res: Response, next: NextFunction) => {
    const allMsg = await insertMsgToDB(req.body);
    res.status(200).json({
        status: "success",
        data: allMsg
    })
}