const SENDGRID_API_KEY =
  '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'
// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
// export default () => {
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(SENDGRID_API_KEY)
const msg = {
  to: 'balkrushna@vrlabtech.com',
  from: 'hdtv7180@gmail.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>'
}
sgMail.send(msg)
// }
