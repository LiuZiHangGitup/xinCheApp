<style scoped>
	#app{
		width: 750upx;
		background-color: #f3f3f3;
	}
	.head{
		width: 750upx;
		height: 150upx;
		display: flex;
		justify-content: flex-start; 
	}
	.head:first-child{
		background-color: #108ee9;
	}
	.head:nth-child(2){
		background-color: #ffffff;
		margin-top: 20upx;
	}
	.headChild {
		width: 175upx;
		height: 175upx;
		margin-left: 10upx;
		margin-top: 20upx;
		text-align: center;
		font-size: 26upx;
	}
	
	.headChildTop{
		color: #ffffff;
		font-size: 30upx;
		display: inline-block;
	}
	.headChild image{
		width: 59.4upx;
		height: 55upx;
		margin-bottom: 10upx;
	}
	/* 轮播部分样式--start */
	.banner{
		margin: 20upx 0upx;
		height: 220upx;
	}
	.banner swiper{
		height: 100%;
	}
	.swiper-item image{
		width: 100%;
		height: 220upx;
	}
	/* 轮播部分样式--end */
	.notice{
		width: 750upx;
		background: #FFFFFF;
		padding: 20upx;
		box-sizing: border-box;
		position: relative;
		float: left;
		font-size: 26upx;
	}
	.notice image{
		width: 80upx;
		height: 80upx;
		float: left;
		margin-right: 20upx;
	}
	.notice .noticeText{
		font-size: 26upx;
		display: block;
		margin: 10upx 0;
		width: 300upx;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		float: left;
	}
	.notice .noticeTime{
		float: right;
		font-size: 26upx;
		color: #909399;
		margin: 10upx 0;
		margin-right: 10%;
	}
	.notice .goNotice{
		position: absolute;
		top: 55upx;
		right: 2%;
		font-size: 50upx;
		color: #606266;
	}
	.notice .goNotice image{
		width: 15upx;
		height: 20upx;
	}
	/* 好车列表 */
	.carList{
		width: 750upx;
		background-color: #FFFFFF;
		float: left;
		padding: 20upx;
		box-sizing: border-box;
		
	}
	.carListTop{
		width: 20%;
		height: 50upx;
		line-height: 50upx;
		border-left: 10upx solid #108ee9;
		font-size: 30upx;
		padding-left: 2%;
	}
	.carLists{
		float: left;
		width: 100%;
		height: 200upx;
		padding: 20upx 0;
		border-bottom: 10upx solid #f3f3f3;
		
	}
	.carListsLeft{
		width: 45%;
		float: left;
	}
	.carListsLeft image{
		width: 100%;
		height: 200upx;
	}
	.carListsRight{
		float: right;
		width: 50%;
		margin-right: 2%;
	}
	.carListsRight text{
	    font-size: 30upx;
  	    text-overflow: -o-ellipsis-lastline;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 2;
	    line-clamp: 2;
	    -webkit-box-orient: vertical;
	}
	.carListsRight text:nth-child(2){
		display: block;
		color: #909399;
		margin: 7.5% 0;
	}
	.carListsRight text:nth-child(3){
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		color: #21bfff;
		display: inline-block;
		width: 80%;
	}
	.goodCarNum{
		width: 750upx;
		text-align: center;
		color: #909399;
		clear: both;
		background: #FFFFFF;
		font-size: 30upx;
		padding-bottom: 20upx;
	}
</style>

<template>
	<view id="app">
		<!-- 蓝色头部背景 -->
		<view class="head">
			<view class="headChild headChildTop" @click="goNavWindow('../addCar/addCar?carName=必填')">
				<image src="../../static/index/sys.png" mode=""></image><br>
				<text>新建车辆</text>
			</view>
			<view class="headChild headChildTop" @click="goWindow('../wisdom/wisdom')">
				<image src="../../static/index/IntelligentMarketing.png" mode=""></image><br>
				<text>智慧营销</text>
			</view>
			<view class="headChild headChildTop" @click="goNavWindow('../goodCars/goodCars')">
				<image src="../../static/index/specialCar.png" mode=""></image><br>
				<text>特价好车</text>
			</view>
		</view>
		<!-- 白色头部背景 -->
		<view class="head">
			<view class="headChild" @click="goWindow('../vehicleSource/vehicleSource?paiXu=最近入库')">
				<image src="../../static/index/goOut.png" mode=""></image><br>
				<text>车辆管理</text>
			</view>
			<view class="headChild" @tap="goWindow('../vehicleSource/vehicleSource?paiXu=最近入库&shangjia=1')">
				<image src="../../static/index/nowCarNum.png" mode=""></image><br>
				<text>上架车辆</text>
			</view>
			<view class="headChild" @tap="goNavWindow('../statistics/statistics')">
				<image src="../../static/index/nowMonthCarNum.png" mode=""></image><br>
				<text>数据统计</text>
			</view>
			<view class="headChild" @tap="zwkf()">
				<image src="../../static/index/shuJuFenXi.png" mode=""></image><br>
				<text>数据分析</text>
			</view>
		</view>
		<!-- 轮播图 -->
		<view class="banner">
			<swiper :indicator-dots="false" :autoplay="true" :interval="3000" :duration="500" indicator-color="#0066ff" indicator-active-color="#f3f3f3" autoplay="true" :circular="true">
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/bannerCar2.jpg" mode=""></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/bannerCar3.jpg" mode=""></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/bannerCar1.jpg" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 公告 -->
		<view class="notice">
			<image src="../../static/index/notice.png" mode=""></image>
			<text class="noticeText">热烈庆祝信车智联项目火爆上线</text>
			<text class="noticeTime">30分钟之前</text>
			<text class="noticeText">2019年4月25日消防检测隆重登场</text>
			<text class="noticeTime">30分钟之前</text>
			<view class="goNotice"><image src="../../static/index/jianTou.png" mode=""></image></view>
		</view>
		<view class="carList">
			<view class="carListTop">
				特价好车
			</view>
			 <!-- @tap="goWindow('../carInformation/carInformation')" -->
			<view class="carLists" v-for="(item,index) in goodCarList" :key="index">
				<view class="carListsLeft">
					<image @tap="goCarInformation()" :src="item.carImg"></image>
				</view>
				<view class="carListsRight">
					<text>{{item.carTitle}}</text>
					<text>{{item.city}}</text>
					<text>{{item.typeId}}</text>
				</view>
			</view>
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
				title: '信车',
				// 查询特价好车所需条件
				goodCarData:{
					"audiId": "",
					"brandId": "",
					"carPrice":null,
					"carYear":null,
					"dataSources": "",	
					"page": 1,
					"paixu": "",
					"rows": 10,
					"state": "1"
				},
				jiaJson:{
					acquiredAt: null,
					acquirerId: null,
					acquisitionPriceCents: null,
					acquisitionType: null,
					age: null,
					allianceCoverUrl: null,
					allianceMinimunPriceCents: null,
					allowedMortgage: false,
					areaId: 413,
					areaName: "f-6",
					attachments: "{}",
					brandName: "阿尔法·罗密欧",
					businessInsuranceDate: null,
					carType: null,
					channelId: null,
					closingCostCents: null,
					companyId: null,
					configurationNote: null,
					consignorName: null,
					consignorPhone: null,
					consignorPriceCents: null,
					coverUrl: ["http://47.105.165.101:8080/img/2019051321230272790717.png","http://47.105.165.101:8080/img/2019051321230554480041.png","http://47.105.165.101:8080/img/2019051321230739269263.png"],
					createdAt: "2019-05-13 21:24:35",
					currentPlateNumber: null,
					currentPublishRecordsCount: 0,
					deletedAt: null,
					displacement: null,
					doorCount: null,
					emissionStandard: null,
					estimatePriceCents: null,
					estimatedGrossProfitCents: null,
					estimatedGrossProfitRate: 0,
					exteriorColor: "black",
					feeDetail: null,
					forceInsuranceDate: "1990-01",
					fuelType: null,
					hasMaintainHistory: false,
					id: 124,
					imagesCount: 0,
					imported: null,
					interiorColor: "double",
					interiorNote: null,
					isBitePrice: null,
					isFaceToFace: "1",
					isRegularMaintenance: "1",
					isSpecialOffer: null,
					isTransfer: null,
					isTurboCharger: "0",
					isWholesale: null,
					keyNum: null,
					level: null,
					licenseInfo: "unlicensed",
					licensedAt: null,
					loanBillId: null,
					loanStatus: null,
					maintainMileage: 0,
					managerPriceCents: null,
					manufacturedAt: null,
					manufacturerConfiguration: null,
					manufacturerName: null,
					marketId: 12,
					mileage: 15,
					mileageInFact: 0,
					mortgageNote: null,
					name: null,
					namePinyin: null,
					nature: "1",
					newCarAdditionalPriceCents: null,
					newCarDiscount: 0,
					newCarFinalPriceCents: null,
					newCarGuidePriceCents: null,
					newCarWarranty: null,
					onlinePriceCents: null,
					onsale: false,
					onsaleDescription: null,
					onsalePriceCents: null,
					personalEquipment: "{}",
					predictedRestockedAt: null,
					redStockWarningDays: 45,
					relationId: null,
					reserved: false,
					reservedAt: null,
					sellable: false,
					sellerId: null,
					sellingPoint: null,
					seriesName: "ALFA 156",
					shopId: 47,
					showPriceCents: null,
					standardEquipment: "{}",
					starRating: 0,
					state: "0",
					stateChangedAt: null,
					stateNote: null,
					statesStatistic: "{}",
					stockAgeDays: 0,
					stockNumber: null,
					stockOutAt: null,
					styleId: 165,
					styleName: "2004款 2.0 AT",
					systemName: null,
					t: 0,
					tradeNum: null,
					tradePrice: null,
					transferNum: null,
					transmission: "manual",
					updatedAt: "2019-05-13 21:24:35",
					validateDate: "1990-01",
					vin: "15242515425124512",
					warrantyFeeCents: null,
					warrantyId: null,
					yellowStockWarningDays: 30,
				},
				// 特价好车参数
				goodCarList:[],
				// 是否有更多数据
				ifHaveGoodCar: '上划加载',
				// 查询总数据
				goodCarTotal:0
			}
		},
		onNavigationBarButtonTap(){
			this.goNavWindow('../me/me')
		},
		onShow(){
			// 查询用户是否已登录未登录调回登录页
			uni.getStorage({
				key: 'token',
				success: (res) => {
					return;
				},
				fail: (errRes) => {
					uni.reLaunch({
						url:'../login/login'
					})
				}
			});
		},
		onLoad() {
			// 获取特价好车列表
			this.getGoodCar();
			console.log(this.$router);
		},
		methods: {
			goCarInformation(){
				uni.navigateTo({
					url: '../carInformation/carInformation?carInfo='+JSON.stringify(this.jiaJson)
				});
			},
			// 获取特价好车
			getGoodCar(){
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
					params.bodyData = this.goodCarData;
					this.$postRequest('/specialCar/SELECT_BY_MANY',params, (resData) => {
						if(this.goodCarList == resData.data.body.total){
							this.ifHaveGoodCar = '已经是全部数据了';
						}else{
							if(resData.data.code == 0){
								this.goodCarTotal = resData.data.body.total;
								this.goodCarList = this.goodCarList.concat(resData.data.body.rows);
								if(this.goodCarList.length == resData.data.body.total){
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
			// 进入新建车辆页面
			goWindow(url){
				uni.navigateTo({
					url:url
				})
			},
			goNavWindow(url){
				uni.switchTab({
					url: url
				})
			},
			zwkf(){
				uni.showToast({
					title: '暂未开放',
					icon: 'none',
					mask: false,
					duration: 1500
				});
			}
		},
		// 下拉刷新功能
		onPullDownRefresh() {
			setTimeout(function () {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		// 上滑加载特价好车列表
		onReachBottom(){
			this.goodCarData.page++;
			this.getGoodCar();
		}
	}
</script>

