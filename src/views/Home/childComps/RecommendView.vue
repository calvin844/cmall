<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" />
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default{
    name:'RecommendView',
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style>
  .recommend{
    display: flex;
    padding: 10px 0px 20px 0px;
    border-bottom: 8px solid #eee;
  }
  .recommend-item{
    flex: 1;
    width: 25%;
    text-align: center;
  }
  .recommend-item img{
    width: 80%;
    margin: 0px 0px 10px 0px;
  }
  .recommend-item p{
    font-size: 12px;
  }
</style>
