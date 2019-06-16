import { request } from '@/common/utils.js'
// 获取车辆详情一级信息 
export const getCarInfos = (params) => request('/carType/selectInfoBasicById', params)
// 获取车辆详情更多信息
export const getCarEndInfos = (params) => request('/carType/selectInfoByTypeId', params)