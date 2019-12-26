import request from '../util/request'

export function getOpportunityApi () {
  return request({
    url: 'Opportunity',
    method: 'get',
  })
}

export function updateOpportunityApi (id, data) {
  return request({
    url: `Opportunity/${id}`,
    method: 'put',
    data,
  })
}

export function addOpportunityApi (item) {
  return request({
    method: 'post',
    url: 'Opportunity',
    data: {
      cus_Name: `${item.cus_Name}`,
      phone_Num: `${item.phone_Num}`,
      pro_Name: `${item.pro_Name}`,
      email: `${item.email}`,
      amountt: `${item.amountt}`,
      price: `${item.price}`,
      date_of_purchase: `${item.date_of_purchase}`,
      id_empl: `${item.id_empl}`,
      delivery: `${item.delivery}`,
      source: `${item.source}`,
      status: `${item.status}`,
    },
  })
}
