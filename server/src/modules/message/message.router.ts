import express from "express"
import { getAllMsg, insertMsg } from "./message.controller";
const router = express.Router();

router.get("/", getAllMsg);
router.post("/", insertMsg);
// router.patch("/", );
// router.put("/", );
// router.delete("/", );

export default router;