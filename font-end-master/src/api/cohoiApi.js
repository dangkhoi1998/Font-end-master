import request from '../util/request'

export function getCohoiApi () {
  return request({
    url: '/cohoi1',
    method: 'get',
  })
}

export function updateCohoiApi (id, data) {
  return request({
    url: `/cohoi1/${id}`,
    method: 'put',
    data,
  })
}
