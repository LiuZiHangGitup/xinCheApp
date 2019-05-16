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
	top: 90upx;
	left: 0upx;
	right: 0upx;
	height: 70upx;
	display: flex;
	justify-content: space-between;
	padding: 0upx 100upx;
	box-sizing: border-box;
}
.topFixedLeft{
	display: flex;
	justify-content: space-between;
	width: 350upx;
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
	padding: 10upx 15upx;
	text-align: center;
	box-sizing: border-box;
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
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="(item,index) in carData.coverUrl" :key="index">
					<view class="swiper-item"><image class="swiperImg" :src="item" mode=""></image></view>
				</swiper-item>
			</swiper>
		</view>
		<view class="carInfoBody">
			<view class="carInfoBodyTop">
				<text class="carInfoBodyTopLeft">信车认证</text>
				<text class="carInfoBodyTopRight">{{ carData.styleName }}</text>
			</view>
			<view class="carInfoBodyBody">
				<text class="carInfoBodyBodyLeft">2018 | 8.3万公里</text>
				<text class="carInfoBodyBodyRight">零售价：{{ carData.onlinePriceCents }}万</text>
			</view>
			<view class="carInfoBodyFoot">
				不包含过户费，不是一口价
			</view>
		</view>
		<view class="info">
			<view class="infoChild">
				<view class="infoChild-item">
					<text>{{ carData.exteriorColor }}</text>
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
					<text>{{ carData.carType }}</text>
					<text>车身类型</text>
				</view>
			</view>
			<!-- isTurboCharger -->
			<view class="infoChild">
				<view class="infoChild-item">
					<text>{{ carData.displacement }} {{ carData.isTurboCharger }}</text>
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
			<view class="footChild">{{ carData.onsaleDescription }}</view>
			<view class="footChild">卖家信息</view>
			<view class="footChild">{{ carData.areaName }}</view>
			<view class="footChild">--</view>
			<view class="footChild" @tap="goPhone()">400-14588-14588</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				carData: {}
			}
		},
		onNavigationBarButtonTap:function(e){
            uni.makePhoneCall({
            	phoneNumber: '400-14588-14588'
            });
        },
		onLoad(params){
			this.carData = JSON.parse(params.carInfo);
			if(this.carData.emissionStandard = 'guo_1'){
				this.carData.emissionStandard = '国Ⅰ';
			}else if(this.carData.emissionStandard = 'guo_2'){
				this.carData.emissionStandard = '国Ⅱ';
			}else if(this.carData.emissionStandard = 'guo_3'){
				this.carData.emissionStandard = '国Ⅲ';
			}else if(this.carData.emissionStandard = 'guo_4'){
				this.carData.emissionStandard = '国Ⅳ';
			}else if(this.carData.emissionStandard = 'guo_5'){
				this.carData.emissionStandard = '国Ⅴ';
			}else if(this.carData.emissionStandard = 'eu_1'){
				this.carData.emissionStandard = '欧Ⅰ';
			}else if(this.carData.emissionStandard = 'eu_2'){
				this.carData.emissionStandard = '欧Ⅱ';
			}else if(this.carData.emissionStandard = 'eu_3'){
				this.carData.emissionStandard = '欧Ⅲ';
			}else if(this.carData.emissionStandard = 'eu_4'){
				this.carData.emissionStandard = '欧Ⅳ';
			}else if(this.carData.emissionStandard = 'eu_5'){
				this.carData.emissionStandard = '欧Ⅴ';
			}
			if(this.carData.exteriorColor == 'black'){
				this.carData.exteriorColor = '黑色';
			}else if(this.carData.exteriorColor == 'white'){
				this.carData.exteriorColor = '白色';
			}else if(this.carData.exteriorColor == 'red'){
				this.carData.exteriorColor = '红色';
			}else if(this.carData.exteriorColor == 'purple'){
				this.carData.exteriorColor = '紫色';
			}else if(this.carData.exteriorColor == 'silver_grey'){
				this.carData.exteriorColor = '银灰色';
			}else if(this.carData.exteriorColor == 'green'){
				this.carData.exteriorColor = '绿色';
			}else if(this.carData.exteriorColor == 'yellow'){
				this.carData.exteriorColor = '黄色';
			}else if(this.carData.exteriorColor == 'dark_grey'){
				this.carData.exteriorColor = '深灰色';
			}else if(this.carData.exteriorColor == 'brown'){
				this.carData.exteriorColor = '棕色';
			}else if(this.carData.exteriorColor == 'champagne'){
				this.carData.exteriorColor = '香槟色';
			}else if(this.carData.exteriorColor == 'orange'){
				this.carData.exteriorColor = '橙色';
			}else if(this.carData.exteriorColor == 'blue'){
				this.carData.exteriorColor = '蓝色';
			}else if(this.carData.exteriorColor == 'other'){
				this.carData.exteriorColor = '其他';
			}
			
			if(this.carData.interiorColor == 'double'){
				this.carData.interiorColor = '双色';
			}else if(this.carData.interiorColor == 'cream'){
				this.carData.interiorColor = '米黄';
			}else if(this.carData.interiorColor == 'oyster_grey'){
				this.carData.interiorColor = '米灰';
			}else if(this.carData.interiorColor == 'red'){
				this.carData.interiorColor = '红色';
			}else if(this.carData.interiorColor == 'black'){
				this.carData.interiorColor = '黑色';
			}else if(this.carData.interiorColor == 'brown'){
				this.carData.interiorColor = '棕色';
			}else if(this.carData.interiorColor == 'other'){
				this.carData.interiorColor = '其他';
			}
			
			if(this.carData.isRegularMaintenance = 1){
				this.carData.isRegularMaintenance = '是';
			}else{
				this.carData.isRegularMaintenance = '否';
			}
			
			if(this.carData.carType == 'mid_full_size_car'){
				this.carData.carType = '中型车';
			}else if(this.carData.carType == 'micro_car'){
				this.carData.carType = '微型车';
			}else if(this.carData.carType == 'small_car'){
				this.carData.carType = '小型车';
			}else if(this.carData.carType == 'compact_car'){
				this.carData.carType = '紧凑型';
			}else if(this.carData.carType == 'mid_full_size_car'){
				this.carData.carType = '中大型';
			}else if(this.carData.carType == 'full_size_car'){
				this.carData.carType = '大型车';
			}else if(this.carData.carType == 'mpv'){
				this.carData.carType = 'MPV';
			}else if(this.carData.carType == 'suv'){
				this.carData.carType = 'SUV';
			}else if(this.carData.carType == 'sports_car'){
				this.carData.carType = '跑车';
			}else if(this.carData.carType == 'pickup_trucks'){
				this.carData.carType = '皮卡';
			}else if(this.carData.carType == 'small_van'){
				this.carData.carType = '微面';
			}else if(this.carData.carType == 'electrocar'){
				this.carData.carType = '电动车';
			}else if(this.carData.carType == 'ohter'){
				this.carData.carType = '其他';
			}
			
			if(this.carData.isTurboCharger == '0'){
				this.carData.isTurboCharger = 'T';
			}else{
				this.carData.isTurboCharger = 'L';
			}
			
			if(this.carData.transmission == 'auto'){
				this.carData.transmission = '自动';
			}else{
				this.carData.transmission = '手动';
			}
			
			if(this.carData.fuelType == 'gasoline'){
				this.carData.fuelType = '汽油';
			}else if(this.carData.fuelType == 'diesel'){
				this.carData.fuelType = '柴油';
			}else if(this.carData.fuelType == 'electric'){
				this.carData.fuelType = '电动';
			}else if(this.carData.fuelType == 'hybrid'){
				this.carData.fuelType = '混合';
			}else if(this.carData.fuelType == 'other'){
				this.carData.fuelType = '其他';
			}
			
			if(this.carData.nature == 1){
				this.carData.nature = '非营运';
			}else{
				this.carData.nature = '营运';
			}
			
			if(this.carData.onsaleDescription == null){
				this.carData.onsaleDescription = '暂无描述'
			}
			
			console.log(this.carData)
		},
		methods: {
			goEndInfo(){
				uni.navigateTo({
					url: '../carEndInfo/carEndInfo?styleId='+this.carData.styleId
				});
			},
			goPhone(){
				uni.makePhoneCall({
					phoneNumber: '400-14588-14588'
				});
			},
			goBack(){
				uni.navigateBack({});
			}
		}
	}
</script>
