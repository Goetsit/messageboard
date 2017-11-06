var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 5000;
var messages = require('./routes/message.js');

app.use(bodyParser.json()); 
app.use(express.static('public'));

app.use('/message', messages);

var mongoose = require('mongoose');

var databaseUrl = 'mongodb://localhost:27017/messageboard';

mongoose.connection.on('connected', function () {
    console.log('mongoose is connected!');
});

mongoose.connection.on('error', function () {
    console.log('mongoose connection failed');
});
mongoose.connect(databaseUrl);

app.listen(port, function () {
    console.log('Listening on port: ', port);
});