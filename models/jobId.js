const mongoose = require('mongoose')
const { Schema } = mongoose

module.exports = mongoose.model(
  'jobId',
  new Schema({
    identifier: String
  }),
  'jobId'
)
