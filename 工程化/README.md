# 前端工程化

### webpack配置解析
webpack常见的配置：
```
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js", //打包入口文件
  mode: "development", //开发模式
  module: { //模块对象：定义如何转换导出的js模块以及哪些内容需要转换
    rules: [
        //打包js和jsx文件，借助babel-loader转换ES6
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      //打包css文件，css-loader需要借助style-loader
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  //  帮助我们能导入模块而不用带后缀
  resolve: { extensions: ["*", ".js", ".jsx"] },
  // 输出的
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
```