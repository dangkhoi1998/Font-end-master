import request from '@/util/request'

const date = new Date().toISOString().substr(0, 10)

export function UpdateOpportunity (item) {
  return request({
    method: 'put',
    url: `Opportunity/${item.id}`,
    data: {
      stt: `${item.stt}`,
    },
  })
}
