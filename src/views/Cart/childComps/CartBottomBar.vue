<template>
  <div class="car-bottom-bar">
    <div class="check-box">
      <check-button :is-checked="isChecked" @click.native="checkAll" />
      <span>全选</span>
    </div>
    <div class="total-box">
      <p>合计:{{totalPrice}}</p>
    </div>
    <div class="counter-box" @click="toCounter">
      <p>去计算({{checkedItem}})</p>
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'
  export default {
    name: 'CartBottomBar',
    components: {
      CheckButton
    },
    computed: {
      totalPrice() {
        return "￥" + this.$store.state.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.price * item.counter
        }, 0).toFixed(2)
      },
      checkedItem() {
        return this.$store.state.cartList.filter(item => item.checked).length
      },
      isChecked() {
        return !this.$store.state.cartList.filter(item => !item.checked).length > 0
      }
    },
    methods: {
      checkAll() {
        if (this.isChecked) {
          this.$store.state.cartList.forEach(item => {
            item.checked = false
          })
        } else {
          this.$store.state.cartList.forEach(item => {
            item.checked = true
          })
        }
      },
      toCounter(){
        if(this.checkedItem==0){
          this.$toast.showToast('请选择商品')
        }
      }
    }
  }
</script>

<style scoped>
  .car-bottom-bar {
    height: 44px;
    display: flex;
    background-color: #eee;
    font-size: 14px;
    line-height: 44px;
  }

  .check-box {
    display: flex;
    width: 70px;
    align-items: center;
    line-height: 20px;
  }

  .check-box .check-button {
    width: 20px;
    height: 20px;
    margin: 0px 5px 0px 10px;
  }

  .total-box {
    margin: 0px 0px 0px 10px;
    flex: 1;
  }

  .counter-box {
    width: 80px;
    background-color: orange;
    color: #fff;
    text-align: center;
  }
</style>
