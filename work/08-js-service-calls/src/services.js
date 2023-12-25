export function fetchLogin (username) {
  return fetch('/api/session/', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ username }),
  })
    .catch(() => Promise.reject({ error: 'network-error' }))
    .then(response => {
      if (!response.ok) {
        return response.json().then(err => Promise.reject(err));
      }
      return response.json();
    });
}


export function fetchSession () {
  return fetch('/api/session')
    .catch(() => Promise.reject({ error: 'network-error' }))
    .then(response => {
      return response.json();
    })
}


export function fetchUserData () {
  return fetch('/api/word')
    .catch(() => Promise.reject({ error: 'network-error' }))
    .then((response) => {
      return response.json();
    });
}


export function fetchNewWord (word) {
  return fetch('/api/word', {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ word }),
  })
    .catch(err => Promise.reject({ error: 'network-error' }))
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        return response.json().then(err => Promise.reject(err))
      }
    })
}


export function fetchDelete () {
  return fetch('/api/session', {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    },
  })
    .catch(err => Promise.reject({ error: 'network-error' }))
    .then(response => {
      return response.json();
    })
}


