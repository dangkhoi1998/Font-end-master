import request from '../util/request'

export function getDepartmentApi () {
  return request({
    url: 'department',
    method: 'get',
  })
}
export function getEmployeeApi () {
  return request({
    url: 'employee',
    method: 'get',
  })
}

export function getworToDokApi () {
  return request({
    url: 'workToDo',
    method: 'get',
  })
}

export function getworkApi () {
  return request({
    url: 'work',
    method: 'get',
  })
}

export function getRevenueApi () {
  return request({
    url: 'revenue',
    method: 'get',
  })
}
