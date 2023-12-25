const words = require('./words');

const sessions = {};
const userData = {};


function resetUserData (username) {
  userData[username] = {
    guessedWords: [],
    matchedLetterCount: [],
    secretWord: getRandomWord(words),
    guessCorrect: false,
  };

  console.log('User Name: ' + username);
  console.log('Secret Word: ' + userData[username].secretWord);
}


function getRandomWord (words) {
  const idx = Math.floor(Math.random() * words.length);
  return words[idx];
}


function checkUserName (username) {
  const regex = /^[a-zA-Z0-9]+$/;
  if (!username || !username.match(regex) || username === 'dog') {
    return false;
  }
  return true;
};


function checkWordValid (word, username) {
  word = word.toLowerCase();
  const guessedWords = userData[username].guessedWords;
  if (!word || word.length != 5 || !words.includes(word) || guessedWords.includes(word)) {
    return false;
  }
  return true;
};


function compare (word, username) {
  word = word.toLowerCase();
  const secretWord = userData[username].secretWord;
  const wordList = word.split("");
  let count = 0;
  let matchedCount = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === secretWord[i]) {
      matchedCount += 1;
    }

    const index = wordList.indexOf(secretWord[i]);
    if (index != -1) {
      count++;
      wordList[index] = "*";
    }
  }

  userData[username].guessedWords.push(word)
  userData[username].matchedLetterCount.push(count)

  if (matchedCount === 5) {
    userData[username].guessCorrect = true
  }

};



const game = {
  sessions,
  userData,
  resetUserData,
  getRandomWord,
  checkUserName,
  checkWordValid,
  compare
};

module.exports = game;

