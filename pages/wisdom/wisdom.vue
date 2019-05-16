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
	height: 90upx;
	width: 750upx;
	padding: 0 25upx;
	line-height: 90upx;
	border-bottom: 1upx solid #E8E8E8;
	font-size: 30upx;
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
}
.wisdomChildName{
	width: 300upx;
	overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap
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
	export default {
		data() {
			return {
				ifHaveGoodCar: '上划加载',
				yingXiaoData:{
					rows:20,
					page:1
				},
				yingXiaoList:[]
			}
		},
		onLoad(){
			this.getYingXiao();
		},
		// 上滑加载特价好车列表
		onReachBottom(){
			this.yingXiaoData.page++;
			this.getYingXiao();
		},
		methods: {
			// 获取智慧营销车辆
			// 获取特价好车
			getYingXiao(){
				if(this.ifHaveGoodCar == '已经是全部数据了'){
					this.ifHaveGoodCar = '已经是全部数据了';
				}else{
					this.ifHaveGoodCar = '正在加载...';
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
					params.bodyData = this.yingXiaoData;
					this.$postRequest('/getShopClueInfo/CLUE_INFO_GET',params, (resData) => {
						if(this.yingXiaoList == resData.data.body.total){
							this.ifHaveGoodCar = '已经是全部数据了';
						}else{
							if(resData.data.code == 0){
								this.goodCarTotal = resData.data.body.total;
								this.yingXiaoList = this.yingXiaoList.concat(resData.data.body.rows);
								if(this.yingXiaoList.length == resData.data.body.total){
									this.ifHaveGoodCar = '已经是全部数据了';
								}else{
									this.ifHaveGoodCar = '上拉加载';
								}
							}else{
								uni.showToast({
									title: resData.data.msg,
									mask: false,
									icon: 'none',
									duration: 1500
								});
							}
						}
					})
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
