const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

const messages = require('./messages');
const sessions = require('./sessions');
const users = require('./users');

app.use(cookieParser());
app.use(express.static('./public'));
app.use(express.json());


app.get('/api/session', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if (!sid || !users.isValid(username)) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }
  res.json({ username });
});


app.post('/api/session', (req, res) => {
  const { username } = req.body;

  if (!users.isValid(username)) {
    res.status(400).json({ error: 'required-username' });
    return;
  }

  if (username === 'dog') {
    res.status(403).json({ error: 'auth-insufficient' });
    return;
  }

  const sid = sessions.addSession(username);

  res.cookie('sid', sid);

  const allMessages = messages.getMessages();
  const allSessions = sessions.getSessions();

  res.json({ allMessages, allSessions });
});


app.delete('/api/session', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';

  if (sid) {
    res.clearCookie('sid');
  }

  if (username) {
    sessions.deleteSession(sid);
  }

  res.json({ username });
});



app.get('/api/messages', (req, res) => {

  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if (!sid || !users.isValid(username)) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }

  const allMessages = messages.getMessages();
  const allSessions = sessions.getSessions();

  res.json({ allMessages, allSessions });
});


app.post('/api/messages', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if (!sid || !users.isValid(username)) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }
  const { message } = req.body;

  const id = messages.addMessage(message, username);
  res.json({ id, message, username });
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

