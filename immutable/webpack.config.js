module.exports = {
  entry: {
    app: ["./test.js"]
  },
  output:{
    path: __dirname,
    filename: "./bundle.js"
  },
  module: {
  loaders: [
    {
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel'
    }
  ]}
}
