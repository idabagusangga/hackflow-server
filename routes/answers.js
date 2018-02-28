var express = require('express');
var router = express.Router();
const AnswerController = require('../controllers/answer')

router.post('/', AnswerController.postAnswer)
router.get('/:id', AnswerController.mencariJawaban)
router.post('/upvote/:id', AnswerController.upvote)
router.post('/downvote/:id', AnswerController.downvote)


module.exports = router;