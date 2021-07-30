import {
  request,
  localRequest
} from './request'

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}
export function getHomeGoods(type, page) {
  return localRequest({
    url: '/testdata/' + type + page + '.json'
  })
}
