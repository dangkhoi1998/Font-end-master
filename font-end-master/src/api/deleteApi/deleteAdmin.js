import request from '@/util/request'

export function DeleteWorkToDoApi (id) {
  return request({
    url: `workToDo/${id}`,
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
