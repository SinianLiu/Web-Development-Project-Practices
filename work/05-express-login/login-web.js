const loginWeb = {

  dataPage: function (username, word) {
    return `
      <!doctype html>
      <html>
        <head>
          <link rel="stylesheet" href="style.css">
          <title>Home Page</title>
        </head>
        <body>
          <div id=data-page">
            <div class="data-details">
              <p>Username: <span>${username}</span></p>
              <p>Word: <span>${word}</span></p>
            </div>  
            <div class="data-update">
              <form action="/change" method="POST">
                <label for="word">Change Your Word:</label>
                <input id="word" name="word">
                <button type="submit">Change</button>
              </form>
            </div> 
            <div class="logout">
              <form action="/logout" method="POST">
                <button type="submit">Logout</button>
              </form>          
            </div>              
          </div>
        </body>
      </html>
    `
  },

  loginPage: function () {
    return `
    <!doctype html>
    <html>
      <head>
        <link rel="stylesheet" href="style.css">
        <title>Home Page</title>
      </head>
      <body>
        <div class="login-page">
          <form action="/login" method="POST">
            <label for="username">Enter User Name:</label>
            <input class="username" id="username" name="username"/>
            <button type="submit">Login</button>
          </form>
        </div>
      </body>
    </html>
    `
  },

  loginFailPage: function () {
    return `
    <!doctype html>
    <html>
      <head>
        <link rel="stylesheet" href="style.css">
        <title>Login Failed</title>
      </head>
      <body>
        <div class="login-failed">
          <p>Login Failed! Please Enter a valid name with only letters and numbers! 'Dog' is not allowed!</p>
          <p><a href="/">Press here to login again.</a></p>
        </div>
      </body>
    </html>
    `
  }
}

module.exports = loginWeb;