const webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        filename: './bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            GOOGLE_MAPS_CLIENT_KEY: process.env.NODE_ENV === 'production' ? `${process.env.GOOGLE_MAPS_KEY}` : 'mykeyhardcoded'
        })
    ]
};