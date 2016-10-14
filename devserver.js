var path = require('path');
var express = require('express');
var webpack = require('webpack');
var compression = require('compression');
var config = require('./webpack.config.dev');
// var config = require('./webpack.config.prod');

var port = 7000;
var app = express();
//app.use(compression());

var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, './src/index.html'));
});

app.use('/static', express.static(__dirname + './src'));

app.listen(port, 'localhost', function(err) {
	if (err) {
		console.log(err);
		return;
	}

	console.log('Listening at http://localhost:' + port);
});
