const UserModel = require('../models/users')
// const moment = require('moment')
const Mailer = require('../mailer')

class CronMailer {
  static reminder () {
    UserModel.find()
    .then(result => {
      result.forEach(index => {
        let mail = new Mailer(index.email)
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
}

module.exports = CronMailer;