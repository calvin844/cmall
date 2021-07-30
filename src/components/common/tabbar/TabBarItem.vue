<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-act"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) != -1
      },
      activeStyle() {
        return this.isActive ? {
          color: this.activeColor
        } : {}
      }
    },
    methods:{
      itemClick(){
        this.$router.push(this.path)
      }
    }
  }
</script>

<style>
  .tab-bar-item{
    flex: 1;
    text-align: center;
  }
  .tab-bar-item img{
    width: 22px;
    height: 22px;
    margin: 5px 0px 0px 0px;
  }
  .tab-bar-item p{
    font-size: 14px;
    margin: 0;
  }
</style>
