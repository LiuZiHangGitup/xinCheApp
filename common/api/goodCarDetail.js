import { request } from '@/common/utils.js'
// 获取特价好车详情 /specialCar/selectById
export const get_good_car_detail = (params) => request('/specialCar/selectById',params)