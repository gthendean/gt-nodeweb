/*jslint node:true */
"use strict";

/**
 * Created on 7/1/2014.
 */
var http = require('http');
var port = process.env.PORT || 8080;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);
console.log('Listening to port ' + port + '...');