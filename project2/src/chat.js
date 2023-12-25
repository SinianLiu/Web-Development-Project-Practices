import { SERVER, CLIENT } from './constants';
import state, {
  login,
  logout,
  setMessages,
  setSessions,
  setError,
} from './state';

import {
  fetchMessages,
  fetchSession,
} from './services';

import render from './render';

import {
  addAbilityToLogin,
  addAbilityToLogout,
  addAbilityToAddMessage,
  enableButton,
  addAbilityToRefresh
} from './listeners';



const appEl = document.querySelector('#app');

render({ state, appEl });

addAbilityToLogin({ state, appEl });
addAbilityToLogout({ state, appEl });
addAbilityToAddMessage({ state, appEl });
enableButton({ appEl })
checkForSession();

setInterval(() => addAbilityToRefresh({ state, appEl }), 5000);


//////////

function checkForSession () {
  fetchSession()
    .then(() => {
      login();
      render({ state, appEl });
      return fetchMessages();
    })
    .catch(err => {
      if (err?.error === SERVER.AUTH_MISSING) {
        return Promise.reject({ error: CLIENT.NO_SESSION })
      }
      return Promise.reject(err);
    })
    .then(response => {
      const { allMessages, allSessions } = response;
      setMessages(allMessages);
      setSessions(allSessions);
      render({ state, appEl });
    })
    .catch(err => {
      if (err?.error == CLIENT.NO_SESSION) {
        logout();
        render({ state, appEl });
        return;
      }

      setError(err?.error || 'ERROR');
      render({ state, appEl });
    });
}

