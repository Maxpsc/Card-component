var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: 'eval-source-map',
	entry: {
		index:__dirname + "/src/index.js",
	},
	output: {
		path: path.resolve(__dirname + "/build"),
		publicPath: "/build",
		filename: "[name].bundle.js",
	},
	module: {
		loaders: [ 
		//ES6-babel->ES5
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loaders: ['babel'],
		},
		//(s)css->css modules
		{
			test: /\.css$/,
			loader: 'style!css'
		},
		{
			test: /\.scss$/,
			loader: 'style!css!sass'
		}]
	},
	postcss: [
		require('autoprefixer')
	],
	//插件
	plugins: [
		new webpack.BannerPlugin('This file is created by Psc'),
		new webpack.optimize.UglifyJsPlugin({
			compress:{
				warnings: false
			}
		})
	],
}