<template>
  <swiper>
    <swiper-item v-for="(item,index) in topImages">
      <img :src="item" />
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper'
  export default{
    name:'DetailSwiper',
    props:{
      topImages:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      Swiper,
      SwiperItem
    }
  }
</script>

<style>
  .swiper{
    height: 300px;
  }
</style>
