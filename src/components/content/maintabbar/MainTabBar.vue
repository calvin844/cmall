<template>
  <div id="main-tab-bar">
    <tab-bar>
      <tar-bar-item path='/home'>
        <img slot='item-icon' src="~assets/img/tabbar/home.png"/>
        <img slot='item-icon-act' src="~assets/img/tabbar/home-act.png"/>
        <p slot='item-text'>首页</p>
      </tar-bar-item>
      <tar-bar-item path='/category'>
        <img slot='item-icon' src="~assets/img/tabbar/category.png"/>
        <img slot='item-icon-act' src="~assets/img/tabbar/category-act.png"/>
        <p slot='item-text'>分类</p>
      </tar-bar-item>
      <tar-bar-item path='/cart'>
        <img slot='item-icon' src="~assets/img/tabbar/shoppingcar.png"/>
        <img slot='item-icon-act' src="~assets/img/tabbar/shoppingcar-act.png"/>
        <p slot='item-text'>购物车</p>
      </tar-bar-item>
      <tar-bar-item path='/profile'>
        <img slot='item-icon' src="~assets/img/tabbar/my.png"/>
        <img slot='item-icon-act' src="~assets/img/tabbar/my-act.png"/>
        <p slot='item-text'>我的</p>
      </tar-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TarBarItem from 'components/common/tabbar/TabBarItem'
  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TarBarItem
    }
  }
</script>

<style>
  #main-tab-bar{
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: 50px;
      border-top: 1px solid rgba(100,100,100,.1);
    	background-color: #fff;
  }
</style>
