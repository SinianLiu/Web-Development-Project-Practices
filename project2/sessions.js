const uuid = require('uuid').v4;

const sid1 = uuid();
const sid2 = uuid();

const sessions = {
  sid1: { username: "stella" },
  sid2: { username: "lily" },
};

function addSession (username) {
  const sid = uuid();
  sessions[sid] = {
    username,
  };
  return sid;
};

function getSessionUser (sid) {
  return sessions[sid]?.username;
}

function deleteSession (sid) {
  delete sessions[sid];
}

function getSessions () {
  return sessions;
}

module.exports = {
  addSession,
  deleteSession,
  getSessionUser,
  getSessions
};
