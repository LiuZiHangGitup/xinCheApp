import { request } from '@/common/utils.js'
export const getWisdom = (params) => request('/cars/selectByMany',params)  