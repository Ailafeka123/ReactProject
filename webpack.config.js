const path = require('path');
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