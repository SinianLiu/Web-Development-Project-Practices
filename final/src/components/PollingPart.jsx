import { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { LOGIN_STATUS } from '../utils/constants';
import Balance from './Balance';
import IncomeExpenses from './IncomeExpenses';
import TransactionList from './TransactionList';

const PollingPart = () => {
  const { loginStatus, onRefresh } = useContext(GlobalContext);

  useEffect(() => {
    let intervalId;
    if (loginStatus === LOGIN_STATUS.IS_LOGGED_IN) {
      intervalId = setInterval(onRefresh, 3000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [loginStatus]);

  return (
    <>
      <Balance />
      <IncomeExpenses />
      <TransactionList />
    </>
  );
};

export default PollingPart;

