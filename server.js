var express = require('express'),
app = express();

var path = require('path');
app.use('/', express.static(__dirname + '/'));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/db_mtaas');

app.get('/', function(req, res) {
  res.sendFile(__dirname+ '/public/login.html');
});

app.listen(3006, function(){
  console.log('Listening on 3006');  
})