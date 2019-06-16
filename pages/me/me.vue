<style scoped>
	#me{
		margin: 0;
		padding: 0;
		width: 750upx;
		background: #f3f3f3;
		padding-top: 20upx;
		box-sizing: border-box;
	}
	.meTop{
		width: 610upx;
		margin: 0 auto;
		background-color: #FFFFFF;
		margin-top: 20upx;
		height: 130upx;
		padding: 50upx;
		font-size: 30upx;
	}
	.meTopLeft{
		display: flex;
		line-height: 130upx;
		float: left;
	}
	.meTopLeft image{
		width: 130upx;
		height: 130upx;
		border-radius: 50%;
		margin-right: 20upx;
	}
	.meTopRight{
		float: right;
	}
	.meTopRight text:first-child{
		font-weight: bold;
		color: #606266 !important;
	}
	.meTopRight text{
		color: #909399;
	}
	.meTopSecond{
		width: 670upx;
		margin: 20upx auto;
		background-color: #FFFFFF;
		height: 50upx;
		padding: 20upx 20upx;
		font-size: 30upx;
	}
	.meTopSecondLeft{
		float: left;
		line-height: 50upx;
	}
	.meTopSecondLeft image{
		width: 30upx;
		height: 30upx;
		margin-right: 20upx;
	}
	.meTopSecondRight{
		line-height: 50upx;
		color: #909399;
		float: right;
	}
	.meBody{
		width: 670upx;
		margin: 0 auto;
		background-color: #FFFFFF;
		margin-top: 20upx;
		padding: 0upx 20upx;
		font-size: 30upx;
	}
	.meBody{
		width: 670upx;
		padding: 0upx 20upx;
		background: #FFFFFF;
	}
	.meBody:last-child{
		margin-top: 20upx;
	}
	.meBodyChild{
		width: 670upx;
		border-bottom: 1upx solid #E8E8E8;
		font-size: 30upx;
		height: 90upx;
		line-height: 90upx;
	}
	.meBodyChild:last-child{
		border: none !important;
	}
	.meBodyChildLeft{
		float: left;
	}
	.meBodyChildLeft image{
		width: 30upx;
		height: 30upx;
		margin-right: 20upx;
	}
	.meBodyChildRight{
		color: #909399;
		float: right;
	}
	.goOut{
		width: 700upx;
		margin: 30upx auto;
		
	}
</style>

<template>
	<view id="me">
		<view class="meTop">
			<view class="meTopLeft">
				<image src="../../static/user_pic.png"></image>
				<text>{{ userData.username }}</text>
			</view>
			<view class="meTopRight">
				<text>{{ userData.score }}</text><br>
				<text>信用</text><br>
				<text>评测</text>
			</view>
		</view>
		<view class="meTopSecond">
			<view 
				class="meTopSecondLeft"
				@tap="$goWindow('../myMsg/myMsg')"
				v-if="$qx('userInfo')">
				<image src="../../static/me/market.png"></image>
				<text>我的消息</text>
			</view>
			<view class="meTopSecondRight"></view>
		</view>
		<view class="meBody">
			<view class="meBodyChild">
				<view class="meBodyChildLeft">
					<image src="../../static/me/solid-shop-name.png"></image>
					<text>店铺名称</text>
				</view>
				<view class="meBodyChildRight">
					{{ userData.marketName }}
				</view>
			</view>
			<view class="meBodyChild">
				<view class="meBodyChildLeft">
					<image src="../../static/me/svg_introduction.png"></image>
					<text>店铺简介</text>
				</view>
				<view class="meBodyChildRight">
					{{ userData.merchantAbbreviation }}
				</view>
			</view>
			<view class="meBodyChild">
				<view class="meBodyChildLeft">
					<image src="../../static/me/phone.png"></image>
					<text>店铺电话</text>
				</view>
				<view class="meBodyChildRight">
					{{ userData.merchantPhone }}
				</view>
			</view>
			<view class="meBodyChild">
				<view class="meBodyChildLeft">
					<image src="../../static/me/market.png"></image>
					<text>所属市场</text>
				</view>
				<view class="meBodyChildRight">
					{{ userData.marketName }}
				</view>
			</view>
			<view class="meBodyChild">
				<view class="meBodyChildLeft">
					<image src="../../static/me/address.png"></image>
					<text>店铺地址</text>
				</view>
				<view class="meBodyChildRight">
					{{ userData.merchantAddress }}
				</view>
			</view>
		</view>
		<view class="meBody">
			<view class="meBodyChild">
				<view class="meBodyChildLeft">
					<image src="../../static/me/more_geren.png"></image>
					<text>注册地址</text>
				</view>
				<view class="meBodyChildRight">
					{{ userData.merchantRegister }}
				</view>
			</view>
			<view class="meBodyChild">
				<view class="meBodyChildLeft">
					<image src="../../static/me/license.png"></image>
					<text>营业执照号码</text>
				</view>
				<view class="meBodyChildRight">
					{{ userData.licenseCode }}
				</view>
			</view>
			<view class="meBodyChild">
				<view class="meBodyChildLeft">
					<image src="../../static/me/phoneFaRen.png"></image>
					<text>法人电话</text>
				</view>
				<view class="meBodyChildRight">
					{{ userData.corporationPhone }}
				</view>
			</view>
			<view class="meBodyChild">
				<view class="meBodyChildLeft">
					<image src="../../static/me/name.png"></image>
					<text>法人代表姓名</text>
				</view>
				<view class="meBodyChildRight">
					{{ userData.corporationName }}
				</view>
			</view>
		</view>
		<view class="goOut">
			<button type="primary" @tap="goOutLogin()">退出登录</button>
		</view>
	</view>
</template>

<script>
	import { getMeInfo } from '@/common/api/me.js'
	export default {
		data() {
			return {
				userData:{}
			}
		},
		onLoad(){
			this.getUserInformation();
		},
		methods: {
			// 查询用户个人信息
			async getUserInformation(){
				try{
					let resData = await getMeInfo();
					if(resData.code === 200){
						this.userData = resData.result;
					}else{
						this.$toast(resData.message);
					}
				}catch(e){
					this.$toast('请求失败');
				}
			},
			// 退出登录
			goOutLogin(){
				uni.clearStorage();
				uni.reLaunch({
					url:'../login/login'
				})
			}
		}
	}
</script>

<style>

</style>
