
    const MiniCssExtractPlugin = require('mini-css-extract-plugin');
    const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
    const HtmlWebpackPlugin = require('html-webpack-plugin');

    const path = require('path');
    const outputPath = 'public_html';

    module.exports = {
        entry: {
            app: './src/app.js',
        },
        output: {
            path: path.resolve(__dirname, outputPath),
            filename: '[name].js',
        },
        module: {
            rules: [
                {
                    test: /\.(png|jpe?g|webp|mp4|svg|webmanifest)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'assets/[name][ext]'
                    },
                },
                {
                    test: /\.(scss|css)$/,
                    use: [MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    }, {
                        loader: "sass-loader",
                        options: {
                            // Prefer `dart-sass`
                            implementation: require.resolve("sass"),
                        },
                    },],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                hash: true,
                meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
                title: 'Tytuł strony głównej',
                templateParameters: {
                    robots: 'index, follow'
                },
                template: './src/html/index.html',
                minify: false,
                filename: './index.html' //relative to root of the application
            }),
//dodanie podstrony:
             new HtmlWebpackPlugin({
                 hash: true,
                 meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
                 title: 'Oferty',
                 templateParameters: {
                     robots: 'index, follow'
                 },
                 template: './src/html/oferty.html',
                 minify: false,
                 filename: './oferty.html' //relative to root of the application
             }),

             new HtmlWebpackPlugin({
                hash: true,
                meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
                title: 'Kontakt',
                templateParameters: {
                    robots: 'index, follow'
                },
                template: './src/html/kontakt.html',
                minify: false,
                filename: './kontakt.html' //relative to root of the application
            }),

            new HtmlWebpackPlugin({
                hash: true,
                meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
                title: 'Opis',
                templateParameters: {
                    robots: 'index, follow'
                },
                template: './src/html/opis.html',
                minify: false,
                filename: './opis.html' //relative to root of the application
            }),

            new HtmlWebpackPlugin({
                hash: true,
                meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
                title: 'Logowanie',
                templateParameters: {
                    robots: 'index, follow'
                },
                template: './src/html/logowanie.html',
                minify: false,
                filename: './logowanie.html' //relative to root of the application
            }),

            new HtmlWebpackPlugin({
                hash: true,
                meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
                title: 'Zmiana hasła',
                templateParameters: {
                    robots: 'index, follow'
                },
                template: './src/html/zmiana_hasla.html',
                minify: false,
                filename: './zmiana_hasla.html' //relative to root of the application
            }),

            new HtmlWebpackPlugin({
                hash: true,
                meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
                title: 'Rejestracja',
                templateParameters: {
                    robots: 'index, follow'
                },
                template: './src/html/rejestracja.html',
                minify: false,
                filename: './rejestracja.html' //relative to root of the application
            }),

            new MiniCssExtractPlugin({
                filename: "[name].css",
            }),
            new CssMinimizerPlugin()
        ],
        devServer: {
            static: {
                directory: path.join(__dirname, outputPath),
            },
            compress: true,
            port: 8080,
            hot: true,
        },
    };