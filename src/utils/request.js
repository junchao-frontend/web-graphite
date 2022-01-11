import axios from 'axios'

const service = axios.create({
     baseURL: 'http://192.144.205.90:7008/',  // 美锦 的 base_url
    // baseURL: 'http://127.0.0.1:7008/',
    timeout: 2000000 // 请求超时时间
})

service.interceptors.request.use(
    config => {
        var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1ZDI4NTYwOTQ3MzFhMzUwZDRkYWQ3ODIiLCJpYXQiOjE2NDE4MDA2MTYwNTgsImV4cCI6MTY0MjQwNTQxNjA1OH0.R0w1D7YrJQ2BwsaAfG57RZgXmcqzgh0yTZ2f4-lTr0A'
        if (token) {
            config.headers['token'] = token // 让每个请求携带自定义token 请根据实际情况自行修改
        }
        return config
    },
    error => {
        // Do something with request error
        // console.log(error) // for debug
        Promise.reject(error)
    }
)
export default service