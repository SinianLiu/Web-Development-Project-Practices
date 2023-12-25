import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';
import Loading from './Loading';

export const TransactionList = () => {
  const { transactions, isTransactionPending } = useContext(GlobalContext);

  const SHOW = {
    PENDING: 'pending',
    EMPTY: 'empty',
    SHOWED: 'showed',
  };

  let show;
  if (isTransactionPending) {
    show = SHOW.PENDING;
  } else if (!Object.keys(transactions).length) {
    show = SHOW.EMPTY;
  } else {
    show = SHOW.SHOWED;
  }

  return (
    <>
      {show === SHOW.PENDING && <Loading>Loading Transactions...</Loading>}
      <h3>History</h3>
      {show === SHOW.EMPTY && <p>No Items yet, add one!</p>}
      {show === SHOW.SHOWED && (
        <ul className="list">
          {Object.values(transactions).map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      )}
    </>
  );
};

export default TransactionList;

