import { request } from '@/common/utils.js'
// 获取月份统计 /appDataStatistics/getAppCarDataByMonth
export const getMonthData = (params) => request('/appDataStatistics/getAppCarDataByMonth', params)

// 获取当日数据统计 /appDataStatistics/getAppCarDataByDay
export const getDateData = (parmas) => request('/appDataStatistics/getAppCarDataByDay', parmas)