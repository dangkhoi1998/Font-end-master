import request from '../../util/request'

export function getTaskApi (paramas) {
  return request({
    url: `truongphong/thanhvien/${paramas}`,
    method: 'get',
  })
}

export function getCongviec (paramas) {
  return request({
    url: `truongphong/trangchu/${paramas}/trangthai/cohoiall`,
    method: 'get',
  })
}

export function getDSNVien (paramas) {
  return request({
    url: `truongphong/trangchu/${paramas}/doanhsonhanvien`,
    method: 'get',
  })
}

export function getListCV (paramas) {
  return request({
    url: `truongphong/trangchu/${paramas}/listcongviec`,
    method: 'get',
  })
}

export function getDSNgayApi (paramas) {
  return request({
    url: `truongphong/trangchu/${paramas}/doanhsongay`,
    method: 'get',
  })
}

export function getDSThangApi (paramas) {
  return request({
    url: `truongphong/trangchu/${paramas}/doanhsothang`,
    method: 'get',
  })
}

export function getDSNamApi (paramas) {
  return request({
    url: `truongphong/trangchu/${paramas}/doanhsonam`,
    method: 'get',
  })
}

export function getThongtintaikhoan (paramas) {
  return request({
    url: `truongphong/thongtinkhoan/${paramas}`,
    method: 'get',
  })
}
