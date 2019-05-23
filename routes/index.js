const express = require('express')
const router = express.Router()
const cron = require('node-cron')
const _ = require('lodash')
const Jobs = require('../models/jobs')
const JobId = require('../models/jobId')
const api = require('./api')
let difference,
  newDiff = [],
  diff

router.get('/job/mail', async (req, res) => {
  cron.schedule('*/10 * * * * *', async () => {
    let jobs = await Jobs.find()
    let newJobs = _.map(jobs, _.partialRight(_.pick, ['identifier', 'title']))
    let jobId = await JobId.find()
    let newId = _.map(jobId, _.partialRight(_.pick, ['identifier', 'title']))
    difference = _.differenceWith(newJobs, newId, _.isEqual)

    if (difference.length > 0) {
      await JobId.collection.insertMany(difference)
      await api(difference)
      diff = await _.map(
        difference,
        _.partialRight(_.pick, ['title', 'identifier'])
      )
    }
  })
  res.send(difference)
})
module.exports = router
