import request from '../../util/request'

export function getOpportunityApi () {
  return request({
    url: 'Opportunity',
    method: 'get',
  })
}

export function getemployee () {
  return request({
    url: 'employee',
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
