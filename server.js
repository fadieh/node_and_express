var express = require('express');
var app = express();

app.get('/', function(req, res) {
	console.log("Incoming request: (" + req.method + ") " + req.url);
	res.send("Hello World");
});

app.get('*', function() {
	console.log("Incoming ");
	res.send("route does not exist");
});

app.listen(3000, function() {
	console.log('listening on port 3000');
});