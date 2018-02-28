const mongoose = require('mongoose')
const Schema = mongoose.Schema

let QuestionSchema = new Schema ({
  title: {
    type: String,
    required: true
  },
  description: String,
  points: [{
    type: Schema.Types.ObjectId,
    ref: 'UserFlow'
  }],
  author: [{
    type: Schema.Types.ObjectId,
    ref: 'UserFlow'
  }]
})

const Question = mongoose.model('QuestionFlow', QuestionSchema)

module.exports = Question;