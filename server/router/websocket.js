import express from "express";
import { homePage, webSocket } from "../controller/websocket.controller.js";
const router = express.Router();

router.get("/", homePage);
router.get("/api", webSocket);

export default router;
