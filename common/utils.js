// const baseUrl = 'http://192.168.0.222:8083/xinche';
// const baseUrl = 'http://192.168.0.226:8383/xinche';
// const baseUrl = 'http://192.168.0.250:8383/xinche';
//const baseUrl = 'http://192.168.0.254:8383/xinche';
// const baseUrl = 'http://192.168.0.254:8484/xinche';
const baseUrl = 'http://192.168.0.250:8383/xinche';
const uploadImageUrl = 'http://192.168.0.254:8383/xinche/upload/multipartFile';
// const uploadImageUrl = 'http://192.168.0.250:8383/xinche/upload/multipartFile'
// request 封装  后期修改  uni.request 本身自带Promise
let request = (url,params,type) => {
	return new Promise((reslove,reject) => {
		getToken();
		let token = {}
		if(uni.getStorageSync('token')){
			token = uni.getStorageSync('token')
		}
		if(url == '/login/AUTH_SHOPAPP_LOGIN'){
			url = '/app' + url;
		}
		let typeState = 'POST';
		if(type){
			typeState = type
		}
		uni.request({
			url: baseUrl + url,
			method:typeState,
			data:params,
			dataType:'json',
			header:{'Authentication':token},
			success: (resData) => {
				if(resData.statusCode !== 200){
					goWindow('../login/login')
					toast('服务器错误')
					reject(new Error())
				}else if(resData.data.code == 401){
					goWindow('../login/login')
					toast('身份已过期,请重新登录')
					reject(new Error())
				}else{
					reslove(resData.data);	
				}
			}
		})
	})
}
// 封装弹窗
let toast = (msg) => {
	uni.showToast({
		title:msg,
		icon:'none',
		position:'bottom',
		mask:false
	})
}
// 封装页面跳转
let goWindow = (url) => {
	uni.navigateTo({url:url})
}
// 查询用户是否已登录未登录调回登录页
let getToken = () => {
	if(!uni.getStorageSync('token')){
		uni.reLaunch({
			url:'../login/login'
		})
	}
}
// 封装加载框
let loading = () => {
	uni.showLoading({
		title: '加载中...',
		mask: true
	});
}
// 当前时间转换
let retTime = () => {
	var date = new Date();
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	m = m < 10 ? ('0' + m) : m;
	var d = date.getDate();
	d = d < 10 ? ('0' + d) : d;    
	var h = date.getHours();  
	h = h < 10 ? ('0' + h) : h;  
	var minute = date.getMinutes();  
	var second = date.getSeconds();  
	minute = minute < 10 ? ('0' + minute) : minute;
	second = second < 10 ? ('0' + second) : second;
	
	return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;
}
// 封装跳转tab页面
let goNavWindow = (url) => {
	uni.switchTab({
		url: url
	})
}
// 封装打电话事件
let goPhone = (phone) =>{
	uni.makePhoneCall({phoneNumber:phone})
}
// 封装打电话事件
let qx = (qx) =>{
	for(let i in uni.getStorageSync('qxList')){
		if(uni.getStorageSync('qxList')[i] == qx){
			return true;
			break;
		}
		if(i == uni.getStorageSync('qxList').length && uni.getStorageSync('qxList')[i] != qx){
			return false;
			break;
		}
	}
}

module.exports = {
	request:request,
	toast:toast,
	retTime:retTime,
	loading:loading,
	qx:qx,
	goPhone:goPhone,
	goWindow:goWindow,
	goNavWindow:goNavWindow,
	getToken:getToken,
	uploadImageUrl:uploadImageUrl
}
