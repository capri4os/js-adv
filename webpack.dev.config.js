const { merge } = require('webpack-merge')
const base = require('.webpack.config.js')

module.exports = merge(base, {
    publicPath: '/js'
},
    devServer: {
    publicPath: '/js',
    contentBase: './public',
    port: 8080,
    host: 'localhost',
    hot: true,
})