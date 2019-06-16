<style scoped>
*{
	margin: 0;
	padding: 0;
}
#carInformation{
	width: 750upx;
	background-color: #E8E8E8;
}
.topFixed{
	position: fixed;
	z-index: 2;
	top: 150upx;
	left: 0upx;
	right: 0upx;
	display: flex;
	justify-content: space-between;
	padding: 0upx 20upx;
	box-sizing: border-box;
}
.topFixedLeft{
	display: flex;
	justify-content:center;
	align-items:center;
}
.goBack image{
	width: 40upx;
	height: 40upx;
}
.bianHao{
	height: 50upx;
	line-height: 50upx;
	background-color: rgba(0,0,0,0.3);
	font-size: 24upx;
	border-radius: 25upx;
	padding: 5upx 15upx;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #FFFFFF;
}
.fenxiang{
	height: 40upx;
	line-height: 40upx;
	background-color: rgba(0,0,0,0.3);
	font-size: 24upx;
	border-radius: 25upx;
	padding: 5upx 15upx;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #FFFFFF;
}
.carInfoTop,swiper,swiper-item,.swiper-item,.swiperImg{
	width: 750upx;
	height: 500upx;
}
.carInfoBody{
	width: 750upx;
	padding: 20upx 30upx;
	background-color: #FFFFFF;
	margin-top: 10upx;
	box-sizing: border-box;
}
.carInfoBodyTop{
	line-height: 50upx;
	display: flex;
	align-items: center;
}
.carInfoBodyTopLeft{
	display: inline-block;
	width: 124upx;
	text-align: center;
	background: #007AFF;
	color: #FFFFFF;
	height: 50upx;
	float: left;
	margin-right: 20upx;
	font-size: 26upx;
}
.carInfoBodyTopRight{
	font-size: 30upx;
}
.carInfoBodyBody{
	display: flex;
	justify-content: space-between;
	margin-top: 15upx;
	line-height: 50upx;
}
.carInfoBodyBodyLeft{
	font-size: 24upx;
}
.carInfoBodyBodyRight{
	font-size: 40upx;
	color: #108EE9;
}
.carInfoBodyFoot{
	color: #E8E8E8;
	font-size: 26upx;
}
.info{
	width: 750upx;
	background-color: #FFFFFF;
	margin-top: 10upx;
	border-left: 1upx solid #E8E8E8;
	border-bottom: 1upx solid #E8E8E8;
	text-align: center;
	display: flex;
	flex-wrap: wrap;
}
.infoChild{
	width: 33%;
	height: 180upx;
	box-sizing: border-box1;
	border-right: 1upx solid #E8E8E8;
	border-bottom:  1upx solid #E8E8E8;
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
}
.infoChild-item{
	width: 100%;
	text-align: center;
	font-size: 30upx;
}
.infoChild-item text{
	display: block;
}
.infoChild-item text:last-child{
	margin-top: 10upx;
	color: #909399;
}
.more{
	width: 750upx;
	height: 70upx;
	line-height: 70upx;
	background: #FFFFFF;
	text-align: center;
	font-size: 30upx;
}
.foot{
	width: 750upx;
}
.footChild{
	width: 750upx;
	padding-left: 30upx;
	box-sizing: border-box;
	height: 70upx;
	line-height: 70upx;
	background-color: #FFFFFF;
	font-size: 26upx;
}
.footChild:nth-child(1),.footChild:nth-child(3){
	background-color: #E8E8E8;
}
</style>
<template>
	<view id="carInformation">
		<view class="topFixed">
			<view class="topFixedLeft">
				<!-- <view class="goBack" @tap="goBack()">
					<image src="../../static/goBack.png" mode=""></image>
				</view> -->
				<view class="bianHao">
					编号:{{ carData.vin }}
				</view>
			</view>
			<!-- <view class="topFixedRight">
				<view class="goBack" @tap="goPhone()">
					<image src="../../static/phone.png" mode=""></image>
				</view>
			</view> -->
		</view>
		<view class="carInfoTop">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
				<swiper-item v-for="(item,index) in carData.coverUrl" :key="index">
					<view class="swiper-item">
						<image class="swiperImg" :src="item" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="carInfoBody">
			<view class="carInfoBodyTop">
				<text class="carInfoBodyTopLeft">信车认证</text>
				<text class="carInfoBodyTopRight">{{ carData.typeId }}</text>
			</view>
			<view class="carInfoBodyBody">
				<text class="carInfoBodyBodyLeft">{{carData.licensedAt}} | {{carData.mileage}}万公里</text>
				<text class="carInfoBodyBodyRight">
					<block v-if="carData.onlinePriceCents == null">零售价：暂无</block>
					<block v-else>零售价：{{ carData.onlinePriceCents }}万</block>
				</text>
			</view>
			<view class="carInfoBodyFoot">
				{{ carData.remark }}
			</view>
		</view>
		<view class="info">
			<view class="infoChild">
				<view class="infoChild-item">
					<text>{{ carData.exteriorColorName }}</text>
					<text>外观颜色</text>
				</view>
			</view>
			<view class="infoChild">
				<view class="infoChild-item">
					<text>{{ carData.interiorColor }}</text>
					<text>内饰颜色</text>
				</view>
			</view>
			<view class="infoChild">
				<view class="infoChild-item">
					<text>{{ carData.isRegularMaintenance }}</text>
					<text>是否4s店保养</text>
				</view>
			</view>
			<view class="infoChild">
				<view class="infoChild-item">
					<text>{{ carData.merchantName }}</text>
					<text>车身类型</text>
				</view>
			</view>
			<!-- isTurboCharger -->
			<view class="infoChild">
				<view class="infoChild-item">
					 <!-- {{ carData.isTurboCharger }} -->
					<text>{{ carData.displacement }}{{ carData.isTurboCharger }}</text>
					<text>排量</text>
				</view>
			</view>
			<view class="infoChild">
				<view class="infoChild-item">
					<text>{{ carData.transmission }}</text>
					<text>变速箱</text>
				</view>
			</view>	
			<view class="infoChild">
				<view class="infoChild-item">
					<text>{{ carData.fuelType }}</text>
					<text>燃油类型</text>
				</view>
			</view>
			<view class="infoChild">
				<view class="infoChild-item">
					<text>{{ carData.emissionStandard }}</text>
					<text>排放标准</text>
				</view>
			</view>
			<view class="infoChild">
				<view class="infoChild-item">
					<text>{{ carData.validateDate }}</text>
					<text>年审到期日</text>
				</view>
			</view>
			<view class="infoChild">
				<view class="infoChild-item">
					<text>{{ carData.forceInsuranceDate }}</text>
					<text>交强险到期日</text>
				</view>
			</view>
			<view class="infoChild">
				<view class="infoChild-item">
					<text>{{ carData.licensedAt }}</text>
					<text>上牌时间</text>
				</view>
			</view>
			<view class="infoChild">
				<view class="infoChild-item">
					<text>{{ carData.nature }}</text>
					<text>使用性质</text>
				</view>
			</view>
		</view>
		<view class="more" @tap="goEndInfo()">
			更多参数配置信息&nbsp;&gt;
		</view>
		<view class="foot">
			<view class="footChild">卖点描述</view>
			<view class="footChild" v-text="carData.sellingPoint == ''? '暂无描述':carData.sellingPoint"></view>
			<view class="footChild">卖家信息</view>
			<view class="footChild">所在车市区域：{{ carData.areaName }}</view>
			<view class="footChild" @tap="$goPhone(carData.respoPhone)">卖家电话：{{ carData.respoPhone }}</view>
		</view>
	</view>
</template>

<script>
	import { get_cars_detail_info } from '@/common/api/carInfomationdetail.js'
	export default {
		data() {
			return {
				carData: {},
			}
		},
		onNavigationBarButtonTap:function(e){
			this.$goPhone(this.carData.respoPhone);
        },
		onLoad(options){
			this.get_cars_detail_info(options.id);
		},
		methods: {
			//加载好车详情
			async get_cars_detail_info(t){
				console.log(t)
				let params = {"id":t};
				try{
					let resData = await get_cars_detail_info(params);
					if(resData.code === 200){
						this.carData = resData.result;
						this.carData.isRegularMaintenance == 0? this.carData.isRegularMaintenance = '是' : this.carData.isRegularMaintenance = '否';
						this.carData.transmission == 'auto'? this.carData.transmission = '自动' : this.carData.transmission = '手动';
						if(this.carData.fuelType == 'gasoline'){
							this.carData.fuelType = '汽油'
						}else if(this.carData.fuelType == 'diesel'){
							this.carData.fuelType = '柴油'
						}else if(this.carData.fuelType == 'electric'){
							this.carData.fuelType = '电动'
						}else if(this.carData.fuelType == 'hybrid'){
							this.carData.fuelType = '混合'
						}else if(this.carData.fuelType == 'other'){
							this.carData.fuelType = '其他'
						}
						if(this.carData.interiorColor == 'double'){
							this.carData.interiorColor = '双色'
						}else if(this.carData.interiorColor == 'cream'){
							this.carData.interiorColor = '米黄'
						}else if(this.carData.interiorColor == 'oyster_grey'){
							this.carData.interiorColor = '米灰'
						}else if(this.carData.interiorColor == 'red'){
							this.carData.interiorColor = '红色'
						}else if(this.carData.interiorColor == 'black'){
							this.carData.interiorColor = '黑色'
						}else if(this.carData.interiorColor == 'brown'){
							this.carData.interiorColor = '双色'
						}else if(this.carData.interiorColor == 'double'){
							this.carData.interiorColor = '棕色'
						}else if(this.carData.interiorColor == 'rgb(59, 250, 250)'){
							this.carData.interiorColor = '其他'
						}
						
						if(this.carData.emissionStandard == 'guo_1'){
							this.carData.emissionStandard = '国I'
						}else if(this.carData.emissionStandard == 'guo_2'){
							this.carData.emissionStandard = '国II'
						}else if(this.carData.emissionStandard == 'guo_3'){
							this.carData.emissionStandard = '国III'
						}else if(this.carData.emissionStandard == 'guo_4'){
							this.carData.emissionStandard = '国IV'
						}else if(this.carData.emissionStandard == 'guo_5'){
							this.carData.emissionStandard = '国V'
						}else if(this.carData.emissionStandard == 'eu_1'){
							this.carData.emissionStandard = '欧I'
						}else if(this.carData.emissionStandard == 'eu_2'){
							this.carData.emissionStandard = '欧II'
						}else if(this.carData.emissionStandard == 'eu_3'){
							this.carData.emissionStandard = '欧III'
						}else if(this.carData.emissionStandard == 'eu_4'){
							this.carData.emissionStandard = '欧IV'
						}else if(this.carData.emissionStandard == 'eu_5'){
							this.carData.emissionStandard = '欧V'
						}
						
						this.carData.isTurboCharger == 0? this.carData.isTurboCharger = 'T' : this.carData.isTurboCharger = 'L'
						
						this.carData.nature == 0? this.carData.nature = '营运': this.carData.nature = '非营运'
						this.carData.coverUrl = this.carData.coverUrl.split(',')
					}else{
						this.$toast(resData.message)
					}
				}catch(e){
					this.$toast('请求失败')
				}
			},
			goEndInfo(){
				this.$goWindow('../carEndInfo/carEndInfo?styleId='+this.carData.styleId)
			},
			goBack(){
				uni.navigateBack({});
			}
		}
	}
</script>
