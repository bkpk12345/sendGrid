require('dotenv').config()
const express = require('express')
const jobs = require('./opp.json')
const app = express()
// const cronExec = require('./routes/index')
const index = require('./routes/index')
// const change = require('./routes/change')
const mongoose = require('mongoose')
const conn = require('./config/db')
mongoose
  .connect('mongodb://localhost/oppilio-dev', { useNewUrlParser: true })
  .then(() => {})
app.use('/api', index)

// cronExec()
// conn()
//   .then(() => {
//     console.log('connected to db')
//   })
//   .catch(e => {
//     console.log('e')
//   })
const port = 9000
app.listen(port, console.log(`listening at ${port}`))
