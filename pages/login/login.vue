
<template>
	<view id="login" :style="loginStyle">
		<view class="loginLogo">
			<image src="../../static/loginLogo.png"></image>
		</view>
		<view class="loginForm">
			<view class="userName">
				<input type="text"  placeholder="请输入用户名" v-model="username" />
			</view>
			<view class="userPassword">
				<input type="text" placeholder="请输入密码" v-model="password" />
			</view>
		</view>
		<view class="loginSubmit">
			<button type="primary" @tap="login()">登录</button>
		</view>
	</view>
</template>
<script>
	import CryptoJS from '@/common/crypto-js.js'
	export default {
		data(){
			return{
				username: '',
				password: '',
				loginStyle:""
			}
		},
		created(){
		},
		onLoad() {
		},
		methods:{
			login(){
				if(this.username == ''){
					uni.showToast({
						title: '用户名不得为空',
						icon: 'none',
						mask: false,
						duration: 1500
					});
				}else if(this.password == ''){
					uni.showToast({
						title: '密码不得为空',
						icon: 'none',
						mask: false,
						duration: 1500
					});
				}else{
					uni.showLoading({
						title: '玩命加载中',
						mask: false
					});
					// 获取当前日期
					var keys = this.$retTime();
					// 截取加密所需日期
					keys = keys.substr(2, 16);
					// 加密
					function encrypt(word,key){
						var key = CryptoJS.enc.Utf8.parse(key);
						var srcs = CryptoJS.enc.Utf8.parse(word);
						var encrypted = CryptoJS.AES.encrypt(srcs, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
						return encrypted.toString();
					}
					// 获取加密后的密码
					var pwd = encrypt(this.password,keys);
					// 请求接口
					var params={uName:this.username,pwd:pwd}
					this.$postRequest( '/login/AUTH_SHOPAPP_LOGIN', params, (request_data) =>{
						uni.hideLoading();
						if(request_data.data.code == 0){
							// 写入缓存
							uni.setStorageSync('token', request_data.data.token);
							uni.setStorageSync('uuid', request_data.data.BODY.userId);
							// 后期加Vuex
							uni.setStorageSync('merchantId', request_data.data.BODY.merchantId);
							uni.setStorageSync('marketId', request_data.data.BODY.marketId);
							uni.setStorageSync('username', request_data.data.BODY.username);
							uni.reLaunch({
								url: '../index/index'
							})
						}else{
							uni.showToast({
								title: request_data.data.msg,
								icon: 'none',
								mask: false,
								duration: 1500
							});
						}
					});
				}
			}
		}
	}
</script>
<style scoped>
	#login{
			width: 750upx;
	}
	.loginLogo{
		width: 30%;
		height: 200upx;
		margin: 50upx auto;
	}
	.loginLogo image{
		width: 100%;
		height: 100%;
	}
	.loginForm{
		width: 750upx;
		margin-top: 50upx;
	}
	.loginForm view{
		width: 60%;
		margin: 10upx auto;
		height: 70upx;
		padding: 10upx auto;
		box-sizing: border-box;
		border-bottom: 2upx solid #0066FF;
	}
	.loginForm view input{
		font-size: 25upx;
		display: inline-block;
		vertical-align: bottom;
		margin-left: 2%;
	}
	.loginSubmit{
		width: 750upx;
		height: 70upx;
		margin-top: 50upx;
	}
	.loginSubmit button{
		width: 60%;
		margin: 0 auto;
		letter-spacing: 5upx;
		transition: 0.3s all ease;
		background-color: #108ee9;
	}
	.loginSubmit button:active{
		background: #21BFFF;
	}
</style>