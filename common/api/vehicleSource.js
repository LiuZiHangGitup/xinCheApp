import { request } from '@/common/utils.js'

// 车辆管理获取所有个人车辆
export const getMeAllCars = (params) => request('/car/selectByMany',params)

// 修改车辆状态 car/updateCarStateById
export const upDateCarState = (params) => request('/car/updateCarStateById',params)
