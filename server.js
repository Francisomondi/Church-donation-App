import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./Backend/config/db.js";
import donationRoutes from "./Backend/routes/donation.routes.js";
import errorHandler from "./Backend/middleware/error.middleware.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/donation", donationRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
