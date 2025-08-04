import express from "express";
import Applicant from "../models/Applicant.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const applicant = new Applicant(req.body);
  await applicant.save();
  res.status(201).send("Applicant submitted");
});

router.get("/", async (req, res) => {
  const applicants = await Applicant.find();
  res.json(applicants);
});

export default router;