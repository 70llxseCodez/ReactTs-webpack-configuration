import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import "webpack-dev-server";
import { buildWebpackConfig } from "./config/build/build-weback-config";
import { buildPath } from "./config/build/types/config.types";

const paths: buildPath = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  build: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
};

module.exports = (env: any): webpack.Configuration => {
  return buildWebpackConfig({
    mode: env.mode ? "production" : "development",
    path: paths,
    port: 4000,
  });
};
