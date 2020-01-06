import request from '@/util/request'

export function DeletePhongban (item) {
  return request({
    url: `admin/bantin/phongban/${item.idDepartment}`,
    method: 'delete',
  })
}

export function DeleteKhachhang (item) {
  return request({
    url: `admin/khachhang/${item.idCus}`,
    method: 'delete',
  })
}

export function DeleteOmninchannel (item) {
  return request({
    method: 'delete',
    url: `Omninchannel/${item.id}`,
  })
}

export function DeleteOpportunity (item) {
  return request({
    method: 'delete',
    url: `Opportunity/${item.id}`,
  })
}

export function DeleteEmployee (item) {
  return request({
    url: `employee/${item.id}`,
    method: 'delete',
  })
}

export function DeleteDepartment (item) {
  return request({
    url: `Employees/department/${item.idDepartment}`,
    method: 'delete',
  })
}
