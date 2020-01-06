import request from '@/util/request'

const date = new Date().toISOString().substr(0, 10)

export function PostPhongban (item) {
  return request({
    url: 'admin/bantin/phongban/',
    method: 'post',
    data: (item)
  })
}

export function PostCongviec (item) {
  return request({
    url: 'admin/bantin/listcongviec/',
    method: 'post',
    data: (item)
  })
}

export function PostKhachhang (item) {
  return request({
    url: 'admin/khachhang/',
    method: 'post',
    data: (item)
  })
}

export function PostWorkToDo (item) {
  return request({
    method: 'post',
    url: 'workToDo',
    data: {
      commets: `${item.commets}`,
      date: date,
    },
  })
}

export function PostOmninchannel (item) {
  return request({
    method: 'post',
    url: 'Omninchannel',
    data: (item),
  })
}

export function PostOpportunityApi (item) {
  return request({
    method: 'post',
    url: 'Opportunity',
    data: (item),
  })
}

export function PostEmployee (item) {
  return request({
    method: 'post',
    url: 'Employees',
    data: (item)
  })
}

export function PostDepartment (item) {
  return request({
    method: 'post',
    url: 'Employees/department',
    data: (item)
  })
}
