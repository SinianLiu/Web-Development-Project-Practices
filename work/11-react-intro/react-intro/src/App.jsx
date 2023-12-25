import { useState } from 'react';

import './App.css';
import User from './User';
import Login from './Login';
import Message from './Message';
import Game from './Game';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [msg, setMsg] = useState('');

  function onLogin(username) {
    setUsername(username);
    setIsLoggedIn(true);
  }

  function onMsg(msg) {
    setMsg(msg);
  }

  function onLogout() {
    setIsLoggedIn(false);
    setMsg('');
  }

  return (
    <div className="app">
      {isLoggedIn ? (
        <>
          <User username={username} onLogout={onLogout} />
          <Game setMsg={onMsg} />
          <Message msg={msg} />
        </>
      ) : (
        <>
          <Login onLogin={onLogin} setMsg={onMsg} />
          <Message msg={msg} />
        </>
      )}
    </div>
  );
}

export default App;

