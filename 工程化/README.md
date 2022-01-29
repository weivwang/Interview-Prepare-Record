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
<a href="https://webpack.wuhaolin.cn/1入门/1-1前端的发展.html">深入浅出Webpack</a>

### 模块化
#### CommonJS
通过require来同步加载依赖的其他模块，通过module.exports导出需要暴露的接口
- 优点：代码可复用于node环境，许多npm发布的第三方包采用了CommonJS规范
- 缺点：代码无法直接运行在浏览器环境下，需要通过工具转换为ES5

### AMD
AMD也是一种js模块化规范，与CommonJS区别在于它采用异步的方法加载模块
- 优点：不转换代码就可以直接在浏览器端运行，可以异步加载依赖，可以并行加载多个依赖，可以运行在浏览器环境和node环境下
- 缺点：js原生环境不支持AMD，需要导入实现了AMD的库后才能正常使用

### ES6模块化
ECMA提出的js模块化规范，在语言层面实现模块化，浏览器厂商和node.js都宣布要原生支持该规范。将逐渐取代CommonJS和AMD，成为浏览器和服务器通用的模块解决方案。
- 优点：终极模块化方案
- 缺点：目前无法直接运行在大部分js环境下，需要通过工具转化为ES5才能正常运行

#### 样式文件模块化
以sass为例：
- `@mixin`定义样式片段
- `@import`可以导入片段
- 在样式大括号中用`@include`使用导入的样式文件

### 构建工具需要完成哪些事情？
- 代码转换：TS到JS，SCSS到CSS
- 文件优化：压缩JS，CSS，HTML代码，压缩合并图片
- 代码分割：提起页面公共代码，提取首屏不需要执行部分的代码，让其异步加载
- 模块合并：把多个模块和文件合并成一个文件
- 自动刷新：监听本地源代码的变化，自动重新构建，刷新浏览器
- 代码校验：在代码提交到仓库前需要校验代码是否符合规范，以及进行单元测试
- 自动刷新，监听本地源代码的变化，自动重新构建，刷新浏览器。
- 自动发布：更新代码后，自动构建出上线发布的代码并传输给发布系统

### 构建工具的发展

#### Npm Script
npm内置的功能，在package.json中可以使用scripts对象定义任务，每一个属性定义一段shell脚本，优点是内置，无需安装其他依赖，缺点是功能太简单，不能方便管理多个任务之间的依赖。

#### Grunt
grunt有大量现成的插件封装了任务之间的依赖关系，在配置文件Gruntfile.js做配置
- 优点：灵活，只执行定义的任务，大量可复用的插件封装了常见的构建任务
- 缺点：集成度不高，要写很多配置才可以使用，无法开箱即用

#### Gulp
Gulp是基于流的自动化构建工具，除了可以管理和执行任务，还支持监听文件，读写文件。
- 优点：好用而不失灵活
- 缺点：集成度不高，需要编写很多配置之后才可以用，无法开箱即用。

#### Fis3
来自百度的优秀国产开源工具，集成了web开发的常用功能。但是现在官方已经不再更新和维护，不再支持最新的Node.js

#### WebPack
一切皆模块的概念，通过Loader转换文件，通过Plugin注入钩子，最后输出由多个模块组成的文件。<br>
优点：
- 专注处理模块化，能做到开箱即用一步到位
- Plugin扩展，好用且灵活
- 社区活跃

#### Rollup
和Webpack类似但专注于ES6的模块打包工具。亮点在于对ES6源码进行Tree Shaking从而去除那些已经定义但是没有被使用过的代码。以及Scope Hoisting(作用域提升)来减小输出文件大小。但是这些亮点很快被webpack模仿并实现。


### Vite
新一代开发构建工具,利用浏览器的native ES module特性导入组织代码，使用rollup作为打包工具
#### vite的优势，为了解决哪些问题
- 缓慢的服务器启动：第一次在电脑上启动项目，基于打包器方式启动必须优先抓取并构建整个应用<br>
  vite的解决方式：vite将应用中的模块分为依赖和源码，依赖大多不会变动（一般不会去改动node-modules文件夹里面的各种依赖）<br>
  vite使用用go编写的<a href="https://esbuild.github.io/">esbuild</a>预先构建依赖，比使用js编写的打包器与构建依赖快10-100倍
  源码通常是JSX, CSS, Vue, 一般在开发中经常变动

