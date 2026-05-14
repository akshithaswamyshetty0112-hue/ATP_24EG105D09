import exp from "express";
import { connect } from "mongoose";
import {empRoute} from "./APIs/EmployeeAPI.js"
import cors from "cors";
import "dotenv/config";

const app = exp();
const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI || process.env.MONGODB_URL;
const allowedOrigins = (process.env.CORS_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

//add cors middleware
app.use(
  cors({
    origin: allowedOrigins,
  }),
);
//body parser middleware
app.use(exp.json());
//emp api middleware
app.use("/emp-api", empRoute);

//DB connection
const connectDB = async () => {
  try {
    if (!MONGODB_URI) {
      throw new Error("MONGODB_URI or MONGODB_URL environment variable is not set");
    }
    await connect(MONGODB_URI);
    console.log("DB connected");
    app.listen(PORT, () => console.log(`server listening on port ${PORT}..`));
  } catch (err) {
    console.log("err in DB connection", err.message);
    process.exit(1);
  }
};

connectDB();

//error handling middleware
app.use((err, req, res, next) => {
  console.log("err in middleware:", err.message);

  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});
