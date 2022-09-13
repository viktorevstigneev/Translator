const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.jsx',
	output: {
		path: path.join(__dirname, '/build'),
		publicPath: '/',
		filename: 'index.bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(js$|jsx$)/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /(\.css|\.scss)$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							useRelativePath: true,
							esModule: false,
						},
					},
				],
			},
			{
				test: /\.(ttf|eot|woff|woff2)$/,
				loader: 'file-loader',
				options: {
					useRelativePath: true,
					esModule: false,
				},
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './src/index.html',
		}),
	],
	devServer: {
		historyApiFallback: true,
		port: 8001,
	},
};
