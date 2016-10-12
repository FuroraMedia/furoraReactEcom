var path = require('path');
var webpack = require('webpack');
//var ExtractTextPlugin = require(extract-text-webpack-plugin');

module.exports = {
	devtool: 'sourcemap',
	entry: [
		'./src/index.js',
		'webpack-hot-middleware/client'],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin('style.css', {
			allChunks: true
		})
	],
	resolve: {
		modulesDirectories: ['node_modules']
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
			// ,
			// {
    	// 	test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
    	// 	loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
			// }
		]
	}
}


// {
// 	test: /\.css/,
// 	loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
// },
// {
// 	test: /\.scss$/,
// 	loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
// },
