

const express = require('express')
const app = express();

var bodyParser = require('body-parser'),
  
    path = require('path');

app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'client')));
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
	res.setHeader('Content-Type', 'application/json');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type,x-username,x-token');
	next();
};

app.use(allowCrossDomain);

app.get('/', function (req, res) {
   res.sendfile( __dirname + '/client/index.html');
})


app.listen(8001)
module.exports = app;	