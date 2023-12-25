const express = require('express');
const cookieParser = require('cookie-parser');
const uuidv4 = require('uuid').v4;

const PORT = 3000;
const app = express();

const login = require('./login');
const loginWeb = require('./login-web');

app.use(express.static('./public'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

const sessions = login.sessions;
const words = login.words;

app.get('/', (req, res) => {
  const sid = req.cookies.sid;

  if (sid && sessions[sid]) {
    const username = sessions[sid].username;
    res.send(loginWeb.dataPage(username, words[username].word));
    return;
  }

  res.send(loginWeb.loginPage());
});


app.post('/login', (req, res) => {
  const username = req.body.username.trim();
  const isNameValid = login.checkUserName(username);

  if (!isNameValid) {
    res.status(401).send(loginWeb.loginFailPage());
    return;
  }

  const sid = uuidv4();
  sessions[sid] = { username };

  if (!words[username]) {
    words[username] = { word: '' };
  }

  res.cookie('sid', sid);
  res.redirect('/');
});


app.post('/change', (req, res) => {
  const word = req.body.word.trim();
  const sid = req.cookies.sid;

  const username = sessions[sid].username;
  words[username] = { word };
  res.redirect('/');
});


app.post('/logout', (req, res) => {
  const sid = req.cookies.sid;
  delete sessions[sid];
  res.clearCookie('sid');
  res.redirect('/');
});


app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));