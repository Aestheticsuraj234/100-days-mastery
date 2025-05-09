import Job from "../models/job.model.js";
import Company from "../models/company.model.js";

export const createJob = async (req, res) => {
  try {
    const { jobTitle, jobDesc, tags, salaryRange, jobRole, companyId } =
      req.body;

    if (!req.user || !req.user.role.includes("employer")) {
      return res.status(403).json({ message: "Only employers can post jobs" });
    }

    const company = await Company.findById(companyId);
    if (!company) return res.status(404).json({ message: "Company not found" });

    if (company.createdBy.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ message: "You can only post jobs for your own company" });
    }

    const job = await Job.create({
      jobTitle,
      jobDesc,
      tags,
      salaryRange,
      jobRole,
      company: companyId,
      createdBy: req.user.id,
    });
    res.status(201).json({ message: "Job created successfully", job });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find()
      .populate("company", "name location")
      .sort({ createdAt: -1 });

    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).populate(
      "company",
      "name location"
    );
    if (!job) return res.status(404).json({ message: "Job not found" });

    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const updateJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    if (job.createdBy.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ message: "You can only update your own job posts" });
    }

    Object.assign(job, req.body);
    await job.save();

    res.status(200).json({ message: "Job updated successfully", job });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const deleteJobs = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });

    if (job.createdBy.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ message: "You can only delete your own job posts" });
    }

    await job.deleteOne();

    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
