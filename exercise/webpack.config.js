module.exports = {
    entry: "./app/js/app",
    devtool: "eval",
    output: {
        path: __dirname + "/app/build/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    }
};