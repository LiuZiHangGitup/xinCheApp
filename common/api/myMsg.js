import { request } from '@/common/utils.js'
// 获取个人信息列表  /messageInfo/selectByMany
export const getMyMsg = (parmas) => request('/messageInfo/selectByMany',parmas)