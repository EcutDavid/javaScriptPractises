module.exports = {
  entry: {
    app: ["./scripts/index.js"]
  },
  output:{
    //not set filename like this: './build/name'!!
    path: __dirname + './build',
    filename: "bundle.js"
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
