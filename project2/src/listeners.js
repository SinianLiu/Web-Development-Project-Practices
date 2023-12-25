import { SERVER } from './constants';
import {
  fetchLogin,
  fetchLogout,
  fetchMessages,
  fetchAddMessage,
} from './services';
import {
  waitOnMessages,
  waitOnLogin,
  setMessages,
  setSessions,
  setError,
  login,
  logout,
  addMessage,
} from './state';


import render, { renderMessages } from './render';


export function addAbilityToLogin ({ state, appEl }) {
  appEl.addEventListener('submit', (e) => {
    if (!e.target.classList.contains('login__form')) {
      return;
    }
    e.preventDefault();

    const username = appEl.querySelector('.login__username').value;

    waitOnLogin();
    render({ state, appEl });
    fetchLogin(username)
      .then(response => {
        const { allMessages, allSessions } = response;
        login();
        setMessages(allMessages);
        setSessions(allSessions);
        render({ state, appEl });
      })
      .catch(err => {
        setError(err?.error || 'ERROR');
        render({ state, appEl });
      });
  });
}



export function addAbilityToLogout ({ state, appEl }) {
  appEl.addEventListener('click', (e) => {
    if (!e.target.classList.contains('controls__logout')) {
      return;
    }
    logout();
    render({ state, appEl });
    fetchLogout()
      .catch(err => {
        setError(err?.error || 'ERROR');
        render({ state, appEl });
      });
  });
}



export function addAbilityToRefresh ({ state, appEl }) {
  if (state.isLoggedIn === false) {
    return;
  }

  waitOnMessages();
  fetchMessages()
    .then(response => {
      const { allMessages, allSessions } = response;
      setMessages(allMessages);
      setSessions(allSessions);

      renderMessages({ state, appEl });
    })
    .catch(err => {
      setError(err?.error || 'ERROR');
      render({ state, appEl });
    });
}


export function addAbilityToAddMessage ({ state, appEl }) {
  appEl.addEventListener('submit', (e) => {
    if (!e.target.classList.contains('add__form')) {
      return;
    }

    const message = appEl.querySelector('.add__message').value;

    fetchAddMessage(message)
      .then(response => {
        addMessage(response);
        render({ state, appEl });
      })
      .catch(err => {
        setError(err?.error || 'ERROR');
        render({ state, appEl });
      });
  });
}


export function enableButton ({ appEl }) {

  appEl.addEventListener('input', (e) => {
    const messageInput = appEl.querySelector('.add__message');
    const submitButton = appEl.querySelector('.add__button');
    if (!e.target.classList.contains('add__message')) {
      return;
    }
    if (messageInput.value.trim() === '') {
      submitButton.disabled = true;
    } else {
      submitButton.disabled = false;
    }
  });

}