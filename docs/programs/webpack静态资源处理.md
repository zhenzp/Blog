---
title: 【webpack静态资源处理】
date: 2020-09-17
author: puzi
categories:
 - 2020-09
tags:
 - webpack
headImg:
 - https://w.wallhaven.cc/full/q2/wallhaven-q297wl.jpg
---
<Boxx/>
![](https://w.wallhaven.cc/full/j3/wallhaven-j39mjq.jpg)
::: tip
日常记录
:::

```
项目中会依赖一些开源JS-SDK 由于改造源码export工作量比较大 因此只能放在static在html用script标签引用 功能虽然可用 但在生产环境会出现一系列问题
```

- 压缩混淆js文件 js文件功能代码的安全性  [参考链接](https://github.com/mishoo/UglifyJS2/tree/harmony)
- 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
- 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)

```
const UglifyJS = require('uglify-es') //引用uglify-es插件进行压缩混淆代码

new CopyWebpackPlugin([{
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      },
      {//指定文件夹下所有js文件到指定文件夹
        from: path.resolve(__dirname, '../static/one/js'),
        to: './static/one/js',
        transform: function (content) {
          return UglifyJS.minify(content.toString()).code;
        }
      }，
      {//指定单个文件到指定文件夹
        from: path.resolve(__dirname, '../static/two/js/test.js'),
        to: './static/two/js/',
        transform: function (content) {
          return UglifyJS.minify(content.toString()).code;
        }
      }
  ])
```
- 由于浏览器缓存机制将文件名加后缀哈希处理
#### 网络上查阅了很多资料 webpack支持将src下所有js css image 进行合并压缩混淆哈希处理 但对静态资源的处理很少
[参考链接](https://blog.csdn.net/beiweideqidaozhe/article/details/62048290)
1. 一开始使用的方式是直接在编译后的js文件后面加入
```
?v=Math.random()
```
这样每次都会把编译后的文件重新加载一遍，虽然是可以解决缓存的问题，但是会造成网络请求的浪费。(由于是对静态资源js文件进行处理，所以这种方式可以采纳)
2. 第二种方式就是使用assets-webpack-plugin 的插件。该插件会在每次编译完成后，生成一份webpack.assets.js文件，文件的内容是最新的编译后的文件名称
```
const AssetsPlugin=require('assets-webpack-plugin');

plugins:[
    new AssetsPlugin({
        filename:'build/webpack.assets.js',
        processOutput:function(assets){
            return 'window.WEBPACK_ASSETS='+JSON.stringify(assets);
        }
    })
]


//这样引入完成后，每次build完成后，都会在webpack.assets.js中生成以下代码
window.WEBPACK_ASSETS={"main":{"js":"1541559546eeb5ec7570.index.js"}}
//名字带hash值是在webpack的output中配置的
output:{
    filename:'[hash].index.js'
}
//在最终引用文件时
<script>
    document.write('<script type="text/javascript" src="/resources/web/build/webpack.assets.js?v='+Math.random()+'"><\/script>');
</script>
<script>
    document.write('<script src="/resources/web/build/' + window.WEBPACK_ASSETS['main'].js + '"><\/script>');
</script>
```
- 经项目测试发现AssetsPlugin执行后 会将所有js文件都放入一个有序数组里 通过index去拿到js路径进行hash处理 而目前问题是解决静态资源js 当项目src打包出的js文件发生变化 index会随之变化 所以这个方案不太适合
- 综上所述方案一是比较符合需求的 但方法比较low 在经过一番查阅后 发现有个方案比较契合
[参考链接](https://www.cnblogs.com/haogj/p/5649670.html)
```
function HashStaticPlugin(options) {
  this.options = options;
}

HashStaticPlugin.prototype.apply = function (compiler) {
  var paths = this.options.paths;
  compiler.plugin('compilation', function (compilation, options) {
    compilation.plugin('html-webpack-plugin-before-html-processing', function (htmlPluginData, callback) {
      for (var i = paths.length - 1; i >= 0; i--) {
        // 如果后缀有“[hash]”则添加随机参数
        if (paths[i].indexOf("[hash]") != -1) {
          let str = paths[i].replace("[hash]", new Date().getTime())
          htmlPluginData.assets.js.unshift(str);
        } else {
          htmlPluginData.assets.js.unshift(paths[i]);
        }

      }
      callback(null, htmlPluginData);
    });
  });
};


HashStaticPlugin({
      paths: [
        "./static/one/js/test1.js?t=[hash]",
        "./static/two/js/test2.js?t=[hash]",
      ]
    }),
```
