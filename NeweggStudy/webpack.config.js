module.exports = {
  entry: {
    app: ["./test/mochaTester.js"]
  },
  output:{
    path: __dirname,
    filename: "./test/bundle.js"
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
