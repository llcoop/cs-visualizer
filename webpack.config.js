"use strict";
const path = require("path"),
	HtmlWebpackPlugin = require("html-webpack-plugin"),
	MiniCssExtractPlugin = require("mini-css-extract-plugin"),
	CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// Get the .env
//const envPath = path.join(__dirname, "..", ".env");
//require("dotenv").config({ path: envPath });

// Build paths
const entry = path.join(__dirname, "src", "index.jsx");
const template = path.join(__dirname, "src", "index.html");
const outputPath = path.resolve(__dirname, "build");

// Construct webpack vars based on .env
const mode = process.env?.NODE_ENV ?? "development";
const port = process.env?.CLIENT_PORT ?? 8080;

module.exports = {
	mode,
	entry,
	devServer: {
		client: {
			logging: "verbose", // Log everything
			overlay: {
				// Only show errors
				errors: true,
				warnings: false,
			},
			reconnect: 5, // Reconnect 5 times before failing
		},
		compress: true, // Compress files to speedup compilations
		historyApiFallback: true, // Fallback for router
		hot: true, // Enable hot module loading
		port,
	},
	cache: {
		type: "memory",
		cacheUnaffected: true, // Only cache unchanged files
	},
	output: {
		filename: "bundle.[fullhash].js",
		path: outputPath, // Output to build folder
	},
	plugins: [
		new HtmlWebpackPlugin({
			template, // Use index.html as: base
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css",
		}),
	],
	resolve: {
		modules: [__dirname, "src", "node_modules"],
		extensions: ["*", ".webpack.js", ".web.js", ".js", ".jsx"],
	},
	module: {
		rules: [
			{
				// JavaScript
				test: /\.jsx?$/,
				exclude: /\.node_modules/,
				loader: require.resolve("babel-loader"),
			},
			{
				// SASS/SCSS
				test: /\.(s[ac]|c)ss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
			// {
			//   // Assets
			//   test: /\.png|svg|jpg|gif$/,
			//   use: ["file-loader"],
			// },
			{
				// Assets
				test: /\.png|svg|jpg|gif$/,
				type: "asset/resource",
			},
		],
	},
	optimization: {
		minimizer: [new CssMinimizerPlugin()],
	},
	experiments: {
		cacheUnaffected: true,
	},
};
