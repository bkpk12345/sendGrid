const express = require('express')
const router = express.Router()
const cron = require('node-cron')
const _ = require('lodash')
const Jobs = require('../models/jobs')
const JobId = require('../models/jobId')
const api = require('./api')
// const sendGridEmail = require('../utils/sendGridEmail')
let difference
// import sendMail from '../../utils/sendMail'

router.get('/job/mail', async (req, res) => {
  // cron.schedule('* * * * * *', async () => {
  let jobs = await Jobs.find()
  let newJobs = _.map(jobs, _.partialRight(_.pick, ['identifier']))
  let jobId = await JobId.find()
  let newId = _.map(jobId, _.partialRight(_.pick, ['identifier']))

  difference = _.differenceWith(newJobs, newId, _.isEqual)
  if (difference.length > 0) {
    let diff = await JobId.collection.insertMany(difference)
    await api()
  }

  res.send(difference)
})
module.exports = router
