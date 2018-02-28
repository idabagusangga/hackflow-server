const UserModel = require('../models/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class UserController {
  static login (req, res) {
    UserModel.find({
      email: req.body.email
    })
    .then(response => {
      bcrypt.compare(req.body.password, response[0].password)
      .then(result => {
        let payload = {
          id: response[0]._id,
          email: req.body.email,
          role: response[0].role
        }
        let token = jwt.sign(payload, process.env.SECRET)
        res.status(200).json({
          msg: 'user logged in',
          token: token
        })
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          msg: 'invalid password',
          err: err
        })
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        msg: 'username not found',
        err: err
      })
    })
  }
  static register (req, res) {
    let newUser = new UserModel ({
      email: req.body.email,
      password: req.body.password,
      role: 'user'
    })
    newUser.save()
    .then(response => {
      res.status(200).json({
        msg: 'new user created please log in',
        data: response.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
}

module.exports = UserController;