<style scoped>
@import '../../common/uni.css';
#vehicleSource{
	width: 750upx;
	background-color: #f3f3f3;
}
.carLists{
	width: 100%;
	height: 200upx;
	padding: 20upx 0;
	background-color: #FFFFFF;
	border-bottom: 10upx solid #f3f3f3;
	
}
.carListsLeft{
	width: 45%;
	float: left;
	margin-left: 20upx;
}
.carListsLeft image{
	width: 100%;
	height: 200upx;
}
.carListsRight{
	float: right;
	width: 47.5%;
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
	margin: 2% 0;
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
	padding: 20upx 0;
}
.vehicleSourceBody{
	width: 750upx;
	padding-top: 140upx;
}
.vehicleSourceTop{
	width: 750upx;
	background: #FFFFFF;
	height: 90upx;
	position: fixed;
	top: 0upx;
	left: 0upx;
	right: 0upx;
}
.vehicleSourceTopLeft{
	width: 370upx;
}
.vehicleSourceTopRight{
	width: 375upx;
}
.vehicleSourceTopLeft,.vehicleSourceTopRight{
	height: 85upx;
	display: inline-block;
	background: #FFFFFF;
	line-height: 85upx;
	font-size: 30upx;
	letter-spacing: 5upx;
	text-align: center;
	border-bottom: 1upx solid #E8E8E8;
}
.vehicleSourceTopActive{
	border-bottom: 5upx solid #007AFF;
}
.vehicleSourceTopLeftChoose{
	width: 750upx;
	height: 50upx;
	background: #FFFFFF;
	position: fixed;
	top: 90upx;
	left: 0upx;
	right: 0upx;
	display: flex;
	justify-content: space-around;
	border-bottom: 1upx solid #E8E8E8;
}
.vehicleSourceTopLeftChooseChild{
	text-align: center;
	line-height: 50upx;
	font-size: 26upx;
	width: 150upx;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.vehicleSourceTopLeftChooseChildInput{
	width: 190upx;
	height: 35upx;
	border: 1upx solid #E8E8E8;
	border-radius: 10upx;
}
.vehicleSourceTopLeftChooseChildInput2{
	width: 150upx;
	height: 35upx;
	border: 1upx solid #E8E8E8;
	border-radius: 10upx;
	transition: 0.3s all ease;
}
.xuanZeQi{
	position: fixed;
	top: 141upx;
	left: 0upx;
	right: 0upx;
	background: #FFFFFF;
}
/* 来源 */
.laiYuan{
	height: 420upx;
	transition: 0.3s all ease;
}
.chooseBg{
	position: fixed;
	left: 0upx;
	right: 0upx;
	bottom: 0upx;
	background-color: rgba(0,0,0,0.6);
}
.laiYuanBg{
	top: 420upx;
}
.laiYuanScorll{
	width: 750upx;
	border-top: 1upx solid #E8E8E8;
}
.laiYuanScorllChild{
	width: 750upx;
	height: 70upx;
	line-height: 70upx;
	border-bottom: 1upx solid #E8E8E8;
	font-size: 26upx;
}
.laiYuanScorllChild2{
	width: 750upx;
	height: 70upx;
	line-height: 70upx;
	border-bottom: 1upx solid #E8E8E8;
	font-size: 26upx;
	padding-left: 40upx;
}
.laiYuanScorllChild3{
	width: 750upx;
	height: 70upx;
	line-height: 70upx;
	border-bottom: 1upx solid #E8E8E8;
	font-size: 26upx;
	padding-left: 40upx;
	background-color: #E8E8E8;
}
.laiYuanScorllChild:last-child{
	border-bottom: none;
}
.laiYuanScorllChild:active{
	color: #007AFF;
}
/* 二手车价格 */
.erJiaGe{
	height: 712upx;
	transition: 0.3s all ease;
}
.erJiaGeBg{
	top: 664upx;
}
/* 二手车排序 */
.erPaiXu{
	height: 282upx;
	transition: 0.3s all ease;
}
.erPaiXuBg{
	top: 226upx;
}
/* 新车排序 */
.xinPaiXu{
	height: 142upx;
	transition: 0.3s all ease;
}
.xinPaiXuBg{
	top: 272upx;
}
/* 新车品牌选择器 */
.scrollList {
	flex: 1;
	height: 100vh;
}
/* 品牌样式 */
.page {
	display: flex;
	flex-direction: row;
	position: fixed;
	left: 0upx;
	right: 0upx;
	bottom: 0upx;
	top: 140upx;
	transition: 0.3s all ease;
}
/* 车型样式 */
.erCheXing{
	transition: 0.3s all ease;
}
.scrollList {
	flex: 1;
	height: 100vh;
}

.uni-indexed-list-bar {
	width: 46upx;
	height: 100vh;
	background-color: lightgrey;
	display: flex;
	flex-direction: column;
}

.uni-indexed-list-bar.active {
	background-color: rgb(200, 200, 200);
}

.uni-indexed-list-text {
	color: #aaa;
	font-size: 22upx;
	text-align: center;
}

.uni-indexed-list-bar.active .uni-indexed-list-text {
	color: #333;
}

.uni-indexed-list-text.active,
.uni-indexed-list-bar.active .uni-indexed-list-text.active {
	color: #007AFF;
}

.uni-indexed-list-alert {
	position: absolute;
	z-index: 20;
	width: 160upx;
	height: 160upx;
	left: 50%;
	top: 50%;
	margin-left: -80upx;
	margin-top: -80upx;
	border-radius: 80upx;
	text-align: center;
	line-height: 160upx;
	font-size: 70upx;
	color: #fff;
	background-color: rgba(0, 0, 0, 0.5);
}
.oneChild{
	height: 90upx;
	line-height: 90upx;
	padding-left: 20upx;
}
.one{
	height: 90upx;
	line-height: 90upx;
	border-bottom: 1upx solid #E8E8E8;
}
</style>

<template>
	<view id="vehicleSource">
		<view class="vehicleSourceTop">
			<view class="vehicleSourceTopLeft" :class="vehicleSourceTopLeftClass" @click="openXinChe()">新车</view>
			<view class="vehicleSourceTopRight" :class="vehicleSourceTopRightClass" @click="openErShouChe()">二手车</view>
		</view>
		<view class="vehicleSourceTopLeftChoose" v-if="erOrXin">
			<view class="vehicleSourceTopLeftChooseChild" @tap="openXinPinPai()">{{ pinPai }}</view>
			<view class="vehicleSourceTopLeftChooseChild" @tap="openXinCheXing()">{{ xinCheXing }}</view>
			<view class="vehicleSourceTopLeftChooseChild" @tap="openXinJiaGe()">{{ jiaGe }}</view>
			<view class="vehicleSourceTopLeftChooseChild" @tap="openXinPaiXu()">{{ paiXu }}</view>
			<!-- <view class="vehicleSourceTopLeftChooseChild">
				<input class="vehicleSourceTopLeftChooseChildInput" type="text" value="" />
			</view> -->
		</view>
		<!-- 二手车选择器 -->
		<view class="vehicleSourceTopLeftChoose" v-else>
			<view class="vehicleSourceTopLeftChooseChild" @tap="openLaiYuan()">{{ cheYuan }}</view>
			<view class="vehicleSourceTopLeftChooseChild" @tap="openErPinPai()">{{ pinPai2 }}</view>
			<view class="vehicleSourceTopLeftChooseChild" @tap="openErCheXing()">{{ erCheXing }}</view>
			<view class="vehicleSourceTopLeftChooseChild" @tap="openErJiaGe()">{{ jiaGe2 }}</view>
			<view class="vehicleSourceTopLeftChooseChild" @tap="openErPaiXu()">{{ paiXu2 }}</view>
			<!-- <view class="vehicleSourceTopLeftChooseChild">
				<input class="vehicleSourceTopLeftChooseChildInput2" type="text" value="" />
			</view> -->
		</view>
		<!-- 来源选择器 -->
		<view class="laiYuanBg chooseBg" v-if="laiYuanState" @touchmove.stop.prevent="moveHandle" @tap="openLaiYuan()"></view>
		<view class="xuanZeQi laiYuan" :style="laiYuanStyle" @touchmove.stop.prevent="moveHandle">
			<scroll-view scroll-y class="laiYuanScorll uni-center center-box">
				<view class="laiYuanScorllChild" @tap="getLaiYuan('','全部车源')">全部车源</view>
				<view class="laiYuanScorllChild" @tap="getLaiYuan(0,'批发车源')">批发车源</view>
				<view class="laiYuanScorllChild" @tap="getLaiYuan(1,'好友车源')">好友车源</view>
				<view class="laiYuanScorllChild" @tap="getLaiYuan(2,'车行认证')">车行认证</view>
				<view class="laiYuanScorllChild" @tap="getLaiYuan(3,'个人车源')">个人车源</view>
				<view class="laiYuanScorllChild" @tap="getLaiYuan(4,'拍卖车源')">拍卖车源</view>
			</scroll-view>
		</view>
		<!-- 二手车价格选择器 -->
		<view class="chooseBg erJiaGeBg" v-if="erJiaGeState" @touchmove.stop.prevent="moveHandle" @tap="openErJiaGe()"></view>
		<view class="xuanZeQi erJiaGe" :style="erJiaGeStyle" @touchmove.stop.prevent="moveHandle">
			<scroll-view :scroll-y="true" class="laiYuanScorll uni-center center-box">
				<view class="laiYuanScorllChild" @tap="getErPrice('','全部价格')">全部价格</view>
				<view class="laiYuanScorllChild" @tap="getErPrice(0,'3万及以下')">3万及以下</view>
				<view class="laiYuanScorllChild" @tap="getErPrice(1,'3-5万')">3-5万</view>
				<view class="laiYuanScorllChild" @tap="getErPrice(2,'5-8万')">5-8万</view>
				<view class="laiYuanScorllChild" @tap="getErPrice(3,'8-10万')">8-10万</view>
				<view class="laiYuanScorllChild" @tap="getErPrice(4,'10-15万')">10-15万</view>
				<view class="laiYuanScorllChild" @tap="getErPrice(5,'15-30万')">15-30万</view>
				<view class="laiYuanScorllChild" @tap="getErPrice(6,'30-50万')">30-50万</view>
				<view class="laiYuanScorllChild" @tap="getErPrice(7,'50-100万')">50-100万</view>
				<view class="laiYuanScorllChild" @tap="getErPrice(8,'100万及以上')">100万及以上</view>
			</scroll-view>
		</view>
		<!-- 二手车排序选择器 -->
		<view class="chooseBg erPaiXuBg" v-if="erPaiXuState" @touchmove.stop.prevent="moveHandle" @tap="openErPaiXu()"></view>
		<view class="xuanZeQi erPaiXu" :style="erPaiXuStyle" @touchmove.stop.prevent="moveHandle">
			<scroll-view :scroll-y="true" class="laiYuanScorll uni-center center-box">
				<view class="laiYuanScorllChild" @tap="getErPaiXu(0,'价格最低')">价格最低</view>
				<view class="laiYuanScorllChild" @tap="getErPaiXu(1,'价格最高')">价格最高</view>
				<view class="laiYuanScorllChild" @tap="getErPaiXu(2,'车龄最短')">车龄最短</view>
				<view class="laiYuanScorllChild" @tap="getErPaiXu(3,'里程最小')">里程最小</view>
			</scroll-view>
		</view>
		<!-- 新车排序选择器 -->
		<view class="chooseBg xinPaiXuBg" v-if="xinPaiXuState" @touchmove.stop.prevent="moveHandle" @tap="openXinPaiXu()"></view>
		<view class="xuanZeQi xinPaiXu" :style="xinPaiXuStyle" @touchmove.stop.prevent="moveHandle">
			<scroll-view :scroll-y="true" class="laiYuanScorll uni-center center-box">
				<view class="laiYuanScorllChild" @tap="getXinPaiXu(0,'价格最低')">价格最低</view>
				<view class="laiYuanScorllChild" @tap="getXinPaiXu(1,'价格最高')">价格最高</view>
			</scroll-view>
		</view>
		<!-- 新车价格选择器 -->
		<view class="chooseBg erJiaGeBg" v-if="xinJiaGeState" @touchmove.stop.prevent="moveHandle" @tap="openXinJiaGe()"></view>
		<view class="xuanZeQi erJiaGe" :style="xinJiaGeStyle" @touchmove.stop.prevent="moveHandle">
			<scroll-view :scroll-y="true" class="laiYuanScorll uni-center center-box">
				<view class="laiYuanScorllChild" @tap="getXinPrice('','全部价格')">全部价格</view>
				<view class="laiYuanScorllChild" @tap="getXinPrice(0,'3万及以下')">3万及以下</view>
				<view class="laiYuanScorllChild" @tap="getXinPrice(1,'3-5万')">3-5万</view>
				<view class="laiYuanScorllChild" @tap="getXinPrice(2,'5-8万')">5-8万</view>
				<view class="laiYuanScorllChild" @tap="getXinPrice(3,'8-10万')">8-10万</view>
				<view class="laiYuanScorllChild" @tap="getXinPrice(4,'10-15万')">10-15万</view>
				<view class="laiYuanScorllChild" @tap="getXinPrice(5,'15-30万')">15-30万</view>
				<view class="laiYuanScorllChild" @tap="getXinPrice(6,'30-50万')">30-50万</view>
				<view class="laiYuanScorllChild" @tap="getXinPrice(7,'50-100万')">50-100万</view>
				<view class="laiYuanScorllChild" @tap="getXinPrice(8,'100万及以上')">100万及以上</view>
			</scroll-view>
		</view>
		<!-- 二手车车选择器 -->
		<view class="xuanZeQi erCheXing" :style="erCheXingStyle" @touchmove.stop.prevent="moveHandle">
			<scroll-view class="scrollList laiYuanScorll" scroll-y :scroll-into-view="scrollViewId" :style="{height:winHeight + 'px'}">
				<view class="laiYuanScorllChild3" v-if="ifShowErCheXing">请先选择品牌</view>
				<view v-else>
					<view class="laiYuanScorllChild2" @tap="setErCheXing('')">全部车型</view>
					<view class="laiYuanScorllChild2" v-for="(item,index) in erCheXingList" :key="index" @tap="setErCheXing(item.sname)">
						{{ item.sname }}
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 新车车选择器 -->
		<!-- <view class="chooseBg erCheXingBg" v-if="xinCheXingState" @touchmove.stop.prevent="moveHandle" @tap="openErCheXing()"></view> -->
		<view class="xuanZeQi erCheXing" :style="xinCheXingStyle" @touchmove.stop.prevent="moveHandle">
			<scroll-view class="scrollList laiYuanScorll" scroll-y :scroll-into-view="scrollViewId" :style="{height:winHeight + 'px'}">
				<view class="laiYuanScorllChild3" v-if="ifShowXinCheXing">请先选择品牌</view>
				<view v-else>
					<view class="laiYuanScorllChild2" @tap="setXinCheXing('')">全部车型</view>
					<view class="laiYuanScorllChild2" v-for="(item,index) in xinCheXingList" :key="index" @tap="setXinCheXing(item.sname)">
						{{ item.sname }}
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 新车品牌选择器 -->
		<!-- <view class="chooseBg erJiaGeBg" v-if="xinJiaGeState" @touchmove.stop.prevent="moveHandle" @tap="openXinJiaGe()"></view> -->
		<view class="page" :style="xinPinPaiStyle">
			<scroll-view class="scrollList" scroll-y :scroll-into-view="scrollViewId" :style="{height:winHeight + 'px'}">
				<view class="uni-list">
					<block v-for="(list, key) in lists" :key="key">
						<block v-if="list.data.length">
							<view class="uni-list-cell-divider" :id="list.letter">
								{{list.letter}}
							</view>
							<view class="one">
								<view class="oneChild" @tap="getXinChePinPai({carName:'全部品牌'})">
									全部品牌
								</view>
							</view>
							<view class="one" v-for="(carname,index) in list.data" :key="index" :class="list.data.length -1 == index ? 'uni-list-cell-last' : ''">
								<view class="oneChild" @tap="getXinChePinPai({carName:carname})">
									{{carname}}
								</view>
							</view>
						</block>
					</block>
				</view>
			</scroll-view>
			<view class="uni-indexed-list-bar" :class="touchmove ? 'active' : ''" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" @touchcancel="touchCancel" :style="{height:winHeight + 'px'}">
				<text v-for="(list,key) in lists" :key="key" class="uni-indexed-list-text" :class="touchmoveIndex == key ? 'active' : ''" :style="{height:itemHeight + 'px',lineHeight:itemHeight + 'px'}">{{list.letter}}</text>
			</view>
			<view class="uni-indexed-list-alert" v-if="touchmove">
				{{lists[touchmoveIndex].letter}}
			</view>
		</view>
		<!-- 二手车品牌选择器 -->
		<!-- <view class="chooseBg erJiaGeBg" v-if="xinJiaGeState" @touchmove.stop.prevent="moveHandle" @tap="openXinJiaGe()"></view> -->
		<view class="page" :style="erPinPaiStyle">
			<scroll-view class="scrollList" scroll-y :scroll-into-view="scrollViewId" :style="{height:winHeight + 'px'}">
				<view class="uni-list">
					<block v-for="(list, key) in lists" :key="key">
						<block v-if="list.data.length">
							<view class="uni-list-cell-divider" :id="list.letter">
								{{list.letter}}
							</view>
							<view class="one">
								<view class="oneChild" @tap="getErChePinPai({carName:'全部品牌'})">
									全部品牌
								</view>
							</view>
							<view class="one" v-for="(carname,index) in list.data" :key="index" :class="list.data.length -1 == index ? 'uni-list-cell-last' : ''">
								<view class="oneChild" @tap="getErChePinPai({carName:carname})">
									{{carname}}
								</view>
							</view>
						</block>
					</block>
				</view>
			</scroll-view>
			<view class="uni-indexed-list-bar" :class="touchmove ? 'active' : ''" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" @touchcancel="touchCancel" :style="{height:winHeight + 'px'}">
				<text v-for="(list,key) in lists" :key="key" class="uni-indexed-list-text" :class="touchmoveIndex == key ? 'active' : ''" :style="{height:itemHeight + 'px',lineHeight:itemHeight + 'px'}">{{list.letter}}</text>
			</view>
			<view class="uni-indexed-list-alert" v-if="touchmove">
				{{lists[touchmoveIndex].letter}}
			</view>
		</view>
		<view class="vehicleSourceBody">
			 <!-- " -->
			<view class="carLists" v-for="(item,index) in goodCarList" :key="index">
				<view class="carListsLeft">
					<image @tap="goInfo()" :src="item.carImg"></image>
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
				// 查询特价好车所需条件
				goodCarData: {
					"audiId": "",
					"brandId": "",
					"carPrice":null,
					"carYear":null,
					"dataSources": "",	
					"page": 1,
					"paixu": "",
					"rows": 10,
					"state": "0",
					"brandName": "",
					"audiName" : ""
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
				// 品牌
				pinPai: '品牌',
				pinPai2: '品牌',
				// 车源
				cheYuan: '车源',
				// 价格
				jiaGe: '价格',
				jiaGe2: '价格',
				// 排序
				paiXu: '排序',
				paiXu2: '排序',
				// 车型
				erCheXing: '车型',
				xinCheXing: '车型',
				oldGoodCarData:[],
				// 特价好车参数
				goodCarList:[],
				// 是否有更多数据
				ifHaveGoodCar: '上划加载',
				// 查询总数据
				goodCarTotal:0,
				// 头部左侧样式
				vehicleSourceTopLeftClass: 'vehicleSourceTopActive',
				// 头部右侧样式
				vehicleSourceTopRightClass: '',
				// 选择显示区域
				erOrXin: true,
				// 来源状态
				laiYuanState: false,
				// 来源样式
				laiYuanStyle: 'transform: scaleY(0);',
				// 二手车价格样式
				erJiaGeStyle: 'transform: scaleY(0);',
				// 二手车价格状态
				erJiaGeState: false,
				// 二手车排序状态
				erPaiXuState:false,
				// 二手车排序样式
				erPaiXuStyle: 'transform: scaleY(0);',
				// 新车排序样式
				xinPaiXuStyle: 'transform: scaleY(0);',
				// 新车排序状态
				xinPaiXuState: false,
				// 新车价格样式
				xinJiaGeStyle: 'transform: scaleY(0);',
				// 新车价格状态
				xinJiaGeState: false,
				// 新车品牌样式
				xinPinPaiStyle: 'transform: scaleY(0);',
				// 新品牌状态
				xinPinPaiState: false,
				// 二手车品牌样式
				erPinPaiStyle: 'transform: scaleY(0);',
				// 二手车品牌状态
				erPinPaiState: false,
				// 新车车型
				xinCheXingStyle: 'transform: scaleY(0);',
				// 新车车型状态
				xinCheXingState: false,
				// 二手车车型状态
				erCheXingState: false,
				// 二手车车型样式
				erCheXingStyle: 'transform: scaleY(0);',
				// 新车品牌样式
				// 是否展示新车车型
				ifShowXinCheXing: true,
				// 新车车型List
				xinCheXingList:[],
				// 是否展示二手车车型
				ifShowErCheXing: true,
				// 二手车车型List
				erCheXingList:[],
				title: 'grid',
				lists: [],
				touchmove: false,
				touchmoveIndex: -1,
				itemHeight: 0,
				winHeight: 0,
				scrollViewId: "A",
				titleHeight: 0,
				cheXingList:[]
			}
		},
		onLoad(params) {
			let winHeight = uni.getSystemInfoSync().windowHeight;
			this.itemHeight = winHeight / 26;
			this.winHeight = winHeight;
			// 获取特价好车列表
			this.getGoodCar();
			// 获取所有品牌
			this.getCarBrand();
		},
		methods: {
			// 车辆详情
			goInfo(){
				uni.navigateTo({
					url: '../carInformation/carInformation?carInfo='+JSON.stringify(this.jiaJson)
				});
			},
			// 二手车车型查找
			setErCheXing(carName){
				if(carName == ''){
					this.erCheXing = '车型';
				}else{
					this.erCheXing = carName;
				}
				this.goodCarData.audiName = carName;
				this.goodCarData.page = 1;
				this.getGoodCar();
				this.openErCheXing();
			},
			// 新车车型查找
			setXinCheXing(carName){
				if(carName == ''){
					this.xinCheXing = '车型';
				}else{
					this.xinCheXing = carName;
				}
				this.goodCarData.audiName = carName;
				this.goodCarData.page = 1;
				this.getGoodCar();
				this.openXinCheXing();
			},
			// 获取二手车车型
			getErCheXing(carName){
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
				params.bodyData = {brandName:carName.carName};
				uni.showLoading({
					title: '加载中请稍后',
					mask: true
				});
				this.$postRequest('/carAudi/SELECT_BY_BRAND',params,(resData)=>{
					uni.hideLoading();
					// 获取品牌数据成功
					if(resData.data.code == 0){
						this.erCheXingList = resData.data.body;
						this.ifShowErCheXing = false;
					}else{
						uni.showToast({
							title: resData.data.msg,
							icon: 'none',
							mask: false,
							duration: 1500
						});
					}
					
				})
			},
			// 获取新车车型
			getXinCheXing(carName){
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
				params.bodyData = {brandName:carName.carName};
				uni.showLoading({
					title: '加载中请稍后',
					mask: true
				});
				this.$postRequest('/carAudi/SELECT_BY_BRAND',params,(resData)=>{
					uni.hideLoading();
					// 获取品牌数据成功
					if(resData.data.code == 0){
						this.xinCheXingList = resData.data.body;
						this.ifShowXinCheXing = false;
					}else{
						uni.showToast({
							title: resData.data.msg,
							icon: 'none',
							mask: false,
							duration: 1500
						});
					}
					
				})
			},
			// 二手车来源查找
			getLaiYuan(params,name){
				this.goodCarData.dataSources = params;
				this.cheYuan = name;
				this.goodCarData.page = 1;
				this.getGoodCar();
				this.openLaiYuan();
			},
			// 查找二手车排序
			getErPaiXu(params,name){
				this.goodCarData.paixu = params;
				this.goodCarData.page = 1;
				this.paiXu2 = name;
				this.getGoodCar();
				this.openErPaiXu();
			},
			// 查找新车排序
			getXinPaiXu(params,name){
				this.goodCarData.paixu = params;
				this.goodCarData.page = 1;
				this.paiXu = name;
				this.getGoodCar();
				this.openXinPaiXu();
			},
			// 查找二手车价格
			getErPrice(params,name){
				this.goodCarData.carPrice = params;
				this.goodCarData.page = 1;
				this.jiaGe2 = name;
				this.getGoodCar();
				this.openErJiaGe();
			},
			// 查找新车价格
			getXinPrice(params,name){
				this.goodCarData.carPrice = params;
				this.goodCarData.page = 1;
				this.jiaGe = name;
				this.getGoodCar();
				this.openXinJiaGe();
			},
			// 查找二手车品牌
			getErChePinPai(params){
				if(params.carName == '全部品牌'){
					params.carName = '';
					this.pinPai2 = '全部品牌'
					this.erCheXingList = [];
					this.ifShowErCheXing = true;
				}else{
					this.pinPai2 = params.carName;
					this.getErCheXing({carName:params.carName});
				}
				this.goodCarData.brandName = params.carName;
				this.goodCarData.audiName = '';
				this.erCheXing = '车型';
				this.goodCarData.page = 1;
				this.getGoodCar();
				this.openErPinPai();
			},
			// 查找新车品牌
			getXinChePinPai(params){
				if(params.carName == '全部品牌'){
					params.carName = '';
					this.pinPai = '全部品牌';
					this.ifShowXinCheXing = true;
					this.xinCheXingList = [];
				}else{
					this.pinPai = params.carName;
					this.getXinCheXing({carName:params.carName});
				}
				this.goodCarData.brandName = params.carName;
				this.goodCarData.audiName = '';
				this.xinCheXing = '车型';
				this.goodCarData.page = 1;
				this.getGoodCar();
				this.openXinPinPai();
			},
			// 查找二手车
			getErShouChe(){
				if(this.erOrXin == true){
					this.goodCarData = {
						"audiId": "",
						"brandId": "",
						"carPrice":null,
						"carYear":null,
						"dataSources": "",	
						"page": 1,
						"paixu": "",
						"rows": 10,
						"state": "1",
						"brandName": ""
					}
					this.getGoodCar();
					this.pinPai2 = '品牌';
					this.cheYuan = '车源';
					this.jiaGe2 = '价格';
					this.paiXu2 = '排序';
				}else{
					return;
				}
			},
			// 查找新车
			getXinChe(){
				if(this.erOrXin != true){
					this.goodCarData = {
						"audiId": "",
						"brandId": "",
						"carPrice":null,
						"carYear":null,
						"dataSources": "",	
						"page": 1,
						"paixu": "",
						"rows": 10,
						"state": "0",
						"brandName": ""
					}
					this.getGoodCar();
					this.pinPai = '品牌';
					this.jiaGe = '价格';
					this.paiXu = '排序';
				}else{
					return;
				}
			},
			// 打开新车品牌
			openXinPinPai(){
				this.xinPaiXuState = false;
				this.xinPaiXuStyle = 'transform: scaleY(0);';
				this.xinJiaGeState = false;
				this.xinJiaGeStyle = 'transform: scaleY(0);';
				this.xinCheXingState = false;
				this.xinCheXingStyle = 'transform: scaleY(0);';
				if(this.xinPinPaiState == false){
					this.xinPinPaiState = true;
					this.xinPinPaiStyle = 'transform: scaleY(1);';	
				}else{
					this.xinPinPaiState = false;
					this.xinPinPaiStyle = 'transform: scaleY(0);';	
				}
			},
			// 新车功能
			touchStart(e) {
				this.touchmove = true;
				let pageY = e.touches[0].pageY;
				let index = Math.floor((pageY - this.titleHeight) / this.itemHeight);
				let item = this.lists[index];
				if (item) {
					this.scrollViewId = item.letter;
					this.touchmoveIndex = index;
				}
			},
			touchMove(e) {
				let pageY = e.touches[0].pageY;
				let index = Math.floor((pageY - this.titleHeight) / this.itemHeight);
				let item = this.lists[index];
				if (item) {
					this.scrollViewId = item.letter;
					this.touchmoveIndex = index;
				}
			},
			touchEnd() {
				this.touchmove = false;
				this.touchmoveIndex = -1;
			},
			touchCancel() {
				this.touchmove = false;
				this.touchmoveIndex = -1;
			},
			// 打开二手车车型
			openErCheXing(){
				this.erPaiXuState = false;
				this.erPaiXuStyle = 'transform: scaleY(0);';
				this.erPinPaiState = false;
				this.erPinPaiStyle = 'transform: scaleY(0);';	
				this.erJiaGeState = false;
				this.erJiaGeStyle = 'transform: scaleY(0);';
				this.laiYuanState = false;
				this.laiYuanStyle = 'transform: scaleY(0);';
				if(this.erCheXingState == false){
					this.erCheXingState = true;
					this.erCheXingStyle = 'transform: scaleY(1);';	
				}else{
					this.erCheXingState = false;
					this.erCheXingStyle = 'transform: scaleY(0);';	
				}
			},
			// 打开新车车型
			openXinCheXing(){
				this.xinPaiXuState = false;
				this.xinPaiXuStyle = 'transform: scaleY(0);';
				this.xinPinPaiState = false;
				this.xinPinPaiStyle = 'transform: scaleY(0);';	
				this.xinJiaGeState = false;
				this.xinJiaGeStyle = 'transform: scaleY(0);';	
				if(this.xinCheXingState == false){
					this.xinCheXingState = true;
					this.xinCheXingStyle = 'transform: scaleY(1);';	
				}else{
					this.xinCheXingState = false;
					this.xinCheXingStyle = 'transform: scaleY(0);';	
				}
			},
			// 打开新车价格
			openXinJiaGe(){
				this.xinPaiXuState = false;
				this.xinPaiXuStyle = 'transform: scaleY(0);';
				this.xinPinPaiState = false;
				this.xinPinPaiStyle = 'transform: scaleY(0);';	
				this.xinCheXingState = false;
				this.xinCheXingStyle = 'transform: scaleY(0);';	
				if(this.xinJiaGeState == false){
					this.xinJiaGeState = true;
					this.xinJiaGeStyle = 'transform: scaleY(1);';	
				}else{
					this.xinJiaGeState = false;
					this.xinJiaGeStyle = 'transform: scaleY(0);';	
				}
			},
			// 打开新车排序
			openXinPaiXu(){
				this.xinJiaGeState = false;
				this.xinJiaGeStyle = 'transform: scaleY(0);';
				this.xinPinPaiState = false;
				this.xinPinPaiStyle = 'transform: scaleY(0);';	
				this.xinCheXingState = false;
				this.xinCheXingStyle = 'transform: scaleY(0);';	
				if(this.xinPaiXuState == false){
					this.xinPaiXuState = true;
					this.xinPaiXuStyle = 'transform: scaleY(1);';	
				}else{
					this.xinPaiXuState = false;
					this.xinPaiXuStyle = 'transform: scaleY(0);';	
				}
			},
			// 打开二手车品牌
			openErPinPai(){
				this.erPaiXuState = false;
				this.xinPaiXuStyle = 'transform: scaleY(0);';
				this.xinJiaGeState = false;
				this.xinJiaGeStyle = 'transform: scaleY(0);';
				this.erCheXingState = false;
				this.erCheXingStyle = 'transform: scaleY(0);';
				if(this.erPinPaiState == false){
					this.erPinPaiState = true;
					this.erPinPaiStyle = 'transform: scaleY(1);';	
				}else{
					this.erPinPaiState = false;
					this.erPinPaiStyle = 'transform: scaleY(0);';	
				}
			},
			// 打开二手车排序
			openErPaiXu(){
				this.laiYuanState = false;
				this.laiYuanStyle = 'transform: scaleY(0);';
				this.erJiaGeState = false;
				this.erJiaGeStyle = 'transform: scaleY(0);';
				this.erCheXingState = false;
				this.erCheXingStyle = 'transform: scaleY(0);';
				if(this.erPaiXuState == false){
					this.erPaiXuState = true;
					this.erPaiXuStyle = 'transform: scaleY(1);';	
				}else{
					this.erPaiXuState = false;
					this.erPaiXuStyle = 'transform: scaleY(0);';	
				}
			},
			// 打开二手车价格
			openErJiaGe(){
				this.laiYuanState = false;
				this.laiYuanStyle = 'transform: scaleY(0);';
				this.erPaiXuState = false;
				this.erPaiXuStyle = 'transform: scaleY(0);';
				this.erCheXingState = false;
				this.erCheXingStyle = 'transform: scaleY(0);';
				if(this.erJiaGeState == false){
					this.erJiaGeState = true;
					this.erJiaGeStyle = 'transform: scaleY(1);';	
				}else{
					this.erJiaGeState = false;
					this.erJiaGeStyle = 'transform: scaleY(0);';	
				}
			},
			// 打开来源
			openLaiYuan(){
				this.erJiaGeState = false;
				this.erJiaGeStyle = 'transform: scaleY(0);';
				this.erPaiXuState = false;
				this.erPaiXuStyle = 'transform: scaleY(0);';
				this.erPinPaiState = false;
				this.erPinPaiStyle = 'transform: scaleY(0);';
				this.erCheXingState = false;
				this.erCheXingStyle = 'transform: scaleY(0);';
				if(this.laiYuanState == false){
					this.laiYuanState = true;
					this.laiYuanStyle = 'transform: scaleY(1);';	
				}else{
					this.laiYuanState = false;
					this.laiYuanStyle = 'transform: scaleY(0);';	
				}
			},
			// 打开新车页面
			openXinChe(){
				this.vehicleSourceTopLeftClass = 'vehicleSourceTopActive';
				this.vehicleSourceTopRightClass = '';
				this.getXinChe();
				// 关闭二手车所有页面
				this.erOrXin = true;
				this.laiYuanState = false;
				this.laiYuanStyle = 'transform: scaleY(0);';
				this.erJiaGeState = false;
				this.erJiaGeStyle = 'transform: scaleY(0);';
				this.erPaiXuState = false;
				this.erPaiXuStyle = 'transform: scaleY(0);';
				this.erPinPaiState = false;
				this.erPinPaiStyle = 'transform: scaleY(0);';
				this.erCheXingState = false;
				this.erCheXingStyle = 'transform: scaleY(0);';
				
			},
			// 打开二手车页面
			openErShouChe(){
				this.vehicleSourceTopLeftClass = '';
				this.vehicleSourceTopRightClass = 'vehicleSourceTopActive';
				this.getErShouChe()
				// 关闭所有新车页面
				this.erOrXin = false;
				this.xinPaiXuState = false;
				this.xinPaiXuStyle = 'transform: scaleY(0);';
				this.xinJiaGeState = false;
				this.xinJiaGeStyle = 'transform: scaleY(0);';
				this.xinPinPaiState = false;
				this.xinPinPaiStyle = 'transform: scaleY(0);';
				this.xinCheXingState = false;
				this.xinCheXingStyle = 'transform: scaleY(0);';	
			},
			// 获取特价好车
			getGoodCar(){
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
					if(this.ifHaveGoodCar == '已经是全部数据了' && this.oldGoodCarData == this.goodCarData){
						this.ifHaveGoodCar = '已经是全部数据了';
					}else if(this.goodCarList == resData.data.body.total && this.oldGoodCarData == this.goodCarData){
						this.ifHaveGoodCar = '已经是全部数据了';
					}else{
						if(resData.data.code == 0){
							this.oldGoodCarData = this.goodCarData;
							this.goodCarTotal = resData.data.body.total;
							if(this.goodCarData.page == 1){
								this.goodCarList = resData.data.body.rows;
							}else{
								this.goodCarList = this.goodCarList.concat(resData.data.body.rows);
							}
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
			},
			getCarBrand(){
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
				params.bodyData = {};
				uni.showLoading({
					title: '加载中请稍后',
					mask: false
				});
				this.$postRequest('/carBrand/SELECT_BRAND_ALL',params,(resData)=>{
					uni.hideLoading();
					// 获取品牌数据成功
					if(resData.data.code == 0){
						var carBrandData = resData.data.body;
						var jsonOne = {letter:'',data:[]};
						for(let i in carBrandData){
							if(carBrandData[i].letters == this.cheXingState){
								jsonOne.data.push(carBrandData[i].name);
								if(i == carBrandData.length - 1){
									this.cheXingList.push(jsonOne);
									this.lists = this.cheXingList;
								}
							}else{
								this.cheXingState = carBrandData[i].letters;
								jsonOne.letter = carBrandData[i].letters;
								jsonOne.data.push(carBrandData[i].name);
								this.cheXingList.push(jsonOne);
								jsonOne = {letter:'',data:[]};
							}
						}	
					}else{
						uni.showToast({
							title: resData.data.msg,
							mask: false,
							duration: 1500
						});
					}
				})
			},
			// 上划无效果
			moveHandle(){}
		},
		// 上滑加载特价好车列表
		onReachBottom(){
			this.goodCarData.page++;
			this.getGoodCar();
		}
	}
</script>
