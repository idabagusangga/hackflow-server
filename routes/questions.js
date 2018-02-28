var express = require('express');
var router = express.Router();
const QuestionController = require('../controllers/question')

router.post('/', QuestionController.postQuestion)
// router.post('/?q', QuestionController.searchQuestion)
router.get('/', QuestionController.getAllQuestion)
router.get('/:id', QuestionController.findQuestion)
router.post('/upvote/:id', QuestionController.upvote)
router.post('/downvote/:id', QuestionController.downvote)


module.exports = router;