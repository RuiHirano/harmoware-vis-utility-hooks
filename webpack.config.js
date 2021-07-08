// NOTE: To use this example standalone (e.g. outside of deck.gl repo)
// delete the local development overrides at the bottom of this file

// avoid destructuring for older Node version support
const resolve = require('path').resolve;
const webpack = require('webpack');

module.exports = {
    entry: resolve(__dirname, "src/index.ts"),
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)/,
                exclude: /node_modeules/,
                use: [
                    'ts-loader',
                ],
            },
        ],
    },
}