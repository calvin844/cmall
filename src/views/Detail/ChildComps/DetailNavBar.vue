<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" />
      </div>
      <div slot="center" class="titles">
        <div v-for="(item,index) in titles" class="title-item" :class="{active:(currentIndex == index)}" @click="titleClick(index)">
          {{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: 'detailnavbar',
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    components: {
      NavBar
    },
    methods: {
      titleClick(index) {
        this.currentIndex = index
        this.$emit('titleClick',index)
      },
      backClick() {
        this.$router.back()
      }
    }
  }
</script>

<style>
  .titles {
    display: flex;
    font-size: 14px;
  }

  .title-item {
    flex: 1;
  }

  .active {
    color: var(--color-high-text);
  }
  .back img{
    margin: 12px 0px 0px 5px;
  }
</style>
