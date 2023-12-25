const uuid = require('uuid').v4;

const id1 = uuid();
const id2 = uuid();

const messages = {

  [id1]: {
    id: id1,
    message: 'hello',
    username: 'stella',
  },
  [id2]: {
    id: id2,
    message: 'hi',
    username: 'lily',
  },
};

const contains = (id) => { return !!messages[id]; }

const getMessages = () => { return messages; }

const addMessage = (message, username) => {
  const id = uuid();
  messages[id] = {
    id,
    message,
    username,
  };
  return id;
}


module.exports = {
  contains,
  getMessages,
  addMessage
};
