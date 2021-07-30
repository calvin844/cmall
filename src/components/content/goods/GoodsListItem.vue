<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="showImage" @load="itemImageLoad" />
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsListItem',
    props: {
      goodsItem: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    methods: {
      itemImageLoad() {
        this.$bus.$emit('itemImageLoad')
      },
      itemClick() {
        this.$router.push('/detail/' + this.goodsItem.iid)
      }
    },
    computed: {
      showImage() {
        return this.goodsItem.img || this.goodsItem.show.img
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    padding: 0px 0px 40px 0px;
    position: relative;
    width: 48%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    position: absolute;
    height: 40px;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .goods-info p {
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    font-size: 14px;
    font-weight: bold;
    float: left;
    color: var(--color-high-text);
    margin: 0px 0px 0px 5px;
  }

  .goods-info .collect {
    font-size: 14px;
    float: right;
    margin: 0px 15px 0px 0px;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    top: 20px;
    right: 0px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
