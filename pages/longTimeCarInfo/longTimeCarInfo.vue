<template>
	<view id="carEndInfo">
		<view class="topFixed">
			参数配置（配置状况：●标配○选配 - 无）
		</view>
		<view class="topMagin" v-for="(item,index) in neiBuPeiZhi" :key="index">
			<view class="carEndInfoChildTop">
				{{ item.typeMame }}
			</view>
			<view class="carEndInfoChild" v-for="(items,indexs) in item.typeValue" :key="indexs">
				{{ items.name }}:&nbsp;&nbsp;{{ textcardetil(items.disptype, items.subvalue, items.subname, items.value) }}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 内部配置
				neiBuPeiZhi:[],
				styleId:0
			}
		},
		onLoad(params) {
			this.styleId = params.styleId;
			this.getLongTimeCarInfo();
		},
		methods: {
			// 文字处理
			textcardetil (disptype, subvalue, subname, value) {
				if (disptype == 1 && subvalue == 1) {
					return '●' + subname
				}
				if (disptype == 1 && subvalue == 2) {
					return '○' + subname
				}
				if (disptype == 0) {
				return value
				}
			},
			// 获取长时间车辆信息接口
			getLongTimeCarInfo(){
				uni.showLoading({
					title: '正在加载请稍后',
					mask: true
				});
				var params = {
					headData:{
						token:'',
						uuid:''
					},
					bodyData:{}
				}
				uni.getStorage({
					key: 'token',
					success: (res) => {
						params.headData.token = res.data;
					}
				})
				uni.getStorage({
					key:'uuid',
					success: (res) => {
						params.headData.uuid = res.data;
					}
				})
				params.bodyData = {styleId:this.styleId};
				this.$postRequest('/cars/GET_CAR_DETAILED_INFO',params, (resData) => {
					if(resData.data.code == 0){
						this.neiBuPeiZhi = resData.data.body;
						uni.hideLoading();
					}else{
						uni.showToast({
							title: resData.data.msg,
							icon: 'none',
							mask: false,
							duration: 1500
						});
					}
				})
			}
		}
	}
</script>
<style scoped>
*{
margin: 0;
padding: 0;
}
.topFixed{
	width: 750upx;
	background-color: #FFFFFF;	height: 70upx;
	line-height: 70upx;
	padding-left: 30upx;
	font-size: 26upx;
	position: fixed;
	box-sizing: border-box;
	z-index: 2;
	top: 0upx;
	left: 0upx;
	right: 0upx;
}
#carEndInfo{
width: 750upx;
padding-top: 70upx;
}
.carEndInfoChildTop{
width: 750upx;
height: 60upx;
line-height: 60upx;
background-color: #E8E8E8;
font-size: 26upx;
padding-left: 30upx;
box-sizing: border-box;
}
.topMagin:nth-child(1){
	margin-top: 70upx;
}
.carEndInfoChild{
width: 750upx;
padding-left: 30upx;
height: 70upx;
line-height: 70upx;
font-size: 26upx;
border-bottom: 1upx solid #E8E8E8;
box-sizing: border-box;
}
.carEndInfoChild text:first-child{
color: #333333;
margin-right: 15upx;
}
.carEndInfoChild text:last-child{
width: 500upx;
text-overflow: ellipsis;
overflow: hidden;
word-wrap: normal;
color: #909399;
}
</style>