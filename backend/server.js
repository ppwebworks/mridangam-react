import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import enrollmentRoutes from "./routes/enrollment.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/enrollments", enrollmentRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
