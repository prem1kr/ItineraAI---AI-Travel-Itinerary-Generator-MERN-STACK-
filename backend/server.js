import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import itineraryRoutes from "./routes/itineraryRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import errorMiddleware from "./middleware/errorMiddleware.js";

dotenv.config();

const app = express();


connectDB();

/* =========================
MIDDLEWARES
========================= */

app.use(
cors({
origin: process.env.CLIENT_URL || "*",
credentials: true,
})
);

app.use(express.json());

app.use(
express.urlencoded({
extended: true,
})
);

/* =========================
STATIC FILES
========================= */

app.use(
"/uploads",
express.static(
path.join(
process.cwd(),
"src/uploads"
)
)
);

/* =========================
ROOT ROUTE
========================= */

app.get("/", (req, res) => {
res.status(200).json({
success: true,
message:
"AI Travel Itinerary API Running 🚀",
});
});

/* =========================
API ROUTES
========================= */

app.use(
"/api/auth",
authRoutes
);

app.use(
"/api/upload",
uploadRoutes
);

app.use(
"/api/itinerary",
itineraryRoutes
);

app.use(
"/api/user",
userRoutes
);

/* =========================
404 ROUTE
========================= */

app.use("*", (req, res) => {
res.status(404).json({
success: false,
message: "Route Not Found",
});
});

/* =========================
GLOBAL ERROR HANDLER
========================= */

app.use(errorMiddleware);

/* =========================
SERVER
========================= */

const PORT =
process.env.PORT || 5000;

app.listen(PORT, () => {
console.log(`
=============

🚀 Server Started Successfully
🌐 Port: ${PORT}
🗄️ MongoDB Connected
🤖 Gemini AI Ready
==================

`);
});
