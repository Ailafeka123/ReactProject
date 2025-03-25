const path = require('path');
const { text } = require('stream/consumers');
module.exports = {
    entry:{
        index:'./src/index.js',
    },
    output:{
        filename:'bundle.js',
        path:path.resolve('./build'),
    },
    module:{
        rules:[
            {
                test:/.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            '@babel/preset-react',
                            '@babel/preset-env'
                        ],  
                    },
                },
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                use:[
                    {
                        loader:'image-webpack-loader',
                        options:{
                            mozjpeg:{
                                progressive: true,
                                quality:75, //JPEG壓縮
                            },
                            optipng:{
                                enabled:true,
                            },
                            pngquant:{
                                quality:[0.65, 0.9],//PNG壓縮
                                speed:4,
                            },
                            gifsicle:{
                                interlaced:false,
                            },
                            svgo:{
                                plugins:[
                                    {
                                        removeViewBox:false,
                                    },
                                ],
                            },
                        },
                    },
                ],
            },
        ],
    },
    devServer:{
        static:{
            directory: path.join(__dirname,'./build'),
        },
        port: 8080,
    },
    mode: 'development'
};