import { createContext, useReducer, useEffect } from 'react';
import { reducer, initialState } from './reducer';
import {
  fetchLogin,
  fetchLogout,
  fetchTransactions,
  fetchDeleteTransactions,
  fetchAddTransactions,
  fetchSession,
} from '../utils/services';
import { ACTIONS, CLIENT, SERVER } from '../utils/constants';

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function onLogin(username) {
    dispatch({ type: ACTIONS.START_LOADING_TRANSACTION });
    fetchLogin(username)
      .then((transactions) => {
        dispatch({ type: ACTIONS.LOG_IN, username });
        dispatch({
          type: ACTIONS.REPLACE_TRANSACTIONS,
          transactions: transactions,
        });
      })
      .catch((err) => {
        dispatch({ type: ACTIONS.REPORT_ERROR, error: err?.error });
      });
  }

  function onLogout() {
    dispatch({ type: ACTIONS.LOG_OUT });
    fetchLogout().catch((err) => {
      dispatch({ type: ACTIONS.REPORT_ERROR, error: err?.error });
    });
  }

  function onRefresh() {
    dispatch({ type: ACTIONS.START_LOADING_TRANSACTION });
    fetchTransactions()
      .then((transactions) => {
        dispatch({ type: ACTIONS.REPLACE_TRANSACTIONS, transactions });
      })
      .catch((err) => {
        if (err?.error === SERVER.AUTH_MISSING) {
          dispatch({ type: ACTIONS.LOG_OUT });
          return;
        }
        dispatch({ type: ACTIONS.REPORT_ERROR, error: err?.error });
      });
  }

  function deleteTransaction(id) {
    dispatch({ type: ACTIONS.START_LOADING_TRANSACTION });
    fetchDeleteTransactions(id)
      .then(() => {
        return fetchTransactions();
      })
      .then((transactions) => {
        dispatch({ type: ACTIONS.REPLACE_TRANSACTIONS, transactions });
      })
      .catch((err) => {
        if (err?.error === SERVER.AUTH_MISSING) {
          dispatch({ type: ACTIONS.LOG_OUT });
          return;
        }
        dispatch({ type: ACTIONS.REPORT_ERROR, error: err?.error });
      });
  }

  function addTransaction(transaction) {
    fetchAddTransactions(transaction)
      .then((transaction) => {
        dispatch({ type: ACTIONS.ADD_TRANSACTION, transaction });
      })
      .catch((err) => {
        if (err?.error === SERVER.AUTH_MISSING) {
          dispatch({ type: ACTIONS.LOG_OUT });
          return;
        }
        dispatch({ type: ACTIONS.REPORT_ERROR, error: err?.error });
      });
  }

  function checkForSession() {
    fetchSession()
      .then((session) => {
        dispatch({ type: ACTIONS.LOG_IN, username: session.username });
        return fetchTransactions();
      })
      .catch((err) => {
        if (err?.error === SERVER.AUTH_MISSING) {
          return Promise.reject({ error: CLIENT.NO_SESSION });
        }
        return Promise.reject(err);
      })
      .then((transactions) => {
        dispatch({ type: ACTIONS.REPLACE_TRANSACTIONS, transactions });
      })
      .catch((err) => {
        if (err?.error === CLIENT.NO_SESSION) {
          dispatch({ type: ACTIONS.LOG_OUT });
          return;
        }
        if (err?.error === SERVER.AUTH_MISSING) {
          return;
        }
        dispatch({ type: ACTIONS.REPORT_ERROR, error: err?.error });
      });
  }

  useEffect(() => {
    checkForSession();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        deleteTransaction,
        addTransaction,
        onLogin,
        onLogout,
        onRefresh,
        checkForSession,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

