import { retTime } from '@/common/retTime.js'
export const postRequest = (url,params,callback) => {
	var requestData = {
		request: {
			head: {
				appversion: "",
				channelid: "",
				date: retTime(),
				devicepixels: "",
				devicetype: "",
				ostype: "",
				osversion: "",
				serviceid: "",
				token:"",
				type:"1",
				userid:"",
				uuid:""
			},
			body:params
		}
	}
	if(url.indexOf('/login/AUTH_SHOPAPP_LOGIN') != -1){
		requestData.request.head.token = "";
		requestData.request.head.uuid = "";
		params = params
	}else if(url.indexOf('/car/multipartFile') != -1){
		requestData = params;
	}else{
		requestData.request.head.token = params.headData.token;
		requestData.request.head.userid = params.headData.uuid;
		requestData.request.body = params.bodyData;
	}
	uni.request({
		// 47.105.165.101
		// 老唐 192.168.0.254
		url: 'http://47.105.165.101:8585/xccsappserver/app' + url,
		method: 'POST',
		dataType: 'json',
		header: {'Content-Type':'application/json'},
		data: requestData,
		success: resData => {
			if(resData.data.code == 400 || resData.data.code == 401 || resData.data.code == 500 || resData.data.code == 502){
				window.location.href = "pages/login/login"
			}else{
				callback(resData);	
			}
		},
		fail: () => {},
		complete: () => {}
	});
}
