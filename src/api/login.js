import http from './utils/http.js'

// 登录接口
export function login(data) {
    return http({
        url: '',
        method: 'post',
        data:data,
    })
}