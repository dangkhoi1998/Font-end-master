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

export function DeleteNhanvien (item) {
  return request({
    method: 'delete',
    url: `admin/nhanvien/${item.idEmpl}`,
  })
}


export function DeleteCohoi (item) {
  return request({
    method: 'delete',
    url: `admin/cohoi/${item.idOpportunity}`,
  })
}

export function DeleteCommentNhanvien (item) {
  return request({
    method: 'delete',
    url: `admin/nhanvien/comment/${item}`,
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
