var express = require('express');
var app = express();
const PORT = 3000;

var middleware = {
	requireAuthentication: function(req, res, next) {
		console.log('private route hit!');
		next();
	},
	logger: function(req, res, next) {
		var reqDate = new Date().toString();
		console.log('Request: ' + reqDate + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
};

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

