require('dotenv').config()
const express = require('express')
const jobs = require('./opp.json')
const app = express()
const { cronExec } = require('./routes/index')

const mongoose = require('mongoose')
const conn = require('./config/db')

mongoose
  .connect('mongodb://localhost/oppilio-dev', { useNewUrlParser: true })
  .then(() => {})

cronExec()

const port = 9000
app.listen(port, console.log(`listening at ${port}`))
