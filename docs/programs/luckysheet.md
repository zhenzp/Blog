---
title: 【excel在线预览】 
date: 2020-11-27
author: puzi
categories:
 - 2020-11
tags:
 - 开发
headImg:
 - https://w.wallhaven.cc/full/9m/wallhaven-9mxz8k.jpg
---
<Boxx/>

![](https://w.wallhaven.cc/full/96/wallhaven-96qy3w.jpg)
::: tip
excel 在线预览 :cn:
:::
## 背景
公司项目有个资料库模块 用户可以上传各种格式文件 需要对excel进行线上预览 如果用后端解析返回json格式前端ui展示的方式只能展示纯文本，所以调研了开源的插件
- [spreadjs](https://www.grapecity.com.cn/developer/spreadjs) 收费
- [luckysheet](https://mengshukeji.github.io/LuckysheetDocs/zh/guide/) 免费
- 本着不多一分钱的宗旨 开始学习luckysheet
## 调研
### 文档
- [lucksheet](https://github.com/mengshukeji/Luckysheet)支持在线编辑 单元格-文本、样式、添加图片、公式等基本操作
- [luckyexcel](https://github.com/mengshukeji/Luckyexcel) 增加了预览本地文件及线上文件功能

由于lucky并不能完全支持excel所有格式单元格 所有放弃在线编辑的功能 只留预览功能 官方给出基于lucky的vue版本 但是lucky的预览功能并没有 lucky的导出是ts语法 考虑到现有项目是vue搭建的 用工具包将ts转js 会出现import语法问题 所以讲luckyexcel打包 将静态文件引入到项目中
### 引入源码
![](/lucky/lucky.png) 

### 调用方法
``` js
    // 加载数据
    updateLuckySheet() {
      let _this = this;
      let url='https://test.xlsx';
      var fileName = 'test.xlsx'
      var mask = document.getElementById("lucky-mask-demo");
      mask.style.display = "flex";
      window.LuckyExcel.transformExcelToLuckyByUrl(url, fileName, function(
        exportJson
      ) {
        if (exportJson.sheets == null || exportJson.sheets.length == 0) {
          alert(
            "Failed to read the content of the excel file, currently does not support xls files!"
          );
          return;
        }
        mask.style.display = "none";
        window.luckysheet.destroy();

        window.luckysheet.create({
          ..._this.luckySheetOptions,
          container: "luckysheet",
          data: exportJson.sheets,
          title: exportJson.info.name,
        });
      });
    },
    // 初始化
    initLuckySheet() {
      let _this = this;
      $(function() {
          _this.updateLuckySheet();
      });
    },
```

::: warning
需要改动一下luckyexcel.js 源码 将luckyexcel绑定到window方法 否则会报错
:::

- 至于编辑功能则要参照[源码分析](https://blog.csdn.net/u010593516/article/details/108865593)将luckysheet/luckysheet.umd.js 查找对应方法屏蔽掉就可以
## 完事
[demo展示](https://zhenzp.github.io/excel-preview/#/home)
