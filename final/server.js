
const express = require('express');
const cookieParser = require('cookie-parser');
const services = require('./services');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cookieParser());
app.use(express.static('./dist'));
app.use(express.json());



// Sessions
app.get('/api/sessions', services.checkSessionsService);
app.post('/api/sessions', services.loginService);
app.delete('/api/sessions', services.logoutService);


// Transactions
app.get('/api/transactions', services.getTransactionsService);
app.post('/api/transactions', services.addTransactionsService);
app.delete('/api/transactions/:id', services.deleteTransactionsService);


app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

