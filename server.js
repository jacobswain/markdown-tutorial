var http = require('http');
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'))
var server = http.createServer(app);
server.listen(1120);
console.log('server started: ' + new Date().toString())
