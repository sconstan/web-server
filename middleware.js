var middleware = {

	requireAuthentication: function (req, res, next) {
		console.log('private route hit!');
		next();
	},
	logger: function(req, res, next) {
		var reqDate = new Date().toString();
		console.log('Request: ' + reqDate + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
};

module.exports = middleware;