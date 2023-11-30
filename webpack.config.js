const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        loaders: [
            {
                test: /\.svg$/,
                loader: "file-loader"
            }
        ]
    }
};