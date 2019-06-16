import { request } from '@/common/utils.js'
// 获取特价好车
export const getGoodCar = (params) => request('/specialCar/selectByMany',params)
// 获取品牌 /carBrand/SELECT_BRAND_ALL
export const getBrand = () => request('/carBrand/selectByAll',{})
// 获取车系
export const getXinCheXings = (params) => request('/carAudi/selectByBrandId',params)
// 获取指定车系下的所有车型 
export const getSelectByAudiId = (params) => request('/carType/selectByAudiId', params)