import express from "express";
import { getMessage, sendMessage } from "../controllers/message.controllers.js";
import { protectedUser } from "../middlewares/protectedUser.js";

const router = express.Router();

router.post("/send/:id",protectedUser,sendMessage);
router.get("/:id",protectedUser,getMessage);
export default router;