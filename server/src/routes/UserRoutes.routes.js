import express from "express";
import { getUser, postUser, getUser } from "../controller/user..controller.js";

const router = express.Router();

router.post("/user", postUser);
router.get("/user", getUser);
router.get("/user/:userId", getUser);

export default router;
