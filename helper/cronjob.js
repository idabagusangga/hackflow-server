// const moment = require('moment')
const CronJob = require('cron').CronJob
const sendReminder = require('./sendReminder')

const schedulerFactory = function () {
  return {
    start: function () {
      console.log('Cron Job started');
      new CronJob ('0 0 * * *', function () {
        console.log('Running CronJob Every day.');
        sendReminder.reminder()
      }, null, true, '')
    }
  }
}
module.exports = schedulerFactory();