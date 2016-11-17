var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: [
		'babel-polyfill',
		'./src/index.jsx'
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ['babel']
			}
		]
	},
	resolve: {
		moduleDirectories: ['node_modules', 'src'],
		extensions: ['', '.js', '.jsx']
	},
	output: {
		path: path.join(__dirname, 'docs'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new CopyWebpackPlugin([
			{from: 'dist/index.html'},
			{from: 'dist/index.css'}
		]),
		new webpack.DefinePlugin({
		    API_URL_ROOT: JSON.stringify('https://numbers-up-server.herokuapp.com')
		})
	]
};
