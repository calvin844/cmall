<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">￥{{goods.newPrice}}</span>
      <span class="o-price">￥{{goods.oldPrice>0?goods.oldPrice:goods.newPrice}}</span>
      <span class="discount">{{goods.discount!==""?goods.discount:"活动价"}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0].desc}}</span>
      <span>{{goods.columns[1].desc}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" />
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailBaseInfo',
    props: {
      goods: {
        type: Object,
        default () {
          return {}
        }
      }
    }
  }
</script>


<style scoped>
  .base-info {
    padding: 10px;
    border-bottom: 3px solid #eee;
  }

  .info-title {
    font-size: 14px;
    line-height: 15px;
    margin: 0px 0px 10px 0px;
  }

  .info-price {}

  .n-price {
    font-size: 20px;
    color: var(--color-high-text);
  }

  .o-price {
    font-size: 12px;
    color: #999;
    text-decoration: line-through;
    margin: 0px 5px 0px 5px;
  }

  .discount {
    background-color: var(--color-high-text);
    border-radius: 10px;
    color: #fff;
    font-size: 10px;
    padding: 1px 5px 1px 5px;
    margin: 0 0 5px 0;
    position: relative;
    top: -5px;
  }

  .info-other {
    font-size: 12px;
    color: #999;
    display: flex;
    padding: 20px 0px 20px 0px;
    justify-content: space-between;
  }

  .info-service {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: 12px;
    color: #666;
  }

  .info-service-item {
    flex: 1;
    width: 50%;
    max-width: 50%;
    min-width: 50%;
    margin: 2px 0px 5px 0px;
  }

  .info-service-item img {
    width: 12px;
    height: 12px;
    margin: 0px 2px 0px 0px;

  }
</style>
