var express = require('express');
var app = express();


app.use('/nadiaservices',express.static(__dirname + '/public'));

app.listen(8080);
