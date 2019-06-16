
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
				<input type="password" placeholder="请输入密码" v-model="password" />
			</view>
		</view>
		<view class="loginSubmit">
			<button type="primary" @tap="loginApi()">登录</button>
		</view>
	</view>
</template>
<script>
	import CryptoJS from '@/common/crypto-js.js' // 引入加密文件
	import { login, getUserInfo, getQx } from '@/common/api/login.js'
	export default {
		data(){
			return{
				username: this.$store.state.userName,
				password: this.$store.state.userPassword,
				loginStyle:""
			}
		},
		methods:{
			// 用户登陆
			async loginApi(){
				if(this.username == ''){
					this.$toast('用户名不得为空')
				}else if(this.password == ''){
					this.$toast('密码不得为空')
				}else{
					this.$loading();
					// 获取当前日期
					var keys = this.$retTime();
					// 截取加密所需日期
					keys = keys.substr(2, 16);
					// 加密
					let encrypt = (word,key) => {
						var key = CryptoJS.enc.Utf8.parse(key);
						var srcs = CryptoJS.enc.Utf8.parse(word);
						var encrypted = CryptoJS.AES.encrypt(srcs, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
						return encrypted.toString();
					}
					// 获取加密后的密码
					var pwd = encrypt(this.password,keys);
					// 请求接口
					try{
						let resData = await login(this.username,pwd,this.$retTime())
						if(resData.code === 200){
							uni.setStorage({
								key:'token',
								data:resData.result.Authentication,
								success: () => {
									this.getUserInfoApi();
								},
								fail: () => {
									this.$toast('写入token失败')
								}
							})
						}else{
							this.$toast(resData.message);
						}
					}catch(e){
						this.$toast('请求失败')
					}
				}
			},
			// 获取用户信息
			async getUserInfoApi(){
				try{
					let resData = await getUserInfo();
					if(resData.code === 200){
						if(resData.result.merchantId != null){
							uni.setStorageSync('marketId',resData.result.marketId);
						}
						if(resData.result.merchantId == null && resData.result.marketId == null){
							uni.setStorageSync('qx','admine');
						}else if(resData.result.marketId != null && resData.result.merchantId == null){
							uni.setStorageSync('qx','market');
						}else if(resData.result.merchantId != null){
							uni.setStorageSync('qx','merchan');
							uni.setStorageSync('marketId',resData.result.marketId);
						}
						uni.setStorageSync('userId',resData.result.userId);
						uni.setStorageSync('username',resData.result.username);
						uni.setStorageSync('uuid',resData.result.uuid);
						this.getUserQx();
					}else{
						this.$toast(resData.message,false)
					}
				}catch(e){
					this.$toast('请求失败');
				}
			},
			async getUserQx(){
				let resData = await getQx();
				if(resData.code === 200){
					let qxList = [];
					if(resData.result.permissions.length === 0){
						uni.reLaunch({
							url:'../index/index'
						})
						return;
					}
					for(let i in resData.result.permissions){
						qxList.push(resData.result.permissions[i].perms);
						if(i == resData.result.permissions.length - 1){
							uni.setStorageSync('qxList',qxList);
							uni.reLaunch({
								url:'../index/index'
							})
						}
					}
				}
			}
			
		}
	}
</script>
<style scoped>
	#login{
			width: 750upx;
			box-sizing: border-box;
	}
	.loginLogo{
		width: 30%;
		height: 200upx;
		margin: 50upx auto;
		border-radius: 20upx;
	}
	.loginLogo image{
		width: 100%;
		height: 100%;
		border-radius: 20upx;
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
		font-size: 30upx;
		display: inline-block;
		vertical-align: bottom;
		margin-left: 2%;
		padding: 0upx 15upx;
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