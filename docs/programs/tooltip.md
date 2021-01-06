---
title: 【tooltip】
date: 2020-12-12
author: puzi
categories:
 - 2020-12
tags:
 - css
headImg:
 - https://w.wallhaven.cc/full/e7/wallhaven-e7zmwk.jpg
---
<style>
    .tooltip-list{
        width:100px;
        margin:0 auto;
    }
    .triangle-list{
        list-style: none;
        width:100px;
    }
    .triangle-list li {
        margin: 20px;
    }
    .triangle-list .triangle{
        border-top: 100px solid red;
        border-bottom: 100px solid blue;
        border-left: 100px solid yellow;
        border-right: 100px solid green;
    }
    .triangle-list .triangle-up{
        border-top: 100px solid red;
        border-left: 100px solid transparent;
        border-right: 100px solid transparent;
    }
    .triangle-list .triangle-down{
        border-bottom: 100px solid blue;
        border-left: 100px solid transparent;
        border-right: 100px solid transparent;
    }
    .triangle-list .triangle-left{
        border-left: 100px solid yellow;
        border-top: 100px solid transparent;
        border-bottom: 100px solid transparent;
    }
    .triangle-list .triangle-right{
        border-right: 100px solid green;
        border-top: 100px solid transparent;
        border-bottom: 100px solid transparent;
    }


    .triangle-list .triangle-topright{
        border-top: 100px solid green;
        border-left: 100px solid transparent;
    }
    .triangle-list .triangle-topleft{
        border-top: 100px solid green;
        border-right: 100px solid transparent;
    }
    .triangle-list .triangle-bottomleft{
        border-bottom: 100px solid green;
        border-right: 100px solid transparent;
    }
    .triangle-list .triangle-bottomright{
        border-bottom: 100px solid green;
        border-left: 100px solid transparent;
    }

    .tooltip{
        width: 200px;
        height: 400px;
        border-radius: 20px;
        border:2px solid red;
        position: relative;
        margin-top: 100px;
        background:#ccc;
    }
    .tooltip:before{
        content: '';
        display: block;
        position: absolute;
        top: -20px;
        left: 80px;
        border-bottom: 20px solid red;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
    }
    .tooltip:after{
        content: '';
        display: block;
        position: absolute;
        top: -18px;
        left: 80px;
        border-bottom: 20px solid #ccc;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
    }
</style>

<div class="tooltip-list">
    <div class="tooltip">
    </div>
    <ul class="triangle-list">
        <li class="triangle"></li>
        <li class="triangle-up"></li>
        <li class="triangle-down"></li>
        <li class="triangle-left"></li>
        <li class="triangle-right"></li>
        <li class="triangle-topright"></li>
        <li class="triangle-topleft"></li>
        <li class="triangle-bottomleft"></li>
        <li class="triangle-bottomright"></li>
    </ul>
</div>

``` html
   <div class="tooltip-list">
    <div class="tooltip">
    </div>
    <ul class="triangle-list">
        <li class="triangle"></li>
        <li class="triangle-up"></li>
        <li class="triangle-down"></li>
        <li class="triangle-left"></li>
        <li class="triangle-right"></li>
        <li class="triangle-topright"></li>
        <li class="triangle-topleft"></li>
        <li class="triangle-bottomleft"></li>
        <li class="triangle-bottomright"></li>
    </ul>
</div>
```

``` css
    .triangle{
        border-top: 100px solid red;
        border-bottom: 100px solid blue;
        border-left: 100px solid yellow;
        border-right: 100px solid green;
    }
    .triangle-up{
        border-top: 100px solid red;
        border-left: 100px solid transparent;
        border-right: 100px solid transparent;
    }
    .triangle-down{
        border-bottom: 100px solid blue;
        border-left: 100px solid transparent;
        border-right: 100px solid transparent;
    }
    .triangle-left{
        border-left: 100px solid yellow;
        border-top: 100px solid transparent;
        border-bottom: 100px solid transparent;
    }
    .triangle-right{
        border-right: 100px solid green;
        border-top: 100px solid transparent;
        border-bottom: 100px solid transparent;
    }


    .triangle-topright{
        border-top: 100px solid green;
        border-left: 100px solid transparent;
    }
    .triangle-topleft{
        border-top: 100px solid green;
        border-right: 100px solid transparent;
    }
    .triangle-bottomleft{
        border-bottom: 100px solid green;
        border-right: 100px solid transparent;
    }
    .triangle-bottomright{
        border-bottom: 100px solid green;
        border-left: 100px solid transparent;
    }

    .tooltip{
        width: 200px;
        height: 400px;
        border-radius: 20px;
        border:2px solid red;
        position: relative;
        margin-top: 100px;
        background:#ccc;
    }
    .tooltip:before{
        content: '';
        display: block;
        position: absolute;
        top: -20px;
        left: 80px;
        border-bottom: 20px solid red;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
    }
    .tooltip:after{
        content: '';
        display: block;
        position: absolute;
        top: -18px;
        left: 80px;
        border-bottom: 20px solid #ccc;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
    }
```