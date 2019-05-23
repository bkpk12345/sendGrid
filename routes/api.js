let jobs = require('../opp.json')
let request = require('request-promise')
// console.log(jobs.job)
module.exports = jobs => {
  var options = {
    method: 'POST',
    url: 'https://api.sendgrid.com/v3/mail/send',
    headers: {
      'content-type': 'application/json',
      authorization:
        'Bearer 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'
    },
    body: {
      personalizations: [
        {
          to: [
            { email: 'balkrushna@vrlabtech.com', name: 'xyz' },
            { email: 'hdtv7180@gmail.com', name: 'Bala' }
          ],
          dynamic_template_data: {
            jobs
          },
          subject: 'Hello, World!'
        }
      ],
      from: { email: 'balkrushna@vrlabtech.com', name: 'BK' },
      reply_to: { email: 'balkrushna@vrlabtech.com', name: 'BK' },
      template_id: 'd-c037f60cbd074f2b9d43819c01481be5'
    },
    json: true
  }

  request(options)
    .then(res => {
      console.log(res)
    })
    .catch(er => {
      console.log(er)
    })
}
