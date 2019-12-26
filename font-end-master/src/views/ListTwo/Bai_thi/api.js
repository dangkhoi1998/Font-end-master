import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:8091/api/',
})

request.interceptors.response.use(response => {
  response.data = response.data.slice(0, 10)
  return response
})
export default request

export function getApi () {
  return request({
    url: 'nhanvien',
    method: 'get',
  })
}

export function PostApi (item) {
  return request({
    method: 'post',
    url: 'nhanvien',
    data: (item),
  })
}

export function UpdateApi (item) {
  return request({
    method: 'put',
    url: `nhanvien/${item.id}`,
    data: (item),
  })
}

export function DeleteApi (item) {
  return request({
    method: 'delete',
    url: `nhanvien/${item.id}`,
  })
}
