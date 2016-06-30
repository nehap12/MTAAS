var express = require('express'),
var app = express();
var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var expressValidator = require('express-validator');
var mongo = require('mongodb');
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

app.use(session({ secret: 'ilovedeveloping' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


var path = require('path');
app.use(express.static(path.join(__dirname + 'public')));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/db_mtaas');
var db = mongoose.connection;

app.set('views', path.join(__dirname, 'views'));
/*app.engine('html', exphbs({defaultLayout: 'login'}));
app.set('view engine', 'html');*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: flase }));
app.use(cookieParser());


app.get('/', function(req, res) {
  res.sendFile(__dirname+ '/views/login.html');
});

app.listen(3006, function(){
  console.log('Listening on 3006');  
})