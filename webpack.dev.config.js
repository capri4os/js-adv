const merge = require('webpack-merge')
const base = require('./webpack.config')

module.exports = merge(base, {
    devServer: {
        publicPath: '/js',
        contentBase: './public/', // говорит, что все, кроме результата сборки будет браться из данной папки
        port: 8080,
        host: 'localhost',
        hot: true, // включает изменения на странице без перезагрузки
    },
})
