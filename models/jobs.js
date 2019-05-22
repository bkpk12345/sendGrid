const mongoose = require('mongoose')
const { Schema } = mongoose

const JobSchema = new Schema({
  identifier: {
    type: String
  },
  datePosted: {
    type: Date,
    required: [true, 'Date Posted is required']
  },
  salaryType: { type: String },
  employmentType: {
    type: String,
    required: true
  },
  shortDescription: { type: String },
  experienceRequired: { type: String },
  industry: { type: String },
  jobBenifits: { type: String },
  jobLocationType: { type: String }, // for remote locations.
  qualifications: { type: String },
  responsibilities: { type: String },
  skills: { type: String },
  title: {
    type: String,
    required: [true, 'Job Title is required']
  },
  validThrough: {
    type: Date
  },
  jobType: { type: String },
  category: { type: String },
  jobApplications: [
    {
      type: Schema.Types.ObjectId,
      ref: 'application'
    }
  ],
  jobCreator: {
    type: Schema.Types.ObjectId,
    ref: 'recruiter'
  },
  status: {
    type: String
  },
  questions: [String]
})
module.exports = mongoose.model('job', JobSchema, 'jobs')
