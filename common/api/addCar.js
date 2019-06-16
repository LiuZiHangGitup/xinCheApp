import { request } from '@/common/utils.js'
// 新增车辆
export const addCar = (params) => request('/car/addCar',params)
// 获取所属市场
export const selectMarket = () => request('/market/selectMarket', {},'GET')
// 获取指定市场下的所属车商
export const selectMerchantById = (marketId) => request('/merchant/selectMerchantById', {marketId: marketId})
// 获取指定车商下的车场区域
export const getUnSigningAreaByMerchantId = (merchantId) => request('/area/getUnSigningAreaByMerchantId', {merchantId: merchantId})