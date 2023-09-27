// Importing a file routing manager
const path = require('path');
// Importing plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Exporting a Configuration Options Object
module.exports = {
  // 0. Estableciendo el modo producción
  mode: 'production',
  // 1. Estableciendo el archivo indexador del front-end
  entry: "./client/index.js",
  // 2. Estableciendo el archivo de salida
  output: {
    // 2.1 Ruta Absoluta de Salida
    path: path.resolve(__dirname, "public"),
    // 2.2 Nombre del archivo de salida
    filename: "bundle.js",
  },
  // Agregando un módulo a webpack
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    'modules': false,
                    'useBuiltIns': 'usage',
                    'targets': '> 0.25%, not dead',
                    'corejs': 3
                  }
                ]
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  // Sección de Plugins
  plugins: [new MiniCssExtractPlugin({
    // Archivo css de salida
    filename: 'styles/app.css'
  })]
};

                  