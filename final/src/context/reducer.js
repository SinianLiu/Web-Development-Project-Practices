import { LOGIN_STATUS } from "../utils/constants"
import { ACTIONS } from '../utils/constants';


export const initialState = {
  transactions: {},
  error: '',
  username: '',
  loginStatus: LOGIN_STATUS.NOT_LOGGED_IN,
  isTransactionPending: false,
};


export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.id)
      }

    case ACTIONS.ADD_TRANSACTION:
      return {
        ...state,
        transactions: {
          ...state.transactions,
          [action.transaction.id]: action.transaction
        }
      }

    case ACTIONS.REPLACE_TRANSACTIONS:
      return {
        ...state,
        error: '',
        isTransactionPending: false,
        transactions: action.transactions,
      };

    case ACTIONS.START_LOADING_TRANSACTION:
      return {
        ...state,
        error: '',
        isTransactionPending: true,
      };

    case ACTIONS.LOG_IN:
      return {
        ...state,
        error: '',
        loginStatus: LOGIN_STATUS.IS_LOGGED_IN,
        username: action.username,
      };

    case ACTIONS.LOG_OUT:
      return {
        ...state,
        error: '',
        isTransactionPending: false,
        transactions: [],
        loginStatus: LOGIN_STATUS.NOT_LOGGED_IN,
        username: '',
      };

    case ACTIONS.REPORT_ERROR:
      return {
        ...state,
        error: action.error || 'ERROR',
      };

    default:
      return state
  }
}


