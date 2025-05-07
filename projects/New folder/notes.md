### 1. **User Schema**

```js
// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  mobileNumber: {
    type: String,
    required: true
  },
  role: {
    type: [String],
    enum: ['employer', 'candidate'],
    required: true
  }
}, { timestamps: true });

export default mongoose.model('User', userSchema);
```

---

### 2. **Company Schema**

```js
// models/Company.js
import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  companySize: String,
  location: String,
  address: String,
  emails: [String],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true  // should be an employer
  }
}, { timestamps: true });

export default mongoose.model('Company', companySchema);
```

---

### 3. **Job Schema**

```js
// models/Job.js
import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true
  },
  jobTitle: {
    type: String,
    required: true
  },
  jobDesc: {
    type: String,
    required: true
  },
  tags: [String],
  salaryRange: {
    min: Number,
    max: Number
  },
  jobRole: {
    workLocation: {
      type: String,
      enum: ['remote', 'onsite', 'hybrid'],
      required: true
    },
    department: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
    jobType: {
      type: String,
      enum: ['full-time', 'part-time', 'contract', 'internship'],
      required: true
    }
  }
}, { timestamps: true });

export default mongoose.model('Job', jobSchema);

```

---

### 4. **Application Schema**

```js
// models/Application.js
import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  candidate: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true
  },
  appliedAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['applied', 'under review', 'rejected', 'accepted'],
    default: 'applied'
  }
});

export default mongoose.model('Application', applicationSchema);
```

---

### Summary of Relationships:

* **User** can be `employer` or `candidate`.
* **Employer** creates a **Company**.
* **Company** posts **Jobs**.
* **Candidate** applies to **Jobs** through **Applications**.
