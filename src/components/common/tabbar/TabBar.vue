<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default{
    name:'TabBar'
  }
</script>

<style>
  .tab-bar{
      display: flex;
  }
</style>
