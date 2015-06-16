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
        loader: '!stylus-loader?paths=node_modules/foundation/stylus/'
      }
    ]
  }
};