import request from '@/util/request'

const date = new Date().toISOString().substr(0, 10)

export function UpdatePhongban (item) {
  return request({
    method: 'put',
    url: `admin/bantin/phongban/${item.idDepartment}`,
    data: (item),
  })
}

export function UpdateThongtintaikhoan (item) {
  return request({
    method: 'put',
    url: `admin/thongtintaikhoan/${item.idEmpl}`,
    data: (item),
  })
}

export function UpdateKhachhang (item) {
  return request({
    method: 'put',
    url: `admin/khachhang/${item.idEmpl}`,
    data: (item),
  })
}

export function UpdateNhanvien (item) {
  return request({
    method: 'put',
    url: `admin/nhanvien/${item.idEmpl}`,
    data: (item)
  })
}

export function UpdateCohoi (item) {
  return request({
    method: 'put',
    url: `admin/cohoi/${item.idOpportunity}`,
    data: (item)
  })
}

export function UpdateOmninchannel (item) {
  return request({
    method: 'put',
    url: `Omninchannel/${item.id}`,
    data: (item),
  })
}

export function UpdateOpportunity (item) {
  return request({
    method: 'put',
    url: `Opportunity/${item.id}`,
    data: (item),
  })
}

export function UpdateEmployee (item) {
  return request({
    method: 'put',
    url: `employee/${item.id}`,
    data: (item),
  })
}
