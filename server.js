var express = require('express');
var app = express();
const PORT = 3000;

var middleware = require ('./middleware.js');

// app.get('/', function(req, res) {
// 	res.send('Hello Express!');
// });

// app.use(middleware.requireAuthentication);

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication ,function(req, res) {
	res.send('This is all about us!!');
});

app.use(express.static(__dirname+'/public'));

// console.log(__dirname);

app.listen(PORT, function () {
	console.log('Express server started on port:' + PORT);
});

