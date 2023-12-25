import { MESSAGES } from '../utils/constants';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Status = () => {
  const { error } = useContext(GlobalContext);

  const message = MESSAGES[error] || MESSAGES.default;
  return <h2 className="status">{error && message}</h2>;
};

export default Status;

