

function render ({ state, appEl }) {
  const html = `
      ${generateStatusHtml(state)}
      ${generateLoginHtml(state)}
      ${generateContentHtml({ state })}
  `;
  appEl.innerHTML = html;
}


export function renderMessages ({ state, appEl }) {
  const userList = appEl.querySelector('.users');
  const messagesEl = appEl.querySelector('.messages');

  userList.innerHTML = generateUsersHtml(state);
  messagesEl.innerHTML = generateMessagesHtml(state);
}


function generateStatusHtml (state) {
  return `
      <div class="status">${state.error}</div>
  `;
}


function generateLoginHtml (state) {
  if (state.isLoginPending) {
    return `
      <p class="status">Loading user...</p>
    `
  }
  if (state.isLoggedIn) {
    return ``;
  }

  return `
      <div class="login">
        <form class="login__form" action="#/login">
          <label>Username: </label>
          <input class="login__username" value="">
          <button class="login__button" type="submit">Login</button>
        </form>
      </div>
  `;
}


function generateContentHtml ({ state }) {
  if (!state.isLoggedIn) {
    return ``;
  }
  if (state.isTodoPending) {
    return `
      <div class="content">
        ${generateControlsHtml(state)}
        <p class="status">Loading Messages...</p>
      </div>
    `;
  }
  return `
      <div class="left-side">
        <h2>Users:</h2>
        <ul class="users">${generateUsersHtml(state)}</ul>
        ${generateControlsHtml()}
      </div>
      <div class="right-side">
        <h2>Messages:</h2>
        <ul class="messages">${generateMessagesHtml(state)}</ul>  
        ${generateAddMessageHtml()}
      </div>
  `;
}


function generateUsersHtml (state) {
  const usernames = Object.values(state.sessions)
    .map(user => user.username);

  const uniqueUsernames = [...new Set(usernames)];

  const usersHtml = uniqueUsernames.map(username => {
    return `
      <li class="user">
        <p>${username}</p>
      </li>
      `;
  }).join('') || ``;
  return usersHtml;
}


function generateMessagesHtml (state) {
  const messagesHtml = Object.values(state.messages).map(data => {
    const { message, username } = data;
    return `
      <li class="message">
        <p class="username">${username}: </p>
        <p class="message__text">${message}</p>
      </li>
      `;
  }).join('') || ``;
  return messagesHtml;
}



function generateAddMessageHtml () {

  return `
    <form class="add__form" action="#/add">
      <input class="add__message">
      <button type="submit" class="add__button"  disabled>Add</button>
    </form>
  `;
}


function generateControlsHtml () {
  return `
    <div class="controls">
      <button class="controls__logout">Logout</button>
    </div>
  `;
}



export default render

