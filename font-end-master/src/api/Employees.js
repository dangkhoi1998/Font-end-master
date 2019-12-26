import request from '../util/request'

export function getEmployeeApi () {
  return request({
    url: 'employee',
    method: 'get',
  })
}

export function updateEmployeeApi (id, data) {
  return request({
    url: `employee/${id}`,
    method: 'put',
    data,
  })
}

export function DelteEmployeeApi (id, data) {
  return request({
    url: `employee/${id}`,
    method: 'delete',
    data,
  })
}

export function addEmployeelApi (data) {
  return request({
    url: `employee`,
    method: 'post',
    data: {
      name_cus: this.items.name_cus,
      email: this.items.email,
    },
  })
}
