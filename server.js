import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import applicantRoutes from "./routes/applicants.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("your_mongo_uri", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"));

app.use("/api/applicants", applicantRoutes);

app.listen(5000, () => console.log("Server running on http://localhost:5000"));