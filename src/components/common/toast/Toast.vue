<template>
  <div v-show="isShow" class="toast">
    <p>{{message}}</p>
  </div>
</template>

<script>
  export default {
    name: 'Toast',
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      showToast: function(message, duration = 1500) {
        this.message = message
        this.isShow = true
        setTimeout(() => {
          this.message = ""
          this.isShow = false
        }, duration)
      }
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, .7);
    color: #fff;
    padding: 5px 15px 5px 15px;
    border-radius: 20px;
    z-index: 10;
  }
</style>
