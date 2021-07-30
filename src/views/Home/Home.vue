<template>
  <div id="home">
    <nav-bar class="home-nav">
      <p slot="center">购物街</p>
    </nav-bar>
    <tab-control class="home-tab-control" :titles="['流行','新款','精选']" @tabChange='tabChange' v-show="isTabFixed"
      ref="tabcontrol2" />
    <scroll class="home-scroll" ref="scroll" :probeType="3" @scroll="contentScroll" :pull-up-load="true"
      @pullingUp="loadMore">
      <home-swiper :banners='banners' @HomeSwiperImageLoad="getOffsetTop" />
      <recommend-view :recommends='recommonds' />
      <feature-view />
      <tab-control :titles="['流行','新款','精选']" @tabChange='tabChange' ref="tabcontrol1" />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native='backTop' v-show="isShowBackTop" />
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'
  import TabControl from 'components/content/tabcontrol/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'
  import {
    getHomeMultidata,
    getHomeGoods
  } from 'network/home'
  import {
    debounce
  } from 'common/util'
  import {
    itemListenerMixin,
    backTopMixin
  } from 'common/mixin'
  export default {
    name: 'Home',
    mixins: [itemListenerMixin, backTopMixin],
    data() {
      return {
        banners: [],
        recommonds: [],
        goods: {
          'pop': {
            list: [],
            page: 0
          },
          'new': {
            list: [],
            page: 0
          },
          'sell': {
            list: [],
            page: 0
          }
        },
        currentType: 'pop',
        isTabFixed: false,
        tabControlTop: 0,
        saveY: 0
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    methods: {
      getHomeMultidata: function() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list
          this.recommonds = res.data.recommend.list
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.result.wall.list)
          this.goods[type].page += 1
          this.$refs.scroll.finishPullUp()
        })
      },
      tabChange(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        this.$refs.tabcontrol1.currentIndex = index
        this.$refs.tabcontrol2.currentIndex = index
      },
      contentScroll(position) {
        this.showBackTop(position)
        this.isTabFixed = (-position.y > this.tabControlTop)
      },
      loadMore() {
        this.getHomeGoods(this.currentType)
      },
      getOffsetTop() {
        this.tabControlTop = this.$refs.tabcontrol1.$el.offsetTop
      }
    },
    created() {
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    // mounted() {
    //   const refresh = debounce(this.$refs.scroll.refresh)
    //   this.itemImgListener = () => {
    //     refresh()
    //   }
    //   this.$bus.$on('itemImageLoad', this.itemImgListener)
    // },
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY, 1)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      this.saveY = this.$refs.scroll.getScrollY()
      this.$bus.$off('itemImageLoad', this.itemImgListener)
    }
  }
</script>

<style>
  #home {
    position: relative;
    height: 100vh;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }

  .home-scroll {
    position: absolute;
    top: 44px;
    bottom: 50px;
    left: 0;
    right: 0;
    overflow: hidden;
  }

  .home-tab-control {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    z-index: 1;
  }
</style>
