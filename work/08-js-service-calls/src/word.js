
import { fetchLogin, fetchSession, fetchUserData, fetchNewWord, fetchDelete } from './services';
import render from './view';
import state from './state';


const rootEl = document.querySelector('#root');
const errorEl = document.querySelector('.error');


getSession();


rootEl.addEventListener('click', (e) => {

  if (e.target.classList.contains('login-button')) {
    const inputEl = document.querySelector('.username');
    const username = inputEl.value;

    fetchLogin(username)
      .catch(err => {
        if (err.error == 'network-error') {
          errorEl.innerHTML = `<p>Please check your network connection!</p>`;
          return;
        } else if (err.error == 'required-username') {
          errorEl.innerHTML = `<p>Please input a valid username!</p>`;
          return;
        } else if (err.error == 'auth-insufficient') {
          errorEl.innerHTML = `<p>Please do not input 'dog' as your username!</p>`;
          return;
        }
      })
      .then(() => {
        getUserData();
      })
  }


  if (e.target.classList.contains('change-button')) {
    const inputEl = document.querySelector('.word');
    const newWord = inputEl.value;

    fetchNewWord(newWord)
      .catch(err => {
        if (err.error == 'auth-missing') {
          errorEl.innerHTML = `<p>You need to login first!</p>`;
          render(rootEl, '', '');
        } else if (err.error == 'invalid-word') {
          errorEl.innerHTML = `<p>Please input a valid word!</p>`;
        } else if (err.error == 'network-error') {
          errorEl.innerHTML = `<p>Please check your network connection!</p>`;
        } else if (err.error == 'required-word') {
          errorEl.innerHTML = `<p>Please input a word!</p>`;
        }
      })
      .then(response => {
        state.updateUserData(response);
        render(rootEl, state);
        errorEl.innerHTML = '';
      });
  }


  if (e.target.classList.contains('logout-button')) {
    fetchDelete()
      .catch(err => {
        if (err.error == 'network-error') {
          errorEl.innerHTML = `<p>Please check your network connection!</p>`;
          return;
        }
      })
      .then(() => {
        state.userData = {};
        render(rootEl, state);
        errorEl.innerHTML = '';
      });
  }
})


function getUserData () {
  fetchUserData()
    .catch(err => {
      if (err.error == 'network-error') {
        errorEl.innerHTML = `<p>Please check your network connection!</p>`;
        return;
      }
    })
    .then(response => {
      if (response.error) {
        render(rootEl, state);
        return;
      }

      state.updateUserData(response);
      render(rootEl, state);
      errorEl.innerHTML = '';
    })
}



function getSession () {
  fetchSession()
    .catch(err => {
      if (err.error == 'network-error') {
        errorEl.innerHTML = `<p>Please check your network connection!</p>`;
        return;
      }
    })
    .then(response => {
      if (response.error) {
        render(rootEl, state);
        return;
      }
      getUserData();
    })
}





