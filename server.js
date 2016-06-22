var express = require('express'),
    app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname+ '/views/login.html');
});

app.listen(3006, function(){
  console.log('Listening on 3006');  
})