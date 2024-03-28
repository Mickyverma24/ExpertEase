import express from "express";
import { protectedUser } from "../middlewares/protectedUser.js";
import { retriveAllUsers } from "../controllers/user.controllers.js";

const router = express.Router();

router.get("/", protectedUser, retriveAllUsers);

export default router;
