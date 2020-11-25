/*
 * @Descripttion: 
 * @version: 
 * @Author: zhenzipu
 * @Date: 2020-11-24 14:23:49
 * @LastEditors: zhenzipu
 * @LastEditTime: 2020-11-25 10:35:58
 */
module.exports = {
  base: "/puzi/",
  title: "璞子", // Title for the site. This will be displayed in the navbar.
  theme: "reco",
  description: 'study programs and record life',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],
  themeConfig: {
    type: 'blog',
    huawei: false,
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      { text: 'GitHub', link: 'https://github.com/zhenzp', icon: 'reco-github' }
    ],
    friendLink: [
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '1156743527@qq.com',
        link: 'https://www.recoluan.com'
      },
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
    ],
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag' // 默认 “标签”
      }
    },
    logo: '/main.jpg',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: "璞子",
    authorAvatar: "/main.jpg",
    // 项目开始时间
    startYear: '2020',
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
  }
}  