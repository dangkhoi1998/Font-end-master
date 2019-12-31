import request from '../../util/request'

export function getTaskApi () {
  return request({
    url: 'Employees/8/opportunity',
    method: 'get',
  })
}

export function updateCohoiApi (id, data) {
  return request({
    url: `/cohoi1/${id}`,
    method: 'put',
    data,
  })
}

export function getworkApi () {
  return request({
    url: '/work',
    method: 'get',
  })
}

export function getworToDokApi () {
  return request({
    url: 'workToDo',
    method: 'get',
  })
}
