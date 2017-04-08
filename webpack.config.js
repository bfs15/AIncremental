var webpack = require('webpack');
var path = require('path');

var SRC_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'build');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
	entry: SRC_DIR + '/index.jsx',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				include: SRC_DIR,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.css']
	},
	plugins: [
		new ExtractTextPlugin('styles.css'),
	]
};

module.exports = config;
