import Header from './components/Header';
import AddTransaction from './components/AddTransaction';

import './App.css';
import Status from './components/Status';
import Loading from './components/Loading';
import Controls from './components/Controls';
import LoginForm from './components/LoginForm';
import { LOGIN_STATUS } from './utils/constants';
import { GlobalContext } from './context/GlobalState';
import { useContext } from 'react';
import PollingPart from './components/PollingPart';

function App() {
  const { error, loginStatus } = useContext(GlobalContext);

  return (
    <>
      {error && <Status />}
      <Header />
      {loginStatus === LOGIN_STATUS.PENDING && (
        <Loading className="login__waiting">Loading user...</Loading>
      )}
      {loginStatus === LOGIN_STATUS.NOT_LOGGED_IN && <LoginForm />}
      {loginStatus === LOGIN_STATUS.IS_LOGGED_IN && (
        <div className="container">
          <PollingPart />
          <AddTransaction />
          <Controls />
        </div>
      )}
    </>
  );
}

export default App;

