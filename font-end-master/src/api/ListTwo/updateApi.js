import request from '@/util/request'

const date = new Date().toISOString().substr(0, 10)

export function UpdateThongtintaikhoan (item) {
  return request({
    method: 'put',
    url: `nhanvien/thongtintaikhoan/${item.idEmpl}`,
    data: (item),
  })
}