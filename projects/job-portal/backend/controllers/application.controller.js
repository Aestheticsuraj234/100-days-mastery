import Application from "../models/application.model.js";
import Job from "../models/job.model.js";

export const applyToJob = async (req , res)=>{
    try {
        const {jobId , resume , coverLetter} = req.body;

        if (!req.user || !req.user.role.includes('candidate')) {
            return res.status(403).json({ message: 'Only candidates can apply to jobs' });
          }

          const job = await Job.findById(jobId);

          if(!job){
            return res.status(404).json({ message: 'Job not found' });
          }

        //   prefvent duplicate applications
        const existingApplication = await Application.findOne({candidate:req.user.id , job:jobId});

        if(existingApplication){
            return res.status(400).json({ message: 'You have already applied to this job' });
        }

        const application = await Application.create({
            candidate:req.user.id,
            resume,
            coverLetter,
            job:jobId,
            appliedAt:Date.now(),
            status:'applied'
        })

        res.status(201).json({message:"Application created successfully" , application});

    } catch (error) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
}


export const getMyApplications = async ( req , res )=>{
try {
    const applications = await Application.find({candidate:req.user.id})
    .populate("job" , "jobTitle , company")
    .sort({appliedAt:-1});

    res.status(200).json(applications);
} catch (error) {
    res.status(500).json({ message: "Server error", error: err.message });
}
}

// Employer only
export const getApplicationsByJob = async ( req , res)=>{
try {
    const jobId = req.params.jobId;
    const job = await Job.findById(jobId);

    if(!job){
        return res.status(404).json({ message: 'Job not found' });
      }

      if (job.createdBy.toString() !== req.user.id) {
        return res.status(403).json({ message: 'Only the employer who posted this job can view its applications' });
      }

      const applications = await Application.find({job:jobId})
      .populate("candidate" , "name email mobileNumber")
      .sort({appliedAt:-1});

      res.status(200).json(applications);
} catch (error) {
    res.status(500).json({ message: "Server error", error: err.message });  
}
}


export const updateApplicationStatus = async ( req , res )=>{
    try {
        const {status} = req.body;
        const application = await Application.findById(req.params.id).populate("job")

        if(!application){
            return res.status(404).json({ message: 'Application not found' });
          
        }
        if (application.job.createdBy.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Unauthorized to update this application' });
          }

          application.status = status;
          await application.save();

          res.status(200).json({message:"Application status updated successfully" , application});

    } catch (error) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
}