import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  candidate: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  resume: {
    type: String,
  },
  coverLetter: {
    type: String,
  },
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
    required: true,
  },
  appliedAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["applied", "under-review", "rejected", "accepted"],
    default: "applied",
  },
});

export default mongoose.model("Application", applicationSchema);
