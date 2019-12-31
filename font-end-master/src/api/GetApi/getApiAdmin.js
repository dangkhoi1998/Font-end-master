import request from '../../util/request'

export function getOpportunityApi () {
  return request({
    url: 'Employees/admin/opportunity',
    method: 'get',
  })
}

export function getemployee (id) {
  return request({
    url: 'Employees/admin/nhanvien',
    method: 'get',
  })
}

export function getComment () {
  return request({
    url: 'comment',
    method: 'get',
  })
}

export function getworkApi () {
  return request({
    url: 'work',
    method: 'get',
  })
}

export function getDepartmentApi () {
  return request({
    url: 'Employees/department',
    method: 'get',
  })
}
