const path = require( "path" );
const HtmlWebpackPlugin = require( "html-webpack-plugin" );
const Dotenv = require( "dotenv-webpack" );

module.exports = {
    entry: "./src/index.js", // Entry file
    output: {
        path: path.resolve( __dirname, "dist" ),
        filename: "[hash].bundle.js",
        clean: true, // Clean dist folder before build
        publicPath: "/",
    },
    resolve: {
        alias: {
            "@/*": path.resolve( __dirname, "src/*" ),
        },
        extensions: [ ".jsx", ".js", ".js" ], // Resolve these file types
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Apply loader to TS/TSX files
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [ "@babel/preset-env", "@babel/preset-react" ],
                    },
                },
            },

            {
                test: /\.css$/, // Load CSS files
                use: [ "style-loader", "css-loader", "postcss-loader" ],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i, // Load images
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin( {
            template: "./public/index.html", // HTML template
        } ),
        new Dotenv(),
    ],
    devServer: {
        port: 3000,
        static: path.resolve( __dirname, "public" ), // Serve static file
        hot: true,
        historyApiFallback: true, // Support React Router
    },
    mode: "development", // Change to 'production' for production builds
};