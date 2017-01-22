var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');


var config = {};
var isTest = (process.env.NODE_ENV === 'test') || false;


if (isTest) {
  config.entry = {};
} else {
  config.entry = {
    app: './src/app/app.js'
  };
}

if (isTest) {
  config.output = {};
} else {
  config.output = {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'app.js'
  };
}

if (isTest) {
  config.devtool = 'inline-source-map';
} else {
  config.devtool = 'eval';
}

config.module = {
  preLoaders: [],
  loaders: [{
    test: /\.js$/,
    loaders: ['babel'],
    exclude: /node_modules/
  },
  {
    test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
    loader: 'file'
  }, {
    test: /\.html$/,
    loader: 'raw'
  }]
};

// CSS
var cssLoader = {
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader']
};
if (isTest) {
  cssLoader.loader = null;
}

config.module.loaders.push(cssLoader);

// PLUGINS
config.plugins = [
    new ngAnnotatePlugin({
      add: true
      })
];

if (!isTest) {
  config.plugins.push(
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
      minify: false
  })
  );
}

// DEV SERVER
config.devServer = {
  contentBase: './dist',
  stats: {
    modules: false,
    cached: false,
    colors: true,
    chunk: false
  }
};

module.exports = config;
