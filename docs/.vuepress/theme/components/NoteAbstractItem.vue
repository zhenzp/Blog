<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhenzipu
 * @Date: 2020-11-25 17:10:06
 * @LastEditors: zhenzipu
 * @LastEditTime: 2020-11-26 14:20:01
-->
<template>
  <div class="abstract-item" @click="$router.push(item.path)">
    <i v-if="item.frontmatter.sticky" class="iconfont reco-sticky"></i>
    <div
      class="item-img"
      :style="{
        'background-image': `url(${item.frontmatter.headImg ||
          'https://w.wallhaven.cc/full/m9/wallhaven-m9q6e9.jpg'})`,
      }"
    ></div>
    <div class="item-info">
      <div class="title">
        <i v-if="item.frontmatter.keys" class="iconfont reco-lock"></i>
        <router-link :to="item.path">{{ item.title }}</router-link>
      </div>
      <div class="abstract" v-html="item.excerpt"></div>
      <PageInfo :pageInfo="item" :currentTag="currentTag"> </PageInfo>
    </div>
  </div>
</template>

<script>
import PageInfo from "./PageInfo";
export default {
  components: { PageInfo },
  props: ["item", "currentPage", "currentTag"],
  mounted() {
  },
};
</script>

<style lang="stylus" scoped>
@require '../styles/mode.styl'
.abstract-item
  position relative
  margin: 0 auto 20px;
  padding: 16px 20px;
  width 100%
  overflow: hidden;
  border-radius: $borderRadius
  box-shadow: var(--box-shadow);
  box-sizing: border-box;
  transition all .3s
  background-color var(--background-color)
  cursor: pointer;
  display inline-flex
  > * {
    pointer-events: auto;
  }
  .item-img
    min-width 300px
    flex 1
    overflow hidden
    border-radius .8rem
    background url("https://w.wallhaven.cc/full/m9/wallhaven-m9q6e9.jpg")
    background-repeat no-repeat
    background-position 50% 50%
    background-size cover
  .item-info
    flex 1
    display flex
    flex-direction column
    justify-content center
    padding 15px
  .reco-sticky
    position absolute
    top 0
    left 0
    display inline-block
    color $accentColor
    font-size 2.4rem
  &:hover
    box-shadow: var(--box-shadow-hover)
  .title
    position: relative;
    font-size: 1.28rem;
    line-height: 88px;
    display: inline-block;
    margin-bottom 10px
    a
      color: var(--text-color);
    .reco-lock
      font-size 1.28rem
      color $accentColor
    &:after
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: $accentColor;
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      transition: .3s ease-in-out;
    &:hover a
      color $accentColor
    &:hover:after
      visibility visible
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
  .tags
    .tag-item
      &.active
        color $accentColor
      &:hover
        color $accentColor
@media (max-width: $MQMobile)
  .tags
    display block
    margin-top 1rem;
    margin-left: 0!important;
  .abstract-item
    display block
  .item-img
    width 100%
    display inline-flex
    height 10rem
  // .item-info
  .title
    position: relative;
    line-height: 48px !important;
</style>
