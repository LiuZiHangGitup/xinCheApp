import { request } from '@/common/utils.js'
// 获取车辆详情接口  /car/selectById
export const get_cars_detail_info = (params) => request('/car/selectById',params)
