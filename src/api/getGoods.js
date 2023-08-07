import request from '../untils/request.js'

const getGoods = function (type, ul, data) {
  return request.request1({
    method: type,
    url: ul,
    params: data,
    timeout: 3000
  })
}
export default {
  getGoods
}
