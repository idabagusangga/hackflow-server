const mongoose = require('mongoose')
const Schema = mongoose.Schema

let AnswerSchema = new Schema ({
  answer: {
    type: String,
    required: true
  },
  author: [{
    type: Schema.Types.ObjectId,
    ref: 'UserFlow'
  }],
  points: [{
    type: Schema.Types.ObjectId,
    ref: 'UserFlow'
  }],
  questionId: [{
    type: Schema.Types.ObjectId,
    ref: 'QuestionFlow'
  }]
})

const Answer = mongoose.model('AnswerFlow', AnswerSchema)

module.exports = Answer;