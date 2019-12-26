import request from '@/util/request'

const date = new Date().toISOString().substr(0, 10)

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
    url: 'employee',
    data: (item),
  })
}

