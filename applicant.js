import mongoose from "mongoose";

const applicantSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  role: String,
  motivation: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Applicant", applicantSchema);