import Vue from 'vue'
import App from './App'
import store from './store'
import { getToken, toast, loading, retTime, goWindow, goNavWindow, goPhone, qx, uploadImageUrl } from '@/common/utils.js' 

Vue.config.productionTip = false;

App.mpType = 'app'
// 服务器地址47.105.165.101
Vue.prototype.$store = store;
Vue.prototype.$retTime = retTime;
Vue.prototype.$ajaxUrl = 'http://47.105.165.101:8585/xccsappserver/app'; 
Vue.prototype.$getToken = getToken;
Vue.prototype.$toast = toast;
Vue.prototype.$loading = loading;
Vue.prototype.$goWindow = goWindow;
Vue.prototype.$goNavWindow = goNavWindow;
Vue.prototype.$goPhone = goPhone;
Vue.prototype.$qx = qx;
// 上传图片接口地址
Vue.prototype.$uploadImageUrl = uploadImageUrl;
const app = new Vue({
    ...App
})
app.$mount()
