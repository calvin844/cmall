import axios from 'axios'
export function request(config) {
  // 1. 创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  // 2. axios拦截器(发送过程中添加操作)
  // 2.1. 请求拦截(请求发送过程中添加操作)
  instance.interceptors.request.use(config => {
    return config
  }, err => {})

  // 2.2. 响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res)
    // 需要把res(响应结果)返回出去，不然拦截后，后续步骤拿不到res，这里只有res里面的data有用，所以只把data返回出去
    return res.data
  }, err => {
    console.log(err)
  })
  return instance(config)
}


export function localRequest(config) {
  // 1. 创建axios的实例
  const instance = axios.create({
    baseURL: '',
    timeout: 5000
  })
  // 2. axios拦截器(发送过程中添加操作)
  // 2.1. 请求拦截(请求发送过程中添加操作)
  instance.interceptors.request.use(config => {
    return config
  }, err => {})

  // 2.2. 响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res)
    // 需要把res(响应结果)返回出去，不然拦截后，后续步骤拿不到res，这里只有res里面的data有用，所以只把data返回出去
    return res.data
  }, err => {
    console.log(err)
  })
  return instance(config)
}