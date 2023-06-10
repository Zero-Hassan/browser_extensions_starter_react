const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");


module.exports = {
    entry: {
        content: path.resolve(__dirname,"..","components-builder/src/extensionExports/content/content-script-index.js"),
        background:  path.resolve(__dirname,"..","components-builder/src/extensionExports/background/background-script-index.js"),
        popup: path.resolve(__dirname,"..","components-builder/src/extensionExports/popup/popup-script-index.js"),
        displayPage:path.resolve(__dirname,"..","components-builder/src/extensionExports/page/page-script-index.js")
        
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
                from: "./popup",
                to: ".",
                globOptions: {
                    ignore: ["**/*.js"],
                },
            },
            {
                from: "./page",
                globOptions: {
                    ignore: ["**/*.js"],
                },
                to: "."
            },
            {
                from: "./assets",
                to: "."
            }
        ]
    })],
    watch: true
};