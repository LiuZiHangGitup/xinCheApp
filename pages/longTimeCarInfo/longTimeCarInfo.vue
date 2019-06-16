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
				<text>{{ items.name }}</text>
				<text v-html="textcardetil(items.disptype, items.subvalue, items.subname, items.value)"></text>
			</view>
		</view>
	</view>
</template>

<script>
	import { getCarEndInfos } from '@/common/api/carEndInfo.js'
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
			async getLongTimeCarInfo(){
				let params = {id:this.styleId};
				try{
					let resData = await getCarEndInfos(params);
					if(resData.code === 200){
						this.neiBuPeiZhi = resData.result;
					}else{
						this.$toast(resData.message)
					}
					uni.hideLoading();
				}catch(e){
					this.$toast('请求失败');
				}
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
	padding: 0upx 30upx;
	height: 70upx;
	font-size: 26upx;
	border-bottom: 1upx solid #E8E8E8;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.carEndInfoChild text:first-child{
	color: #333333;
	margin-right: 15upx;
}
.carEndInfoChild text:last-child{
	text-overflow: ellipsis;
	overflow: hidden;
	word-wrap: normal;
	color: #909399;
}
</style>