"use strict"

module.exports = compare

function compare (word, guess) {

  word = word.toLowerCase();
  guess = guess.toLowerCase();

  let word_list = word.split("");
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    const index = word_list.indexOf(guess[i]);
    if (index != -1) {
      count++;
      word_list[index] = "*";
    }
  }

  return count;
}