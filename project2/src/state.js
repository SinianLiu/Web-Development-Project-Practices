import { MESSAGES } from './constants';

const state = {
  messages: {},
  sessions: {},
  isLoggedIn: false,
  isLoginPending: false,
  isMessagePending: false,
  error: '',
};

export function waitOnLogin () {
  state.isLoggedIn = false;
  state.isLoginPending = true;
  state.messages = {};
  state.sessions = {};
  state.error = '';
}

export function login () {
  state.isLoggedIn = true;
  state.isLoginPending = false;
  state.error = '';
}

export function logout () {
  state.isLoggedIn = false;
  state.isLoginPending = false;
  state.messages = {};
  state.sessions = {};
  state.error = '';
}

export function waitOnMessages () {
  state.messages = {};
  state.isMessagePending = true;
  state.error = '';
}

export function setMessages (messages) {
  state.messages = messages;
  state.isMessagePending = false;
  state.error = '';
}

export function setSessions (sessions) {
  state.sessions = sessions;
  state.isMessagePending = false;
  state.error = '';
}


export function addMessage (message) {
  const { id } = message;
  state.messages[id] = message;
  state.error = '';
}


export function setError (error) {
  if (!error) {
    state.error = '';
    return;
  }
  state.error = MESSAGES[error] || MESSAGES.default;
}

export default state;

