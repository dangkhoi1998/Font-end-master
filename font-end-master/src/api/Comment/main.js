import request from '../../util/request'

export function getComment () {
  return request({
    url: 'comment',
    method: 'get',
  })
}

export function PostComment (item) {
  return request({
    url: 'comment',
    method: 'post',
    data: (item),
  })
}

export function DeleteComment (item) {
  return request({
    url: `comment/${item.id}`,
    method: 'delete',
  })
}
