<style scoped>
	#login{
		font-size: 30upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 50upx;
		box-sizing: border-box;
	}
	.login-img{
		width: 200upx;
		height: 200upx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 30upx;
	}
	.login-img image{
		width: 100%;
		height: 100%;
	}
	.login-number{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center; 
		margin-top: 30upx;
	}
	.inp_box{
		width: 500upx;
		height: 70upx;
		margin-top: 20upx;
		display: flex;
		transition: 0.3s all ease;
		align-items: center;
		justify-content: space-between;
	}
	.border_bottom{
		border-bottom: 6upx solid #E8E8E8;
	}
	.inp_box:first-child{
		margin-top: 30upx;
	}
	.inp_box:last-child{
		margin-top: 60upx;
		height: 100upx;
	}
	.inp_box>input{
		height: 100%;
		width: 100%;
		box-sizing: border-box;
		flex: 0.85;
	}
	.inp_box>image{
		flex: 0.08;
		height: 40upx;
	}
	.input_choose{
		border-bottom: 6upx solid #108EE9 !important;
	}
	.inp_end{
		width: 500upx;
		height: 90upx;
		margin-top: 50upx;
	}
	.inp_end>button{
		width: 100%;
		height: 100%;
		border-radius: 45upx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 26upx;
	}
	.end_phone{
		margin-top: 500upx;
		height: 100upx;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #108EE9;
		font-size: 35upx;
		font-weight: bold;
	}
	.end_phone>image{
		width: 35upx;
		height: 35upx;
		margin-right: 15upx;
	}
</style>
<template>
	<view id="login">
		<view class="login-img">
			<image src="../../static/loginLogo.png"></image>
		</view>
		<view :class="[indexState == 0?'input_choose':'','inp_box','border_bottom']"  @tap="chooseIndex(0)">
			<image src="../../static/userName.png" mode=""></image>
			<input type="text" placeholder="请输入账号" :placeholder-style="placeholderStyle" v-model="username"/>
		</view>
		<view :class="[indexState == 1?'input_choose':'','inp_box','border_bottom']" @tap="chooseIndex(1)">
			<image src="../../static/passWord.png" mode=""></image>
			<input type="password" placeholder="请输入密码" :placeholder-style="placeholderStyle" v-model="password" />
		</view>
		<view class="inp_end">
			<button class="login-button" type="primary"  @tap="loginApi()">登陆</button>
		</view>
		<view class="end_phone" @tap="$goPhone('010-5226-9086')">
			<image src="../../static/phone.png" mode=""></image>
			010-5226-9086
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
				loginStyle:"",
				indexState:'0',
				placeholderStyle:'letter-spacing: 3upx; color:#939393'
			}
		},
		methods:{
			chooseIndex(index){
				this.indexState = index;
			},
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
			// 处理用户权限
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
