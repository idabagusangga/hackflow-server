const mongoose = require('mongoose')
const QuestionModel = require('../models/question')
const jwt = require('jsonwebtoken')

class QuestionController {
  static getAllQuestion (req, res) {
    QuestionModel.find().populate(['author'])
    .then(response => {
      console.log(response);
      res.status(200).json({
        data: response
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        err:err,
        msg:"failed to get all questions"
      })
    })
  }
  static findQuestion (req, res) {
    QuestionModel.findById(req.params.id).populate('author', 'email')
    .then(response => {
      res.status(200).json({
        data: response
      })
    })
    .catch(err => {
      res.status(500).json({
        err: err,
        msg: 'Question not found'
      })
    })
  }
  static searchQuestion (req, res) {
    console.log(req.query.q);
    QuestionModel.find({ title : /req.query.q/i}, 'title description').populate('author','email')
    .then(response => {
      res.status(200).json({
        data: response
      })
    })
    .catch(err => {
      res.status(500).json({
        err: err,
        msg: 'Question not found'
      })
    })
  }
  static postQuestion (req, res) {
    console.log('hahahahaha', req.body.token);
    if(req.body.token){
      let decoded = jwt.verify(req.body.token, process.env.SECRET)
      console.log(decoded);
      let newQuestion = new QuestionModel ({
        title: req.body.title,
        description: req.body.description,
        author: decoded.id
      })
      newQuestion.save()
      .then(response => {
        res.status(200).json({
          data: response
        })
      })
      .catch(err => {
        res.status(500).json({
          err: err,
          msg: 'failed to post question'
        })
      })
    } else {
      res.status(500).json({
        msg: 'please log in'
      })
    }
    
  }
  static removeQuestion (req, res) {
    if(req.body.token) {
      let decoded = jwt.verify(req.body.token, process.env.SECRET)
      QuestionModel.remove({_id: req.params.id})
      .then(result => {
        res.status(200).json({
          msg: 'Question deleted',
          data: result.data
        })
      })
      .catch(err => {
        res.status(500).json({
          msg: 'Failed to Delete Question',
          err: err
        })
      })
    } else {
      res.status(500).json({
        msg: 'please log in'
      })
    }

  }
  static upvote (req, res) {
    if(req.body.token) {
      let decoded = jwt.verify(req.body.token, process.env.SECRET)
      QuestionModel.findById(req.params.id)
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
            res.send('user upvoted this question')
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
      QuestionModel.findById(req.params.id)
      .then(response => {
        // console.log(response.points.length);
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
module.exports = QuestionController;