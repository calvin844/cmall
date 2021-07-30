<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" class="tab-control-item" :class="{active:index == currentIndex}"
      @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabControl',
    data() {
      return {
        currentIndex: 0
      }
    },
    props: {
      titles: {
        type: Array,
        default () {
          return []
        }
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('tabChange',index)
      }
    }
  }
</script>

<style>
  .tab-control {
    display: flex;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    background-color: #fff;
  }

  .tab-control-item {
    flex: 1;
  }

  .active {
    color: var(--color-high-text);
  }

  .active span {
    border-bottom: 2px solid var(--color-high-text);
    padding: 3px 3px 5px 3px;
  }
</style>
