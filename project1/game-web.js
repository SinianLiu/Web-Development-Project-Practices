const words = require('./words');

const gameWeb = {
  loginPage: function () {
    return `
    <!doctype html>
    <html>
      <head>
        <link rel="stylesheet" href="style.css">
        <title>Home Page</title>
      </head>
      <body>
        <div class="login-page">
          <p>Login with name consist of only letters and numbers! User name 'Dog' is not allowed!</p>
          <form action="/login" method="POST">
            <label for="username">Enter User Name:</label>
            <input class="username" id="username" name="username"/>
            <button type="submit">Login</button>
          </form>
        </div>
      </body>
    </html>
    `
  },


  homePage: function (username, userData) {
    return `
      <!doctype html>
      <html>
        <head>
          <link rel="stylesheet" href="style.css">
          <title>Home Page</title>
        </head>
        <body>
          <div class="main-area">
            ${gameWeb.dataWidget(username, userData)}    
            ${!userData.guessCorrect ? gameWeb.guessWidget(userData) : ''}   
            <p class="win">${userData.guessCorrect ? 'You won!' : ''}</p>   
            ${gameWeb.newGameWidget()}                                      
            ${gameWeb.logoutWidget()}  
          </div>  
        </body>
      </html>
    `
  },


  dataWidget: function (username, userData) {
    const length = userData.guessedWords.length
    const previousGuess = (length == 0) ? '' : (userData.guessedWords[length - 1] + ': ' + userData.matchedLetterCount[length - 1])

    return `
      <div class="data-page">
          <p><span>User Name: </span>${username}</p>
          ${gameWeb.getAvailableWords(userData)}
          ${gameWeb.getGuessedWords(userData)}
          <p><span class="header">Valid Guess Times: </span>${length}</p>
          <p><span class="header">Last Guessed Word: </span>${previousGuess}</p>
      </div>    
    `
  },


  guessWidget: function () {
    return `
      <div class="guess button-widget">
        <form action="/guess" method="POST">
          <label for="word">Enter a word:</label>
          <input class="guess-word" id="word" name="word"/>
          <button type="submit">Guess</button>
        </form>          
      </div>      
    `
  },


  logoutWidget: function () {
    return `
      <div class="logout button-widget">
        <form action="/logout" method="POST">
          <button type="submit">Logout</button>
        </form>          
      </div>    
    `
  },


  newGameWidget: function () {
    return `
      <div class="new-game button-widget">
        <form action="/new-game" method="POST">
          <button type="submit">Start a new game</button>
        </form>  
      </div>        
    `
  },


  getAvailableWords: function (userData) {
    let strs = '';
    for (let i = 0; i < words.length; i++) {
      if (!userData.guessedWords.includes(words[i])) {
        strs += words[i] + ' ';
      }
    }

    return `
      <span>Available Words:</span>
      <p class="valid-words">${strs}</p>
    `
  },


  getGuessedWords: function (userData) {
    let strs = '';
    for (let i = 0; i < userData.guessedWords.length; i++) {
      strs += userData.guessedWords[i] + ': ' + userData.matchedLetterCount[i] + ', ';
    }

    return `
      <span>Previous Guessed Words and Matched Letter Numbers:</span>
      <p>${strs}</p>
    `
  },


  ErrorPage: function (errors) {
    return `
      <!doctype html>
      <html>
        <head>
          <link rel="stylesheet" href="style.css">
          <title>Errors</title>
        </head>
        <body>
          <div class="errors">
            <p>${errors}</p>
            <p><a href="/">Press here to start again.</a></p>
          </div>
        </body>
    </html>
    `
  },

}

module.exports = gameWeb;


