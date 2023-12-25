const sessions = {};
const words = {};


function checkUserName (username) {
  const regex = /^[a-zA-Z0-9]+$/;
  if (!username || !username.match(regex) || username === 'dog') {
    return false;
  }
  return true;
};


const login = {
  sessions,
  words,
  checkUserName
};

module.exports = login;