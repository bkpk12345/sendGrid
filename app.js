require('dotenv').config()
const express = require('express')
const app = express()
const index = require('./routes/index')
// const change = require('./routes/change')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/oppilio-dev', { useNewUrlParser: true })
app.use('/api', index)

const port = 9000
app.listen(port, console.log(`listening at ${port}`))
