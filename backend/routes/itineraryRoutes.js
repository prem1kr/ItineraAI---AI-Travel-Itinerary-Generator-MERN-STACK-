import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { generateItinerary, getHistory, getItineraryById, deleteItinerary, shareItinerary, getSharedItinerary } from "../controllers/itineraryController.js";

const router = express.Router();

router.post("/generate", authMiddleware, generateItinerary);
router.get("/history", authMiddleware, getHistory);
router.get("/:id", authMiddleware, getItineraryById);
router.delete("/:id", authMiddleware, deleteItinerary);
router.post("/share/:id", authMiddleware, shareItinerary);
router.get("/shared/:shareId", getSharedItinerary);

export default router;