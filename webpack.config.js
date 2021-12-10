const mode =
	process.env.NODE_ENV === "production" ? "production" : "development";
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	mode,
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.css$/,
				use: [
					"style-loader",
					{ loader: "css-loader", options: { importLoaders: 1 } },
					"postcss-loader",
				],
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: ["url-loader?limit=10000", "img-loader"],
			},
			// {
			// 	test: /\.less$/i,
			// 	use: ["style-loader", { loader: "less-loader" }],
			// },
		],
	},

	devtool: "source-map",

	devServer: {
		static: {
			directory: "/dist",
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html",
		}),
	],
};
