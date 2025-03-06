const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join( __dirname, '/dist' ),
        filename: "bundle.js",
        publicPath: '/',
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [ "@babel/preset-env", "@babel/preset-react" ],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [ "style-loader", "css-loader", "postcss-loader" ],
            },
            {
                test: /\.svg$/,
                type: "asset/resource",
            },
        ]
    },
    resolve: {
        extensions: [ ".js", ".jsx" ]
    },
    plugins: [ new HtmlWebpackPlugin( {
        template: "./public/index.html",
        inject: "body",
    } ), ],
    devServer: {
        static: "./dist",
        open: true,
        hot: true,
        port: 3000
    },
};
