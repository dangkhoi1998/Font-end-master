import request from '../../util/request'

export function getChot () {
  return request({
    url: 'admin/bantin/trangthai/chot',
    method: 'get',
  })
}

export function getHengoilai  () {
  return request({
    url: 'admin/bantin/trangthai/hengoilai ',
    method: 'get',
  })
}

export function getChuachot  () {
  return request({
    url: 'admin/bantin/trangthai/chuachot',
    method: 'get',
  })
}

export function getDoanhsonhanvienthang () {
  return request({
    url: 'admin/bantin/doanhsonhanvienthang',
    method: 'get',
  })
}

export function getPhongban () {
  return request({
    url: 'admin/bantin/phongban/',
    method: 'get',
  })
}

export function getCongvec () {
  return request({
    url: 'admin/bantin/listcongviec/',
    method: 'get',
  })
}

export function getCohoi () {
  return request({
    url: 'admin/cohoi',
    method: 'get',
  })
}

export function getNhanvien () {
  return request({
    url: 'admin/nhanvien',
    method: 'get',
  })
}

export function getKhachhang () {
  return request({
    url: 'admin/khachhang',
    method: 'get',
  })
}

export function getThongtintaikhoan () {
  return request({
    url: 'Admin/thongtintaikhoan',
    method: 'get',
  })
}

export function getThongtintaikhoan1 (id) {
  return request({
    url: `nhanvien/thongtintaikhoan/${id}`,
    method: 'get',
  })
}
