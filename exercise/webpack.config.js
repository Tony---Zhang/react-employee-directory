module.exports = {
    entry: "./app/js/app",
    output: {
        path: __dirname + "/app/build/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loader: 'babel-loader',exclude: /node_modules/, query: {presets:['react']}}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    }
};