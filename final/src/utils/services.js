function fetchAPI (endpoint, options) {
  return fetch(endpoint, options)
    .catch(() => Promise.reject({ error: 'networkError' }))
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      return response.json()
        .catch(err => Promise.reject({ error: err }))
        .then(resJson => {
          return Promise.reject({ error: resJson.error });
        });
    });
}

export function fetchAddTransactions ({ item, amount }) {
  return fetchAPI('/api/transactions', {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json',
    }),
    body: JSON.stringify({ item, amount }),
  });
}

export function fetchDeleteTransactions (id) {
  return fetchAPI(`/api/transactions/${id}`, {
    method: 'DELETE',
  });
}


export function fetchTransactions () {
  return fetchAPI('/api/transactions ');
}

export function fetchSession () {
  return fetchAPI('/api/sessions', {
    method: 'GET',
  });
}

export function fetchLogout () {
  return fetchAPI('/api/sessions', {
    method: 'DELETE',
  });
}

export function fetchLogin (username) {
  return fetchAPI('/api/sessions', {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify({ username }),
  });
}