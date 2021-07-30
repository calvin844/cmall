<template>
  <div class="cart-list">
    <scroll class="cart-scroll" ref="scroll">
      <cart-list-item v-for="(item,index) in products" :product="item" :key="index" />
    </scroll>
  </div>
</template>

<script>
  import CartListItem from './CartListItem'
  import Scroll from 'components/common/scroll/Scroll'
  export default {
    name: 'CartList',
    props: {
      products: {
        type: Array,
        default () {
          return []
        }
      }
    },
    components: {
      CartListItem,
      Scroll
    },
    activated() {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  .cart-list{
    height: calc(100% - 138px);
  }
  .cart-scroll{
    height: 100%;
    overflow: hidden;
  }
</style>
