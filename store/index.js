import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
	userName: '',
	userPassword: '',
	token: uni.getStorageSync('token')
}
 export default new Vuex.Store({
 	state: state
 })