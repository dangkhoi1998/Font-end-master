import request from '../../util/request'

export function getTaskApi (paramas) {
  return request({
    url: `nhanvien/congviec/${paramas}`,
    method: 'get',
  })
}

export function getDSApi (paramas) {
  return request({
    url: `nhanvien/trangchu/${paramas}/doanhsotheongay`,
    method: 'get',
  })
}

export function getBanthan (paramas) {
  return request({
    url: `nhanvien/thongtintaikhoan/${paramas}`,
    method: 'get',
  })
}
