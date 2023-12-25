
const chatWeb = {
  chatPage: function (chat) {
    return `
      <!doctype html>
      <html>
        <head>
          <link rel="stylesheet" href="style.css">
          <title>Chat</title>
        </head>
        <body>
          <div id="chat-app">
            <div class="left-side">
              ${chatWeb.getUserList(chat)}
            </div>
            <div class="right-side">
                ${chatWeb.getMessageList(chat)}    
                ${chatWeb.getOutgoing(chat)}   
            </div> 
          </div>        
        </body>
      </html>
  `;
  },

  getMessageList: function (chat) {
    return `<ol class="messages">` +
      Object.values(chat.messages).map(message => `
    <li>
      <div class="message">
        <div class="sender-info">
          <img class="avatar" alt="avatar of amit" src="images/avatar-${message.sender}.jpg"/>
          <span class="username">${message.sender}</span>
        </div>
        <div class="sender-message"> 
          <p class="message-text">${message.text}</p>
        </div>
      </div>
    </li>
  `).join('') +
      `</ol>`;
  },
  getUserList: function (chat) {
    return `<ul class="users">` +
      Object.values(chat.users).map(user => `
      <li>
        <div class="user">
          <span class="username">${user}</span>
        </div>
      </li>
    `).join('') +
      `</ul>`;
  },
  getOutgoing: function () {
    return `
      <div class="outgoing">
        <form action="/chat" method="POST">
          <input class="username" name="username" value="stella" type="hidden"/>
          <input class="text" name="text" value="" placeholder="Enter message to send"/>
          <button type="submit">Send</button>
        </form>
      </div>
    `
  }
};
module.exports = chatWeb;
