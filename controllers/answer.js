const AnswerModel = require('../models/answer')
const QuestionModel = require('../models/question')
const jwt = require('jsonwebtoken')

class AnswerController {
  static mencariJawaban (req, res) {
    AnswerModel.find({
      questionId: req.params.id
    }).populate('author')
    .then(response => {
      res.status(200).json({
        data: response
      })
    })
    .catch(err => {
      res.status(500).json({
        err: err
      })
    })
  }
  static postAnswer (req, res) {
    if(req.body.token) {
      let decoded = jwt.verify(req.body.token, process.env.SECRET)
      let newAnswer = new AnswerModel ({
        answer: req.body.answer,
        author: decoded.id,
        questionId: req.body.questionId
      })
      newAnswer.save()
      .then(response => {
        res.status(200).json({
          msg: 'answer posted',
          data: response
        })
      })
      .catch(err => {
        res.status(500).json({
          msg: 'please input all required fields',
          err: err
        })
      })
    } else {
      res.status(500).json({
        msg: 'must provide valid token'
      })
    }

  }
  static upvote (req, res) {
    if(req.body.token) {
      let decoded = jwt.verify(req.body.token, process.env.SECRET)
      AnswerModel.findById(req.params.id)
      .then(response => {
        console.log(response.points.length);
          let search = response.points.indexOf(decoded.id)
          console.log(decoded.email);
          console.log(search);
          if(search === -1) {
            response.points.push(decoded.id)
            response.save()
            .then(result => {
              res.status(200).json({
                msg: 'points updated',
                data: result
              })
            })
            .catch(err => {
              res.status(500).json({
                err: err
              })
            })
          }
          else {
            res.send('user upvoted this answer')
          }
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
  static downvote (req, res) {
    if(req.body.token) {
      let decoded = jwt.verify(req.body.token, process.env.SECRET)
      AnswerModel.findById(req.params.id)
      .then(response => {
        console.log(response.points.length);
          let search = response.points.indexOf(decoded.id)
          console.log(decoded.email);
          console.log(search);
          if(search !== -1) {
            response.points.splice(search, 1)
            response.save()
            .then(result => {
              res.status(200).json({
                msg: 'points updated',
                data: result
              })
            })
            .catch(err => {
              res.status(500).json({
                err: err
              })
            })
          }
          else {
            res.send('user downvoted this question')
          }
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
}
module.exports = AnswerController;