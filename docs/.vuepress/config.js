/*
 * @Descripttion:
 * @version:
 * @Author: zhenzipu
 * @Date: 2020-11-24 14:23:49
 * @LastEditors: zhenzipu
 * @LastEditTime: 2020-11-26 16:13:05
 */
module.exports = {
  base: "/Blog/",
  title: "璞子", // Title for the site. This will be displayed in the navbar.
  theme: "reco",
  description: "study programs and record life",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css",
      },
    ],
    // 引入jquery
    [
      "script",
      {
        language: "javascript",
        type: "text/javascript",
        src: "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js",
      },
    ],
    // 引入鼠标点击脚本
    [
      "script",
      {
        language: "javascript",
        type: "text/javascript",
        src: "/js/MouseClickEffect.js",
      },
    ],
  ], 
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    type: "blog",
    huawei: false,
    nav: [
      { text: "Home", link: "/", icon: "reco-home" },
      { text: "TimeLine", link: "/timeline/", icon: "reco-date" },
      {
        text: "GitHub",
        link: "https://github.com/zhenzp",
        icon: "reco-github",
      },
    ],
    friendLink: [
      {
        title: "午后南杂",
        desc: "Enjoy when you can, and endure when you must.",
        email: "1156743527@qq.com",
        link: "https://www.recoluan.com",
      },
      {
        title: "vuepress-theme-reco",
        desc: "A simple and beautiful vuepress Blog & Doc theme.",
        avatar:
          "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: "https://vuepress-theme-reco.recoluan.com",
      },
    ],
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "Category", // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "Tag", // 默认 “标签”
      },
    },
    subSidebar: 'auto', // 在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    // 自动形成侧边导航
    sidebarDepth: 2,
    displayAllHeaders: false,
    sidebar: [
      {
        title: '开发',   // 必要的
        path: '/programs/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          'programs/开发规范',
          'programs/面试题',
          'programs/时间格式处理',
          'programs/git操作',
          'programs/iview升级组件',
          'programs/webpack静态资源处理',
        ]
      },
      {
        title: '日常',   // 必要的
        path: '/daily/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [            
          'daily/测试',
        ]
      },
    ],
    logo: "/logo.png",
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 最后更新时间
    lastUpdated: "Last Updated",
    // 作者
    author: "璞子",
    authorAvatar: "/avatar.png",
    // 项目开始时间
    startYear: "2020",
    /**
     * valine 设置 (if you need valine comment )
     */
    valineConfig: {
      appId: "IYyWOHVyWEI9WnoDu9QftJff-gzGzoHsz", // your appId
      appKey: "GX7px3pBxqO5P7e981oXe2hz", // your appKey
      placeholder: "填写邮箱可以收到回复提醒哦！",
      verify: true, // 验证码服务
      // notify: true, //
      recordIP: true,
    },
  },
  plugins: [
    // 小猫回到顶部
    ["go-top"],
    // 彩带
    [
      "ribbon",
      {
        size: 90, // 彩带的宽度，默认为 90
        opacity: 0.8, // 彩带的不透明度，默认为 0.3
        zIndex: -1, // 彩带的 z-index 属性，默认值为 -1
      },
    ],
    // 萌萌的模型
    [
      "vuepress-plugin-helper-live2d",
      {
        // 是否开启控制台日志打印(default: false)
        log: false,
        live2d: {
          // 是否启用(关闭请设置为false)(default: true)
          enable: true,
          // 模型名称(default: hibiki)
          model: "koharu",
          display: {
            position: "left", // 显示位置：left/right(default: 'right')
            width: 135, // 模型的长度(default: 135)
            height: 300, // 模型的高度(default: 300)
            hOffset: 65, //  水平偏移(default: 65)
            vOffset: 0, //  垂直偏移(default: 0)
          },
          mobile: {
            show: false, // 是否在移动设备上显示(default: false)
          },
          react: {
            opacity: 0.8, // 模型透明度(default: 0.8)
          },
        },
      },
    ],
    // 标签加强
    ["vuepress-plugin-boxx"],
    // 动态标题
    [
      "dynamic-title",
      {
        showIcon: "vuepress/smile.ico",
        showText: "(/≧▽≦/)欢迎帅哥美女！",
        hideIcon: "vuepress/cry.ico",
        hideText: "(●—●)呜呜，不要走嘛！！",
        recoverTime: 2000,
      },
    ],
    // 更新刷新插件
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新",
        },
      },
    ],
    // 代码复制弹窗插件
    [
      "vuepress-plugin-nuggets-style-copy",
      {
        copyText: "复制代码",
        tip: {
          content: "复制成功!",
        },
      },
    ],
    // 音乐插件
    [
      "meting",
      {
        // metingApi: "https://meting.sigure.xyz/api/music",
        meting: {
          // 网易
          server: "netease",
          // 读取歌单
          type: "playlist",
          mid: "696441716",
        },
        // 不配置该项的话不会出现全局播放器
        aplayer: {
          // 吸底模式
          fixed: true,
          mini: true,
          // 自动播放
          autoplay: true,
          // 歌曲栏折叠
          listFolded: true,
          // 颜色
          theme: "#f9bcdd",
          // 播放顺序为随机
          order: "random",
          // 初始音量
          volume: 0.1,
          // 关闭歌词显示
          lrcType: 0,
        },
        mobile: {
          // 手机端去掉cover图
          cover: false,
        },
      },
    ],
    ["vuepress-plugin-auto-sidebar", {}],
  ],
};
