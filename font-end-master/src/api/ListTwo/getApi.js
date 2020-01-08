import request from '../../util/request'

export function getTaskApi (paramas) {
  return request({
    url: `nhanvien/congviec/${paramas}`,
    method: 'get',
  })
}

export function getDSNgayApi (paramas) {
  return request({
    url: `nhanvien/trangchu/${paramas}/doanhsotheongay`,
    method: 'get',
  })
}

export function getDSThangApi (paramas) {
  return request({
    url: `nhanvien/trangchu/${paramas}/doanhsotheothang`,
    method: 'get',
  })
}

export function getDSNamApi (paramas) {
  return request({
    url: `nhanvien/trangchu/${paramas}/doanhsotheonam`,
    method: 'get',
  })
}

export function getBanthan (paramas) {
  return request({
    url: `nhanvien/thongtintaikhoan/${paramas}`,
    method: 'get',
  })
}

export function getCongvecNV (paramas) {
  return request({
    url: `nhanvien/trangchu/${paramas}/congviec`,
    method: 'get',
  })
}
