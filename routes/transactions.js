'use strict' var express = require('express');
var app = express.Router();
var request = require('request');
var call = require('../functions');

// TX //

app.post('/Add_tx', function (req, res) {
    const transaction = {
        "txID": "12694266",
        "NID": "1368428",
        "ClientID": "123",
        "type": "regular",
        "Destination": "12394484", // Destination: ClientID
        "amount": "1297", // DT
        "Date_operation": "02/08/2021",
        "Libelle": ""
    }

    res.send(transaction);

});

// Sending Transaction ID to CBS to retrieve the full tx and sending it back to URI: tx_fetch
app.post('/tx', function (req, res) {
    const transaction = {
        "txID": "12694266"
    }

    res.send(transaction);
});

app.get('tx_fetch', function (req, res) {

    const transaction = req.body;
    // fetch transaction to front

});


// ACCOUNT //

app.post('/Add_account', function (req, res) {
    const account = {
        "ClientID": "12694266",
        "NID": "1368428",
        "Name": "123",
        "Lastname": "regular",
        "Job": "12394484",
        "Date_operation": "02/08/2021"
    }

    res.send(account);

});


// Sending Account ID to CBS to retrieve the full Account and sending it back to URI: tx_fetch
app.get('/account', function (req, res) {
    const Account_ID = {
        "Acct_ID": "19712"
    }
    res.send(Account_ID);

});
app.get('account_fetch', function (req, res) {

    const account = req.body;
    // fetch Account to front

});

module.exports = app;
