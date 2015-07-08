var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

/* GET /author */
router.get('/author', function(req, res) {
  res.render('author', { autor: 'Verdi1813', foto: 'verdi1813.jpg' });
});

router.get('/quizes/question',  quizController.question);
router.get('/quizes/answer',    quizController.answer);

module.exports = router;
