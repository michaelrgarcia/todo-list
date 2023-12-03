const path = require("path");

module.exports = {
    entry: ["./src/index.js", "./src/imageLoader.js"],
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "./src/svgs/",
                            publicPath: "./src/svgs/",
                        },
                    },
                ],
            },
        ],
    },
};