import request from '../../util/request'

export function getLogin () {
  return request({
    url: 'Employees/list',
    method: 'get',
  })
}

