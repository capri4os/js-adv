const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const VueLoader = require('vue-loader')
const vueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'shop.js'
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: { loader: 'vue-loader' },
            },
            {
                test: /\.js$/,
                use: [
                    { loader: 'babel-loader' },
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'vue-style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        }
                    },
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
} 