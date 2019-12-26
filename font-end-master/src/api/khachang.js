import request from '../util/request'

export function getOmninchannelApi () {
  return request({
    url: 'Omninchannel',
    method: 'get',
  })
}

export function updateOmninchannelApi (id, data) {
  return request({
    url: `Omninchannel/${id}`,
    method: 'put',
    data,
  })
}

export function addOmninchannelApi (data) {
  return request({
    url: `Omninchannel`,
    method: 'post',
    data: {
      name_cus: this.items.name_cus,
      email: this.items.email,
    },
  })
}