module.exports = {
  entry: {
    app: ["./scripts/module.js"]
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
