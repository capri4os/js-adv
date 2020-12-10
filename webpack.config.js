const path = require('path')
const VueLoader = require('vue-loader')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './src/shop.js',
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'shop.js'
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    { loader: 'vue-loader', }
                ]
            },
            {
                test: /\.js$/,
                use: [
                    { loader: 'babel-loader' },
                ]
            },
            // {
            //     test: /\.[s]?css$/,
            //     use: [
            //         'style-loader',
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 modules: true,
            //             }
            //         },
            //         'sass-loader',
            //     ]
            // },
            {
                test: /\.css$/,
                use: [
                  'style-loader', // инжектит стили из js модуля в тэги <style></style>
                  {
                    loader: 'css-loader',
                    options: {
                      modules: true,
                    }
                  }, // трансформирует css файл в js модуль
                ]
              },
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}