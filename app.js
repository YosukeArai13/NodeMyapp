/*
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello Node World!!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
*/

var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");

});

var port = process.env.PORT || 3000;
server.listen(port);

console.log("Server running at http://localhost:%d", port);


