var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'sourcemap',
	entry: [
		'./src/furoraEcom.js',
		'webpack-hot-middleware/src'],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},

	module: {
		loaders: [
			{
				test: /\.scss$/,
				loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
			},
			{
				test: /\.css/,
				loader: 'style!css'
			},
			{
				test: /\.js$/,
				loader: ['babel'],
				query: {
					presets: ['es2015', 'react']
				},
				exclude: ['/node_modules/', '/\.spec\.js/']
			},
			{
    		test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
    		loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
			}
		]
	}
}