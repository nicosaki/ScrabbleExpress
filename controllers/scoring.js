var Scrabble = require('../lib/scoring')
var scrabble = new Scrabble()
var ScoringController = {

  index: function (req, response, next) {
    response.render('index', { title: 'Scrabble Scoring App' })
  },

  chart: function (req, response, next) {
    response.render('chart', { title: 'Letter Value Chart' })
  },

  score: function (req, response, next) {
    response.render('score', { title: 'Score My Word' })
  },

  scoreWord: function (request, response, next) { // POST may be garbage
    var word = request.body.word
    var wordScore = scrabble.score(word)
    response.render('value', { title: 'Value of Word', word: word, wordScore: wordScore}) // render??
  },

  value: function (request, response, next) {
    var word = request.body.word
    var wordScore = scrabble.score(word)
    response.render('value', { title: 'Value of Word', word: word, wordScore: wordScore })
  }
}

module.exports = ScoringController
