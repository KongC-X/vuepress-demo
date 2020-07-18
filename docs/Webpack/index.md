---
title: Webpack
---

# Webpack

## 1. webpack

### 1.1 静态资源多了带来的问题

- 网页加载速度慢， 因为 我们要发起很多的二次请求
- 要处理错综复杂的依赖关系

### 1.2 如何解决上述问题

- 合并、压缩、精灵图、图片的 Base64 编码
- 可以使用 webpack 解决各个包之间的复杂依赖关系

## 2. webpack 的使用

### 2.1 webpack 的安装

- 全局安装运行`npm i webpack -g`这样就可以在全局使用 webpack 的命令了
- 在项目根目录中运行`npm i webpack --save-dev`安装到项目依赖中

```
官方建议我们安装在项目的目录下
```

**备注：**在 webpack4 之后的版本，不光需要安装 webpack 还需要安装 webpack-cli

### 2.2 webpack 的使用

#### 2.2.1 项目搭建思路

1. 搭建项目的目录结构
2. 使用 npm init 构建项目,使用 package.json 管理项目
3. 安装 jquery 插件
4. **不在**页面中引入 jquery 而是在**main.js 中引用**jquery（使用 es6 高阶语法），这样做可以减少请求次数
5. 编写 js 脚本
6. 浏览器**不认识**es6 的高级语法，所以使用 webpack 打包 js 文件，**将这个 js 文件转化成浏览器可以认识的文件**.
7. 1. 安装 webpack `npm i webpack -D`
   2. 安装 webpack-cli `npm i webpack-cli -D`
   3. 执行打包命令, ` webpack 【需要打包的文件】 -o 【``输出的文件``】 `
   4. 因为 webpack 不是全局安装所以没有办法在命令行中直接执行 webpack 命令，这里可以借助 npm 提供的**npx**命令执行 webpack 命令 ` npx webpack 【需要打包的文件】 -o 【``输出的文件``】 `
8. 在 html 中引入打包好的 js 文件

> **npx 可以执行项目已经安装的可执行工具**

#### 2.2.2 webpack 的作用

1. 处理了 js 的依赖关系，对 js 做了合并。
2. 让浏览器不识别的高级语法，转换成浏览器可以识别的语法。

### 2.3 webpack 的配置文件 webpack.config.js

1. 默认配置的入口文件是 src 目录。我们在 src 根目录下添加 index.js，就会默认打包这个 index.js 文件
2. 默认出口文件在 dist 目录下生成 main.js

### 2.4 自定义配置文件

1. 创建 webpack.config.js 的文件，放在项目的根目录

2. 配置入口和出口，配置放在**module.exports**导出的对象里

3. 1. 入口 entry，配置这个时候后面写的是路径，这里用到的是 node 提供的 path 的 api 进行路径的拼接

   2. 出口 output

      path

      filename

```js
// webpack的配置文件
const path = require("path");

// 使用path提供的方法拼接路径
// /src/ ,/src , index.js. /index.js
// /src//index.js
// /src/index.js

module.exports = {
  entry: path.join(__dirname, "src/main.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
};
```

1. 之后直接运行 webpack 即可打包

   在 node 里\_\_dirname 是这个 js 的当前路径

### 2.5 执行 webpack 之后发生了什么

1. 它会去项目的根目录里找 webpack.config.js 配置文件，如果没找到会使用默认的配置文件，这个默认的配置文件是在 webpack4 之后才有的。默认的入口是 src/index.js，默认的出口是 dist/main.js。
2. 回去找到配置文件配置的入口 entry 和出口 output。
3. 执行 webpack 的打包命令，将入口文件转化成出口文件

### 2.6 配置多个入口

应用场景：

1. 业务代码和第三方代码分离。
2. 多模块懒加载
3. 1. 业务场景：在单页面应用中，如果不做懒加载首页加载时，会把所有的 js 都加载出来，导致首页加载过慢
   2. **解决**： 加载首页的只加载首页的 js，用到哪个模块就加在那个模块的 js

如何配置：

1. entry 之前是单个的地址，只能对应一个文件，entry 可以配置成一个**对象**，对象的 key 就打包的入口文件起的名字，value 是文件对应的地址。
2. output 的 filename 改为**[name].js** ，这里[name]指向就是配置的 key 的名字。

```js
module.exports = {
  entry: {
    bundle: path.join(__dirname, "src/main.js"),
    index: path.join(__dirname, "src/index.js"),
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
};
```

## 3. 使用 webpack-dev-server 插件启动页面

每次修改之后都要重新打包，之后刷新页面，操作很繁琐，使用 webpack-dev-server 就可以解决这个问题,实时预览。

### 3.1 如何使用

1. 安装 webpack-dev-server 依赖 `npm i webpack-dev-server -D`
2. 运行这个命令启动服务
3. 1. 通过 npx 运行脚本`npx webpack-dev-server`
   2. 配置 package.json 脚本
4. 1. 1. 配置之后通过`npm run 【配置的名字】`就可以启动

```js
  "scripts": {
    "dev": "webpack-dev-server",
  },
```

### 3.2 执行这个 webpack-dev-server 发生了什么

1. 启动了一个服务，这个服务默认启动在 8080 端口
2. 执行 webpack 命令，把输出的内容放在了**内存**里，我们直接通过 localhost:8080/【输出的文件名】就可以访问到这个文件。
3. 1. 为什么要放在内存里：我们文件一保存就会进行打包编译，会频繁涉及到文件的读写，内存的读写效率要比硬盘高很多，所以放在内存里。
4. 我们一修改入口文件，就会执行打包命令，界面就会进行刷新

### 3.3 实现自动打开浏览器以及热更新

1. 通过命令行指定参数的方式实现`webpack-dev-server --open --port 3000 --contentBase src --hot`注意参数之间都有空格
2. 1. open 打开浏览器
   2. port 服务端口号
   3. contentBase 默认的界面
   4. hot 热部署，每次修改 js 文件只会打包修改的地方，提高效率,浏览器**不刷新**修改内容
3. 使用配置文件配置 devServer

```js
module.exports = {
    ..., // 省略了前面的内容
    devServer: {
        // --open --contentBase src --port 3000 --hot",
        open: true,
        contentBase: 'src',
        port: 3000,
        hot: true
    }
}
```

### 3.4 html 的使用 html-webpack-plugin

1. 安装 html-webpack-plugin
2. 配置 html-webpack-plugin

```js
plugins: [ // 配置插件的节点
    new htmlWebpackPlugin({ // 创建一个 在内存中 生成 HTML  页面的插件
      template: path.join(__dirname, './src/index.html'),
// 指定 模板页面，将来会根据指定的页面路径，去生成内存中的 页面
      filename: 'index.html' // 指定生成的页面的名称
    })
  ],
```

**生成的文件和之前文件的区别**

`生成的文件里面会自动引入打包好的js文件`。

## 4. 解析 css 文件

1. 在**main.js**中去**引入**写好的 css，这里的引入方式和引入 js 是不同的`import 【css文件的地址】`
2. webpack**默认只能处理 js 文件**，如果遇到其他后缀，就会去配置文件中找处理的规则，规则配置如下：

```js
module: {
  // 这个节点，用于配置 所有 第三方模块 加载器
  rules: [
    // 所有第三方模块的 匹配规则
    { test: /\.css$/, use: ["style-loader", "css-loader"] }, //  配置处理 .css 文件的第三方loader 规则
    { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] }, //配置处理 .less 文件的第三方 loader 规则
    { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] }, // 配置处理 .scss 文件的 第三方 loader 规则
  ];
}
```

1. 安装处理的规则
2. 1. css 处理规则：css-loader style-loader
   2. less: less、less-loader
   3. sass: sass-loader、node-sass、sass
3. 文件的处理顺序是从后向前进行处理

### 4.1 处理 css 中的地址问题

默认无法处理 css 文件中的 url 地址

1. 安装 url-loader file-loader
2. loader 传参，
3. 1. 配置 limit
   2. 配置 name=[hash:8]-[name].[ext]

## 5. 处理图片数据

1. 因为 webpack 不认识.jpg…结尾的资源，所以我们进行静态资源的处理
2. 使用 url-loader file-loader 处理图片数据
3. 正则`/\.(jpg|png|gif|bmp)$/`，url-loader 依赖 file-loader 所以我们只写了 url-loader，配置如下：

```js
{
     test: /\.(jpg|png|gif|bmp|svg)$/,
     use: 'url-loader?limit=1000&name=[hash:8]-[name].[ext]'
 }
1234
		4.  loader传参:
         			1.  配置limit 比这个配置文件小的图片会使用base64编码，比这个大的使用地址
         			2.  配置name=[hash:8]-[name].[ext] 使用地址的名字在这里配置:
                   			1.  [hash:8]生成一个唯一的hash码这个hash码是32位，这里截取前8位
                   			2.  [name]代表文件的名字
                   			3.  [ext] 文件的扩展名
```

## 6. 处理字体文件

和静态资源类似，配置相应的解析规则就可以，这里也是使用 url-loader 进行的解析

```js
{
  test: /\.(woff|woff2|eot|ttf)$/,
  use: 'url-loader?limit=1000&name=[hash:8]-[name].[ext]'
}
```

## 7. 翻译 JS 的高级语法 babel

在 webpack 中，默认只能处理 一部分 ES6 的新语法，一些更高级的 ES6 语法或者 ES7 语法，webpack 是处理不了的；这时候，就需要 借助于第三方的 loader，来帮助 webpack 处理这些高级的语法，当第三方 loader 把 高级语法转为 低级的语法之后，会把结果交给 webpack 去打包到 bundle.js 中。

1. Babel 是一个 JavaScript 编译器

2. 我们的目的是在低版本浏览器中也可以使用高级的语法。说白了就是为了兼容低版本浏览器，使用这个插件之后，会把高版本的语法转换成低版本的语法。转换规则在配置文件中配置的

   1. 例如：presets: [’@babel/preset-env’]

3. 使用；

   1. 安装依赖，具体安装官网有介绍`npm install babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env`

   2. 添加 loader 的配置:

      ```js
      {
        test: /\.js$/,
        // 排除的部分，node_modules,1、没有必要2、node_modules特别大，打包比较慢
        exclude: /(node_modules|bower_components)/,
        // 使用数组和字符串配置，这里也可以使用对象配置，loader是js文件的处理模块，options是参数，里面参数的
        // 内容是根据不同loader有不同的内容，这里presets是指定babel-loader预置的翻译语法
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
      ```

## 8. 使用 webpack 渲染 vue

### 8.1 使用传统方式进行运行

1. 我们安装的 vue 默认导入的是运行时环境的 vue，在运行时环境中不支持直接使用 template 渲染，推荐使用 render 函数渲染
2. 我们还想通过传统的方式渲染，我们可以导入完整的 vue 的 js，`import Vue from 'vue/dist/vue'`
3. 这个导入什么包由 package.json 里的 main 属性配置的，我们不能修改 node_modules 里的内容。我们如果想修改 vue 导入时候的包的路径，可以修改 webpack 的配置。

```js
resolve: {
    alias: { // 修改 Vue 被导入时候的包的路径
       "vue$": "vue/dist/vue.js"
    }
  }
```

### 8.2 使用 webpack 方式进行

1. 在 webpack 中推荐使用.vue 后缀的文件定义组件。
2. 1. template：只有一个根节点
   2. script : export default {}是一个对象
3. 1. 1. 之前构造 vue 组件的一些属性
4. 1. style
5. 1. 1. 写样式
   2. 通过 lang 可以指定语法（less、sass）
   3. 通过 scoped，当

```js
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  module: {
    rules: [
      // ... 其它规则
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
  ],
};

const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  module: {
    rules: [
      // ... 其它规则
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
  ],
};
```
