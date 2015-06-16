module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {
      	test: /\.js$/, 
      	loader: 'jsx-loader'
      },
      { test: /\.js$/, 
      	exclude: /node_modules/, 
      	loader: 'babel-loader'
     	},
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader?paths=node_modules/foundation/stylus'
      },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" }
    ]
  }
};