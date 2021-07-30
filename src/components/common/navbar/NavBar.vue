<template>
  <div class="nar-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default{
    name:'NavBar'
  }
</script>

<style>
  .nar-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .left,.right{
    width: 60px;
  }
  .center{
    flex:1;
    text-align: center;
  }
</style>
