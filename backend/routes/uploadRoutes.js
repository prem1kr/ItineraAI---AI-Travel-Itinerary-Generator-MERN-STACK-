import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import uploadMiddleware from "../middleware/uploadMiddleware.js";
import { uploadDocuments } from "../controllers/uploadController.js";

const router = express.Router();

router.post("/", authMiddleware, uploadMiddleware.array("documents", 10), uploadDocuments);

export default router;