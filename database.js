const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin0000@ds013320.mlab.com:13320/testing', { useNewUrlParser: true });

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error: "'));

db.once('open', function () {
    console.log("Database is Connected!");
    return db;
});