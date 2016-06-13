var express = require('express')
var router = express.Router()
var Controller = require('../controllers/scoring')

/* GET home page. */
router.get('/', Controller.index)

router.get('/scrabble/chart', Controller.chart)

router.get('/scrabble/score', Controller.score)

router.post('/scrabble/score', Controller.score_word)

router.get('/scrabble/score/:word', Controller.value)

module.exports = router;

// GET /scrabble/chart: shows the letter score chart
// GET /scrabble/score: shows a form allowing a user to submit a word for scoring
// POST /scrabble/score: processes the user input and renders either
// a page showing the user submitted word and it's score or
// in the case of something it can't score, an error page with an "unscorable word" message
// GET /scrabble/score/:name: A dynamic route that scores whatever word is passed into the :name portion of the dynamic route. Will render either
// a page showing the user submitted word and it's score or
// in the case of something it can't score, an error page with an "unscorable word" message
