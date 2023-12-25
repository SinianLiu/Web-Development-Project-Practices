
const sessions = require('./sessions.js');
const users = require('./users.js');
const transactions = require('./transactions.js');

const getSessions = (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if (!sid || !users.isValid(username)) {
    return null;
  }
  return username;
}


const checkSessionsService = (req, res) => {
  const username = getSessions(req, res);
  if (!username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }
  res.json({ username });
}


const loginService = (req, res) => {
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
  const existingUserData = users.getUserData(username);

  if (!existingUserData) {
    users.addUserData(username, transactions.makeTransactionsList());
  }

  res.cookie('sid', sid);
  const transactionsList = users.getUserData(username);
  const list = transactionsList.getTransactions();

  res.json(list);
}


const logoutService = (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';

  if (sid) {
    res.clearCookie('sid');
  }

  if (username) {
    sessions.deleteSession(sid);
  }

  res.json({ username });
}


const getTransactionsService = (req, res) => {
  const username = getSessions(req, res);
  if (!username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }

  res.json(users.getUserData(username).getTransactions());
}


const addTransactionsService = (req, res) => {
  const username = getSessions(req, res);
  if (!username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }

  const { item, amount } = req.body;

  if (!item || !amount) {
    res.status(400).json({ error: 'required-transaction' });
    return;
  }

  const transactionsList = users.getUserData(username);
  const id = transactionsList.addTransaction({ item, amount });
  res.json(transactionsList.getTransaction(id));
}


const deleteTransactionsService = (req, res) => {
  const username = getSessions(req, res);
  if (!username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }

  const { id } = req.params;
  const transactionList = users.getUserData(username);
  const exists = transactionList.contains(id);
  if (exists) {
    transactionList.deleteTransaction(id);
  }
  res.json({ message: exists ? `transaction ${id} deleted` : `transaction ${id} did not exist` });
}


module.exports = {
  getSessions,
  checkSessionsService,
  loginService,
  logoutService,
  getTransactionsService,
  addTransactionsService,
  deleteTransactionsService
}