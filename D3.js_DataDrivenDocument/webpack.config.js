console.log(__dirname);
module.exports = {
  entry: ["./scripts/inActionChapter1.js"],
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },
  module: {
  loaders: [
    {
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loader: "babel"
    },
    {
      test: /\.css$/,
      loader: "style!css"
    },
    {
      test: /\.scss$/,
      loader: "style!css!sass"
    }
  ]}
}
