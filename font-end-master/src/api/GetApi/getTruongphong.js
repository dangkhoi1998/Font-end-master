import request from '../../util/request'

export function getThongtintaikhoan (id) {
  return request({
    url: `truongphong/thongtinkhoan/${id}`,
    method: 'get',
  })
}
