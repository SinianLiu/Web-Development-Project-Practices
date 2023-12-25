
export const LOGIN_STATUS = {
  PENDING: 'pending',
  NOT_LOGGED_IN: 'notLoggedIn',
  IS_LOGGED_IN: 'loggedIn',
};


export const SERVER = {
  AUTH_MISSING: 'auth-missing',
  AUTH_INSUFFICIENT: 'auth-insufficient',
  REQUIRED_USERNAME: 'required-username',
  REQUIRED_TRANSACTION: 'required-transaction',
  TRANSACTION_MISSING: 'noSuchId',
};

export const CLIENT = {
  NETWORK_ERROR: 'networkError',
  NO_SESSION: 'noSession',
};

export const MESSAGES = {
  [CLIENT.NETWORK_ERROR]: 'Trouble connecting to the network.  Please try again',
  [SERVER.AUTH_INSUFFICIENT]: 'Your username/password combination does not match any records, please try again.',
  [SERVER.REQUIRED_USERNAME]: 'Please enter a valid (letters and/or numbers) username',
  [SERVER.REQUIRED_TRANSACTION]: 'Please enter the transaction to do',
  default: 'Something went wrong.  Please try again',
};


export const ACTIONS = {
  LOG_IN: 'logIn',
  LOG_OUT: 'logOut',
  START_LOADING_TRANSACTION: 'startLoadingTransactions',
  REPLACE_TRANSACTIONS: 'replaceTransactions',
  REPORT_ERROR: 'reportError',
  DELETE_TRANSACTION: 'deleteTransaction',
  ADD_TRANSACTION: 'addTransaction',
};


