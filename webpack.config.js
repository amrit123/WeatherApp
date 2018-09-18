const path = require('path');
var proxy = require('http-proxy-middleware');

module.exports = {
  entry: './src/App.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },{
      test: /\.s?css$/,
      use:["style-loader","css-loader","sass-loader"]
    }]
  },
  devtool: "cheap-module-source-map",
  devServer:{
    contentBase:path.join(__dirname, 'public'),
    port:8080,
    historyApiFallback:true,
   
   
  }
 

  
};