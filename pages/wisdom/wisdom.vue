<style scoped>
*{
	margin: 0;
	padding: 0;
}
#wisdom{
	width: 750upx;
	background: #FFFFFF;
}
.wisdomChild{
	width: 750upx;
	padding: 15upx 25upx;
	align-items: center;
	border-bottom: 1upx solid #E8E8E8;
	font-size: 30upx;
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
}
.wisdomChildName{
	width: 300upx;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	line-clamp: 2;
	-webkit-box-orient: vertical;
}
.wisdomChildPhone{
	color: #0066FF;
}
.goodCarNum{
	width: 750upx;
	text-align: center;
	color: #909399;
	clear: both;
	background: #FFFFFF;
	font-size: 30upx;
	height: 70upx;
	line-height: 70upx;
}
</style>

<template>
	<view id="wisdom">
		<view class="wisdomChild" v-for="(item,index) in yingXiaoList" :key="index">
			<text class="wisdomChildName">{{ item.carTitle }}</text>
			<text class="wisdomChildPhone" @tap="getPhone(item.linkmanPhone)">电话：{{ item.linkmanPhone }}</text>
		</view>
		<view class="goodCarNum">
			{{ ifHaveGoodCar }}
		</view>
	</view>
</template>

<script>
	import { getWisdom } from '@/common/api/wisdom.js'
	export default {
		data() {
			return {
				ifHaveGoodCar: '上划加载',
				yingXiaoData:{
					pageSize:20,
					pageNum:1
				},
				yingXiaoList:[]
			}
		},
		onLoad(){
			this.getYingXiao();
		},
		// 上滑加载特价好车列表
		onReachBottom(){
			this.yingXiaoData.pageNum++;
			this.getYingXiao();
		},
		methods: {
			// 获取智慧营销车辆
			async getYingXiao(){
				if(this.ifHaveGoodCar == '已经是全部数据了'){
					this.ifHaveGoodCar = '已经是全部数据了';
				}else{
					this.ifHaveGoodCar = '正在加载...';
					// this.yingXiaoData;
					try{
						let resData = await getWisdom(this.yingXiaoData);
						if(resData.code === 200){
							this.goodCarTotal = resData.result.total;
							this.yingXiaoList = this.yingXiaoList.concat(resData.result.list);
							if(resData.result.hasNextPage == false){
								this.ifHaveGoodCar = '已经是全部数据了';
							}else{
								this.ifHaveGoodCar = '上拉加载';
							}
						}else{
							this.$toast(resData.message);
						}
					}catch(e){
						this.$toast('请求失败');
					}
				}
			},
			getPhone(phoneNumber){
				uni.makePhoneCall({
					phoneNumber: phoneNumber
				});
			}
		}
	}
</script>
