import request from '@/util/request'

const date = new Date().toISOString().substr(0, 10)

export function UpdatetWorkToDo (item) {
  return request({
    method: 'put',
    url: `workToDo/${item.id}`,
    data: {
      commets: `${item.commets}`,
      date: date,
    },
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
