<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar" @titleClick="titleClick" ref="nav" />
    <scroll class="detail-scroll" ref="scroll" :probe-type="3" @scroll="homescroll">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-desc :desc="desc" @imageLoad="imageLoad" />
      <detail-param-info :param-info="paramInfo" ref="param" />
      <detail-comment-info :comment-info="commentInfo" ref="comment" />
      <goods-list :goods="recommends" ref="recommends" />
    </scroll>
    <detail-bottom-bar class="detail-bottom-bar" @addToCart="addToCart" />
    <back-top @click.native='backTop' v-show="isShowBackTop" />
  </div>
</template>

<script>
  import DetailNavBar from './ChildComps/DetailNavBar'
  import DetailSwiper from './ChildComps/DetailSwiper'
  import DetailBaseInfo from './ChildComps/DetailBaseInfo'
  import DetailShopInfo from './ChildComps/DetailShopInfo'
  import DetailDesc from './ChildComps/DetailDesc'
  import DetailParamInfo from './ChildComps/DetailParamInfo'
  import DetailCommentInfo from './ChildComps/DetailCommentInfo'
  import DetailBottomBar from './ChildComps/DetailBottomBar'


  import Scroll from 'components/common/scroll/Scroll'
  import GoodsList from 'components/content/goods/GoodsList'
  import {
    mapActions
  } from 'vuex'
  import {
    getDetail,
    Goods,
    Shop,
    GoodsParam
  } from 'network/detail'
  import {
    debounce
  } from 'common/util'
  import {
    itemListenerMixin,
    backTopMixin
  } from 'common/mixin'
  export default {
    name: 'Detail',
    mixins: [itemListenerMixin, backTopMixin],
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        desc: {},
        paramInfo: {},
        commentInfo: [],
        recommends: [],
        themedTopY: [],
        getThemedTop: null
      }
    },
    components: {
      Scroll,
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailDesc,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList,
      DetailBottomBar
    },
    created() {
      this.iid = this.$route.params.iid
      getDetail(this.iid).then(res => {
        const data = res.data.result
        this.topImages = data.topImages
        this.goods = new Goods(data.itemInfo, data.priceBanner, data.promotionV2, data.itemServices)
        this.shop = new Shop(data.shopInfo)
        this.desc = data.detailInfo
        this.paramInfo = new GoodsParam(data.itemParams.info)
        this.commentInfo = data.rateInfoV2.cRate > 0 ? data.rateInfoV2.list : []
        this.recommends = data.shopRecommend.realTimeRecommendItemList !== undefined ? data.shopRecommend
          .realTimeRecommendItemList : ""
      })
      this.getThemedTop = () => {
        this.themedTopY.push(0)
        this.themedTopY.push(this.$refs.param.$el.offsetTop)
        this.themedTopY.push(this.$refs.comment.$el.offsetTop)
        this.themedTopY.push(this.$refs.recommends.$el.offsetTop)
      }
    },
    methods: {
      ...mapActions(['addCart']),
      imageLoad() {
        this.$refs.scroll.refresh()
        debounce(this.getThemedTop(), 100)
      },
      titleClick(index) {
        this.$refs.scroll.scrollTo(0, -this.themedTopY[index] + 44, 300)
      },
      homescroll(position) {
        this.showBackTop(position)
        const positionY = -position.y;
        for (let t in this.themedTopY) {
          if (positionY > this.themedTopY[t] - 50) {
            this.$refs.nav.currentIndex = t
          }
        }
      },
      addToCart() {
        const product = {}
        product.title = this.goods.title
        product.image = this.topImages[0]
        product.desc = this.goods.desc
        product.price = this.goods.newPrice
        product.iid = this.iid
        this.addCart(product).then(res => {
          this.$toast.showToast(res)
        })
      }
    },
    destroyed() {
      this.$bus.$off('itemImageLoad', this.itemImgListener)
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    height: 100vh;
    background-color: #fff;
  }

  .detail-nav-bar {
    position: relative;
    top: 0;
    z-index: 2;
    background-color: #fff;
  }

  .detail-scroll {
    height: calc(100% - 95px);
  }

  .detail-bottom-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
</style>
