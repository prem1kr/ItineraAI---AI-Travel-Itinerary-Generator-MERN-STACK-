import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import authRoutes from "./routes/authRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import itineraryRoutes from "./routes/itineraryRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import errorMiddleware from "./middleware/errorMiddleware.js";
import { connectDB } from "./config/db.js";

dotenv.config();
const app = express();

connectDB();


app.use(cors({
    origin: process.env.CLIENT_URL || "*",
    credentials: true,
})
);

app.use(express.json());

app.use(express.urlencoded({
    extended: true,
}));


app.use("/uploads", express.static(path.join(
    process.cwd(), "src/uploads")));



app.use("/api/auth", authRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/itinerary", itineraryRoutes);
app.use("/api/user", userRoutes);



app.use("*", (req, res) => {
    res.status(404).json({ success: false, message: "Route Not Found" });
});


app.use(errorMiddleware);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`
🚀 Server Started Successfully
🌐 Port: ${PORT}
🗄️ MongoDB Connected
🤖 Gemini AI Ready`);
});
