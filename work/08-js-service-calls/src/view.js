
export default function render (rootEl, state) {
  const { username, storedWord } = state.userData;
  if (!username && !storedWord) {
    rootEl.innerHTML = `
      <div class="login">
        <label for="username">Enter User Name:</label>
        <input type="text" class="username" id="username"/>
        <button class="button login-button">Login</button>
      </div>
    `
  }
  else {
    rootEl.innerHTML = `
      <div class="data-container">
        <div class="data-details">
          <p>Username: <span>${username}</span></p>
          <p>Word: <span>${storedWord}</span></p>
        </div>  

        <div class="data-update">
          <label for="word">Change Your Word:</label>
          <input type="text" class="word" id="word">
          <button class="button change-button">Change</button>
        </div> 

        <div class="logout">       
          <button class="button logout-button">Logout</button>     
        </div>              
      </div>
    `
  }

}

