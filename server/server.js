import "dotenv/config";
import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import interviewRoutes from "./routes/interviewRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";
import companyRoutes from "./routes/companyRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";
import communityRoutes from "./routes/communityRoutes.js";

const app = express();

// 1. CORS configuration
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://interview-iq-frontend-alpha.vercel.app"
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// 2. Parse JSON
app.use(express.json());

// 3. Health check (does not require MongoDB)
app.get("/", (req, res) => {
  res.send("InterviewIQ API is running successfully.");
});

// 4. Connect MongoDB before handling API requests
app.use("/api", async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error("Database connection error:", error);

    res.status(500).json({
      message: "Database connection failed"
    });
  }
});

// 5. API routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/interviews", interviewRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/companies", companyRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/community", communityRoutes);

// 6. Export Express app for Vercel
export default app;