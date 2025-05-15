## ✅ Assumptions

* Application Model:
  * `job` (ObjectId ref to Job)
  * `candidate` (ObjectId ref to User)
  * `resume`, `coverLetter` (optional fields)
  * `status` (e.g., `applied`, `reviewed`, `accepted`, `rejected`)
  * `appliedAt`

* Only users with the role `candidate` can apply.

---

## ✅ `controllers/applicationController.js`

```js
// controllers/applicationController.js
import Application from '../models/Application.js';
import Job from '../models/Job.js';

// Apply to a job (Only candidates)
export const applyToJob = async (req, res) => {
  try {
    const { jobId, resume, coverLetter } = req.body;

    if (!req.user || !req.user.role.includes('candidate')) {
      return res.status(403).json({ message: 'Only candidates can apply to jobs' });
    }

    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ message: 'Job not found' });

    // Prevent duplicate applications
    const existing = await Application.findOne({ job: jobId, candidate: req.user.id });
    if (existing) {
      return res.status(400).json({ message: 'You have already applied for this job' });
    }

    const application = await Application.create({
      job: jobId,
      candidate: req.user.id,
      resume,
      coverLetter,
      status: 'applied',
      appliedAt: new Date()
    });

    res.status(201).json({ message: 'Applied successfully', application });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get applications of logged-in candidate
export const getMyApplications = async (req, res) => {
  try {
    const applications = await Application.find({ candidate: req.user.id })
      .populate('job', 'jobTitle company')
      .sort({ appliedAt: -1 });

    res.status(200).json(applications);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get applications for a job (Employer only)
export const getApplicationsByJob = async (req, res) => {
  try {
    const jobId = req.params.jobId;
    const job = await Job.findById(jobId);

    if (!job) return res.status(404).json({ message: 'Job not found' });

    if (job.createdBy.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Only the employer who posted this job can view its applications' });
    }

    const applications = await Application.find({ job: jobId })
      .populate('candidate', 'name email mobileNumber')
      .sort({ appliedAt: -1 });

    res.status(200).json(applications);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Update application status (Employer only)
export const updateApplicationStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const application = await Application.findById(req.params.id).populate('job');

    if (!application) return res.status(404).json({ message: 'Application not found' });

    if (application.job.createdBy.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized to update this application' });
    }

    application.status = status;
    await application.save();

    res.status(200).json({ message: 'Status updated', application });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
```

---

## ✅ `routes/applicationRoutes.js`

```js
// routes/applicationRoutes.js
import express from 'express';
import {
  applyToJob,
  getMyApplications,
  getApplicationsByJob,
  updateApplicationStatus
} from '../controllers/applicationController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, applyToJob);                    // Candidate applies
router.get('/my', protect, getMyApplications);            // Candidate views own apps
router.get('/job/:jobId', protect, getApplicationsByJob); // Employer views apps for a job
router.put('/:id', protect, updateApplicationStatus);     // Employer updates status

export default router;
```

---

## ✅ Sample `Application` Mongoose Schema (if you need it)

```js
// models/Application.js
import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  candidate: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  resume: { type: String },
  coverLetter: { type: String },
  status: {
    type: String,
    enum: ['applied', 'reviewed', 'accepted', 'rejected'],
    default: 'applied'
  },
  appliedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Application', applicationSchema);
```

---

Would you like help integrating notifications (email or in-app) for job status changes or new applications?
