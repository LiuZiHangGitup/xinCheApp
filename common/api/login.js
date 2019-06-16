import { request } from '@/common/utils.js'
// 登陆接口
export const login = (uName,pwd,date) => request('/login/AUTH_SHOPAPP_LOGIN',{
	username:uName,
	password:pwd,
	date:date
})
// token换取用户信息sys/user/getUserByToken
export const getUserInfo = (token) => request('/sys/user/getUserByToken',{},'GET')
// 获取用户权限 /sys/menu/appNav
export const getQx = () => request('/sys/menu/appNav',{},'GET')