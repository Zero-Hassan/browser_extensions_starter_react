const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");


module.exports = {
    entry: {
        content: path.resolve(__dirname,"..","react-app/src/extensionExports/content/content-script-index.js"),
        background:  path.resolve(__dirname,"..","react-app/src/extensionExports/background/background-script-index.js"),
        popup: path.resolve(__dirname,"..","react-app/src/extensionExports/popup/popup-script-index.js"),
        displayPage:path.resolve(__dirname,"..","react-app/src/extensionExports/page/page-script-index.js")
        
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env',{ targets: "defaults" }], ['@babel/preset-react',{runtime:"automatic"}]]
                        }
                }
            }
        ]
    },
    optimization: {
        minimize: false
    },
    plugins: [new CopyPlugin({
        patterns: [
            {
                from: "./src/popup",
                to: ".",
                globOptions: {
                    ignore: ["**/*.js"],
                },
            },
            {
                from: "./src/page",
                globOptions: {
                    ignore: ["**/*.js"],
                },
                to: "."
            },
            {
                from: "./src/assets",
                to: "."
            }
        ]
    })],
    watch: true
};