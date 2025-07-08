import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  whatsapp: { type: String, required: true },
  course: { type: String, required: true },
  beginner: { type: Boolean, default: false },
  intermediate: { type: Boolean, default: false },
  advanced: { type: Boolean, default: false },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
});

const Enrollment = mongoose.model("Enrollment", enrollmentSchema);

export default Enrollment;
