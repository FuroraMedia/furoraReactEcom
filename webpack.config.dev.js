var path = require('path');
var webpack = require('webpack');

module.exports = {
	debug: true,
	devtool: 'cheap-module-eval-source-map',
	noInfo: false,
	entry: [
		'webpack-hot-middleware/client?reload=true',
		'./src/index.js'],
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/static/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	resolve: {
		modulesDirectories: ['node_modules']
	},
	module: {

		// preLoaders: [
    //   {
    //     test: /\.js$/,
    //     loader: 'eslint-loader',
    //     exclude: /node_modules/
    //   }
    // ],

		loaders: [
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass']
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
    		test: /\.(jpe|jpg|png|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
    		loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
			}
		]
	}
}
