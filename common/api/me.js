import { request } from '@/common/utils.js'
export const getMeInfo = () => request('/sys/user/info',{},'GET')