export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = null
      oldProduct = context.state.cartList.find(item => item.iid == payload.iid)
      if (oldProduct) {
        // oldProduct.counter++
        context.commit('addCounter', oldProduct)
        resolve('当前商品数量加1')
      } else {
        payload.counter = 1
        payload.checked = true
        context.commit('addCart', payload)
        resolve('添加新商品')
      }
    })
  }
}
