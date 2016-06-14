var Scrabble = function () {}

Scrabble.prototype.letters = {
  'a': 1, 'b': 3, 'c': 3, 'd': 2, 'e': 1, 'f': 4, 'g': 2,
  'h': 4, 'i': 1, 'j': 8, 'k': 5, 'l': 1, 'm': 3, 'n': 1, 'o': 1, 'p': 3,
  'q': 10, 'r': 1, 's': 1, 't': 1, 'u': 1, 'v': 4, 'w': 4, 'x': 8, 'y': 4,
  'z': 10
}

Scrabble.prototype.score = function (word) {
  var word = word.toLowerCase()
  var score = 0
  if (word === '' || word === ' ') {
    return score
  } else if (word.length === 7) {
    score = 50
  }
  for (var letter of word) {
    if (/[a-z]/i.test(letter)) {
      score = score + Number(this.letters[letter])
    } else {
      return 'That is not a word!'
      // throw 'That is not a word!'
    }
  }
  return score
}

Scrabble.prototype.highestScoreFrom = function (array) {
  var score_array = []
  var length_array = []
  for (var word of array) {
    score_array.push(this.score(word))
    length_array.push(word.length)
  }
  var max = score_array[0]
  var max_index = 0

  for (i=0; i < array.length; i++) {
    if (score_array[i] > max) {
      max = score_array[i]
      max_index = i
    }
  }

  if (this.checkIfArrayIsUnque(score_array) === true) {
    return array[max_index] //if no dup scores, return best word
  } else { //if duplicates, first check for 7 letter word
    if (length_array.includes(7)) {
      var index = length_array.indexOf(7)
      return array[index]
    } else { //then find shortest word
      for (j = 0;j < length_array.length; j++) {
        var index = length_array.indexOf(Math.min(...length_array))
        if (score_array[index] == max) {
          return array[index]
        } else {
            if (index > -1) {
              length_array.splice(i, 1)
            }
        }
      }
      return array[index]
    }
  }
}

Scrabble.prototype.checkIfArrayIsUnque = function (array) {
   array.sort()
   for ( var i = 1; i < array.length; i++ ) {
       if(array[i - 1] === array[i])
           return false
   }
   return true
}

module.exports = Scrabble
