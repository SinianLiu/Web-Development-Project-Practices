import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
  const [item, setItem] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const clearInput = () => {
    setItem('');
    setAmount(0);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      item,
      amount: +amount,
    };

    addTransaction(newTransaction);

    clearInput();
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="item">Text</label>
          <input
            id="item"
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            placeholder="Enter Item..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            ('-': expense, '+': income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;

