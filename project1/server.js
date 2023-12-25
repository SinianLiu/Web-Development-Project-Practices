const express = require('express');
const cookieParser = require('cookie-parser');
const uuidv4 = require('uuid').v4;

const PORT = 3000;
const app = express();

const game = require('./game');
const gameWeb = require('./game-web');

app.use(express.static('./public'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

const sessions = game.sessions;
const userData = game.userData;


app.get('/', (req, res) => {
  const sid = req.cookies.sid;

  if (sid && sessions[sid]) {
    const username = sessions[sid].username;
    res.send(gameWeb.homePage(username, userData[username]));
    return;
  }

  res.send(gameWeb.loginPage());
});


app.post('/guess', (req, res) => {
  const sid = req.cookies.sid;
  if (!sid || !sessions[sid]) {
    res.send(gameWeb.loginPage());
  }

  const username = sessions[sid].username;
  const word = req.body.word;

  if (!game.checkWordValid(word, username)) {
    const errors =
      "Your input word is invalid! Make sure the word is in the available list and not used before. The length of the word must be 5.";
    res.send(gameWeb.ErrorPage(errors));
    return;
  }

  game.compare(word, username);
  res.redirect('/');

});


app.post('/login', (req, res) => {
  const username = req.body.username.trim();
  const isNameValid = game.checkUserName(username);

  if (!isNameValid) {
    const errors = "Login Failed! Please Enter a valid name based on the instruction!";
    res.status(401).send(gameWeb.ErrorPage(errors));
    return;
  }

  const sid = uuidv4();
  sessions[sid] = { username };

  // if it's the first time that a user login, then initialize the data
  if (!userData[username]) {
    game.resetUserData(username);

    // 不能这么写！
    // data[username] = game.resetUserData(username);
  }

  res.cookie('sid', sid);
  res.redirect('/');

});


app.post('/new-game', (req, res) => {
  const sid = req.cookies.sid;

  if (sid && sessions[sid]) {
    const username = sessions[sid].username;
    game.resetUserData(username);
    res.redirect('/');
  } else {
    res.send(gameWeb.loginPage());
  }
});


app.post('/logout', (req, res) => {
  const sid = req.cookies.sid;
  delete sessions[sid];
  res.clearCookie('sid');
  res.redirect('/');
});


app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));