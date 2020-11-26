<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhenzipu
 * @Date: 2020-11-25 17:10:08
 * @LastEditors: zhenzipu
 * @LastEditTime: 2020-11-26 13:40:58
-->
<template>
  <Common :sidebarItems="sidebarItems">
    <div v-if="!$frontmatter.home" class="add-head-con" :style="{'background-image':`url(${$frontmatter.headImg})`}">
    </div>
    <component v-if="$frontmatter.home" :is="homeCom"/>
    <Page v-else :sidebar-items="sidebarItems"/>
    <Footer v-if="$frontmatter.home" class="footer" />
  </Common>
</template>

<script>
import Home from '@theme/components/Home'
import HomeBlog from '@theme/components/HomeBlog'
import Page from '@theme/components/Page'
import Footer from '@theme/components/Footer'
import Common from '@theme/components/Common'
import { resolveSidebarItems } from '@theme/helpers/utils'

export default {
  components: { HomeBlog, Home, Page, Common, Footer },
  computed: {
    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },
    homeCom () {
      const { type } = this.$themeConfig
      if (type !== undefined) {
        return type == 'blog' ? 'HomeBlog' : type
      }
      return 'Home'
    }
  },
  mounted(){
  }
}
</script>

<style src="../styles/theme.styl" lang="stylus"></style>
<style lang="stylus" scoped>
.add-head-con
  width 100%
  height 30rem
  position absolute
  top 0
  left 0
  background url("https://w.wallhaven.cc/full/m9/wallhaven-m9q6e9.jpg")
  background-repeat no-repeat
  background-position 50% 50%
  background-size cover
</style>
