import request from '../util/request'

export function getworkApi () {
  return request({
    url: 'workToDo',
    method: 'get',
  })
}

export function updateworkToDoApi (id, data) {
  return request({
    url: `workToDo/${id}`,
    method: 'put',
    data,
  })
}

export function addworkToDoApi (data) {
  return request({
    url: `workToDo`,
    method: 'post',
    data: {
      commets: this.Work.commets,
      // dateTime: Date().toISOString().substr(0, 10),
    },
  })
}
