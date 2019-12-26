import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:3000/',
})

request.interceptors.response.use(response => {
  response.data = response.data.slice(0, 10)
  return response
})
export default request
