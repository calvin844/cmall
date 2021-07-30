<template>
  <div v-if="Object.keys(desc).length!==0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{desc.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{desc.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item,index) in desc.detailImage[0].list" :key="index" :src="item" @load="imgLoad" alt="" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailDesc',
    props: {
      desc: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    data() {
      return {
        counter: 0,
        imageLength: 0
      }
    },
    methods: {
      imgLoad() {
        if (++this.counter == this.imageLength) {
          this.$emit('imageLoad')
        }
      }
    },
    watch: {
      // 函数名称必须为监听的变量名称
      desc() {
        this.imageLength = this.desc.detailImage[0].list.length
      }
    }
  }
</script>

<style scoped>
  .goods-info {
    padding: 10px;
  }

  .info-list img {
    width: 100%;
    margin: 0 0 5px 0;
  }
  .desc{
    font-size: 14px;
    line-height: 20px;
  }
</style>
