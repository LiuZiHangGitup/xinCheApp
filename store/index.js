import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
	userName: 'admin',
	userPassword: 123456,
	token: uni.getStorageSync('token')
}
 export default new Vuex.Store({
 	state: state
 })