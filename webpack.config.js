const { resolve, join } = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const version = JSON.stringify(require("./package.json").version);

const LIB_ROOT = resolve(join(__dirname, "./"));
const LIB_SRC = resolve(join(__dirname, "./src"));
const LIB_DIST = resolve(join(__dirname, "./dist"));

module.exports = {
  target: "node",
  entry: {
    sajari: join(LIB_SRC, "index.ts")
  },
  output: {
    path: LIB_DIST,
    filename: "[name].js",

    library: "sajari",
    libraryTarget: "umd"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  externals: ["grpc", "protobufjs/light"],
  plugins: [
    new webpack.DefinePlugin({
      VERSION: version
    }),
    new ForkTsCheckerWebpackPlugin({
      tslint: true,
      async: false,
      watch: LIB_SRC
    }),
    new CopyWebpackPlugin([
      {
        from: join(LIB_ROOT, "sajari.d.ts"),
        to: join(LIB_DIST, "sajari.d.ts"),
        toType: "file"
      }
    ])
  ],
  performance: {
    hints: false
  }
};
