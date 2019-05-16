import Vue from 'vue'
import App from './App'
import {retTime} from '@/common/retTime.js'
import { postRequest } from '@/common/ajax.js'

Vue.config.productionTip = false;

App.mpType = 'app'
// 服务器地址47.105.165.101
Vue.prototype.$ajaxUrl = 'http://192.168.0.254:8585/xccsappserver/app'; 
Vue.prototype.$retTime = retTime;
Vue.prototype.$postRequest = postRequest;
const app = new Vue({
    ...App
})
app.$mount()
