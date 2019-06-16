import { request } from '@/common/utils.js'
// 获取个人信息详情    /messageInfo/readMsg
export const getMyMsgInfo = (parmas) => request('/messageInfo/readMsg',parmas)