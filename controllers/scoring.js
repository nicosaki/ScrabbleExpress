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

  score_word: function (req, response, next) { // POST
    response.render('value', { title: 'Word Score' }) // render??
  },

  value: function (req, response, next) {
    response.render('value', { title: 'Value of Word' })
  }
}

module.exports = ScoringController
