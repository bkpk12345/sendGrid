const mongoose = require('mongoose')
const tunnel = require('tunnel-ssh')

mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
const { SSH_MONGO_USERNAME, SSH_MONGO_PASSWORD, SSH_MONGO_HOST } = process.env

const config = {
  username: SSH_MONGO_USERNAME,
  password: SSH_MONGO_PASSWORD,
  host: SSH_MONGO_HOST,
  port: 1099,
  dstPort: 27017,
  readyTimeout: 99999
}
/* eslint-disable no-console */
module.exports = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await mongoose.connect(
        `mongodb://${config.username}:${config.password}@${config.host}:${
          config.port
        }/oppilio-dev`,
        {
          useNewUrlParser: true
        }
      )
      resolve()
    } catch (error) {
      reject(error)
    }
  })
}
