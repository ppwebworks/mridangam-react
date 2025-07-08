import express from "express";
import Enrollment from "../models/Enrollment.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, country, city, whatsapp, course, age, gender } =
      req.body;
    const enrollment = new Enrollment({
      name,
      email,
      country,
      city,
      whatsapp,
      course,
      beginner: course === "Beginner Mridangam",
      intermediate: course === "Intermediate Mridangam",
      advanced: course === "Advanced Mridangam",
      age,
      gender,
    });
    await enrollment.save();
    res.status(201).json(enrollment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const enrollments = await Enrollment.find();
    res.json(enrollments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
