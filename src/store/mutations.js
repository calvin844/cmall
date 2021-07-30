import {ADD_COUNTER,ADD_CART} from './mutation-types';
export default {
  [ADD_COUNTER](state, payload) {
    payload.counter++
  },
  [ADD_CART](state, payload) {
    state.cartList.push(payload)
  }
}
