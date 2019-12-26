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