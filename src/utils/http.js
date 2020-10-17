import axios from 'axios'

const config = {
    baseURL: '', // api的base_url
    timeOut: 5*60*1000,
    //是否是跨域请求，
    //withCredentials: true,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    responseType: 'json'
};

const http = axios.create(config);

// 添加请求拦截器
http.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
http.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });




export  default http;