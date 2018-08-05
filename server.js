const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const customersROutes = require('./Routes/customers');

// Requiring Database
require('./database.js');
app.use(function (req, res, next) {
    console.log('logged')
    next()
});

app.set('port', 4000);
app.use(bodyParser.json());

app.use(express.static(__dirname + '/Views'));
app.use(express.static(__dirname + '/Scripts'));


app.use('/customers', customersROutes);

app.get('/', function (req, res) {
    res.sendFile('index.html');
});

app.listen(app.get('port'), function () {
    console.log(`Server is running on ${app.get('port')}`);
});