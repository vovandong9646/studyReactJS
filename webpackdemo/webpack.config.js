const path = require("path");
const webpack = require('webpack');

const VENDOR_LIB = [
	"axios",
    "ejs",
    "express",
    "react",
    "react-dom",
    "react-redux",
    "react-router-dom",
    "redux",
    "redux-thunk"
];

module.exports = {
	entry : {
		bundle: "./src/index.js"
		vendor: VENDOR_LIB
	},
	output : {
		path: path.join(__dirname,"public/dist"),
		filename : "[name].js"
	},
	module: {
		rules : [
			{
				test : /\.js$/,
				use : "babel-loader",
				exclude : "/node_modules/"
			},
			{
				use: [
					"css-loader",
					"style-loader"
				],
				test: /\.css$/
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
		    name: "vendor"
		    minChunks: Infinity,
		})
	]
};