<style>
	@import '../../common/uni.css';
	/* 弹出层样式 */
	.erJiContent{
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		background-color: #FFFFFF;
		z-index: 2;
		transition: 0.3s all ease;
		overflow: hidden !important;
	}
	.erJiContent:last-child{
		z-index: 4 !important;
	}
	.erJiContentTop{
		width: 100%;
		background: #FFFFFF;
		height: 90upx;
		line-height: 90upx;
		padding-left: 40upx;
		font-size: 30upx;
		border-bottom: 1upx solid #E8E8E8;
	}
	.uni-list-item{
		box-sizing: border-box;
		padding-left: 35upx;
		width: 100%;
		text-align: left;
		height: 90upx;
		line-height: 90upx;
		border-bottom: 1upx solid #E8E8E8;
	}
	.uni-mask {
		position: fixed;
		z-index: 1;
		top: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.3);
	}
	.uni-mask2{
		position: fixed;
		z-index: 3;
		top: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.3);
	}
	.uni-list-item:last-child{
		border: none;
	}
	.center-box {
		width: 100%;
		height: 100%;
	}
	.page {
		display: flex;
		flex-direction: row;
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
	.oneChild2{
		height: 90upx;
		line-height: 90upx;
		padding-left: 20upx;
		font-size: 20upx;
		text-align: left;
		border-bottom: 1upx solid #E8E8E8;
	}
	.oneChild1{
		height: 60upx;
		line-height: 60upx;
		padding-left: 20upx;
		font-size: 20upx;
		text-align: left;
		background-color: #E8E8E8;
		border-bottom: 1upx solid #E8E8E8;
	}
	.oneChild2 text{
		display: inline-block;
		width: 100%;
		word-wrap:break-word;
		word-break:break-all;
	}
	.oneChild2:last-child{
		border-bottom: none;
	}
	.one{
		height: 90upx;
		line-height: 90upx;
		border-bottom: 1upx solid #E8E8E8;
	}
</style>
<template>
	<view class="page">
		<scroll-view class="scrollList" scroll-y :scroll-into-view="scrollViewId" :style="{height:winHeight + 'px'}">
			<view class="uni-list">
				<block v-for="(list, key) in lists" :key="key">
					<block v-if="list.data.length">
						<view class="uni-list-cell-divider" :id="list.letter">
							{{list.letter}}
						</view>
						<view class="one" v-for="(carname,index) in list.data" :key="index" :class="list.data.length -1 == index ? 'uni-list-cell-last' : ''">
							<view class="oneChild" @click="getCheXingChild({carName:carname})">
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
		<!-- 二级蒙层 -->
		<view class="uni-mask" @click="closeCheXingErJi" @touchmove.stop.prevent="moveHandle" :style="erJiContentBgStyle"/>
		<view class="erJiContent" :style="erJiContentStyle">
			<view class="erJiContentTop">{{ erJiTopMsg }}</view>
			<scroll-view :scroll-y="true" class="uni-center center-box" :style="centerBoxStyle">
				<view v-for="(item, index) in list" :key="index" class="uni-list-item" @click="getEndCheXing({carName:item.sname,carId:item.sid})">
					{{ item.sname }}
				</view>
			</scroll-view>
		</view>
		<!-- 三级蒙层 -->
		<view class="uni-mask2" @click="closeCheXingErJi2" @touchmove.stop.prevent="moveHandle" :style="erJiContentBgStyle2"/>
		<!-- 三级 -->
		<view class="erJiContent" :style="erJiContentStyle2">
			<view class="erJiContentTop">{{ erJiTopMsg2 }}</view>
			<scroll-view :scroll-y="true" class="center-box" :style="centerBoxStyle">
				<view v-for="(item, index) in listEnd" :key="index">
					<view class="oneChild1" v-if="item.state">
						<text>{{ item.yname }}</text>
					</view>
					<view class="oneChild2" @click="goAddCar({carName:item.name,carId:item.id})">
						<text>{{ item.name }}</text>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	var airportDate = require("@/common/airport.js");
	import uniPopup from '@/components/uni-popup/uni-popup.vue';
	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				title: 'grid',
				lists: [],
				list: [],
				touchmove: false,
				touchmoveIndex: -1,
				itemHeight: 0,
				winHeight: 0,
				scrollViewId: "A",
				titleHeight: 0,
				// 首级初始化数据
				cheXingList:[],
				// 二级初始化数据
				erJiChuShiHua:[],
				// 车辆信息
				carInfo:{brandName:'',seriesName:'',styleName:'',styleId: ''},
				// 二级样式
				erJiContentStyle: 'width: 0px;',
				erJiContentBgStyle: 'width: 0px;',
				erJiContentBgStyle2:'width: 0px;',
				erJiContentStyle2: 'width: 0px;',
				erJiTopMsg:'',
				erJiTopMsg2:'',
				listEnd:[],
				cheXingEndState:''
			}
		},
		onLoad() {
			let winHeight = uni.getSystemInfoSync().windowHeight;
			this.itemHeight = winHeight / 26;
			this.winHeight = winHeight;
			this.centerBoxStyle = 'height:'+winHeight+'px;';
			this.getCarBrand();
		},
		methods: {
			goAddCar(carName){
				var pages = getCurrentPages();
				var currPage = pages[pages.length - 1]; //当前页面
				var prevPage = pages[pages.length - 2]; //上一个页面
				this.carInfo.styleName = carName.carName;
				this.carInfo.styleId = carName.carId;
				//h5的写法
				prevPage.pinPaiXingHao = this.carInfo;
				prevPage.pinPaiXingHaoInfo = carName.carName;
				prevPage.styleName = carName.carName;
				//小程序的写法 具体要怎么写可以打印一下prevPage看一下
				prevPage.$vm.pinPaiXingHao = carName.carName;
				prevPage.$vm.pinPaiXingHaoInfo = this.carInfo;
				prevPage.$vm.styleName = carName.carName;
				prevPage.ifHaveGoodCar = '上划加载';
				prevPage.$vm.ifHaveGoodCar = '上划加载';
				uni.navigateBack();
			},
			// 获取尾级车型
			getEndCheXing(endCarName){
				this.erJiTopMsg2 = endCarName.carName;
				this.carInfo.seriesName = endCarName.carName;
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
				params.bodyData = {brandName:endCarName.carId};
				uni.showLoading({
					title: '加载中请稍后',
					mask: true
				});
				this.$postRequest('/carType/SELECT_BY_AUDI',params,(resData)=>{
					uni.hideLoading();
					// 获取品牌数据成功
					if(resData.data.code == 0){
						var carBrandData = resData.data.body;
						console.log(carBrandData)
						for(let i in carBrandData){
							console.log(carBrandData[i].yname);
							if(carBrandData[i].yname == this.cheXingEndState){
								carBrandData[i].state = false;
							}else{
								carBrandData[i].state = true;
								this.cheXingEndState = carBrandData[i].yname;
								console.log(this.cheXingEndState)
							}
							if(i == carBrandData.length - 1){
								this.listEnd = carBrandData;
								this.openCheXingErJi2();
							}
						}	
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
			// 获取车型子集车型
			getCheXingChild(carName){
				this.erJiTopMsg = carName.carName;
				this.carInfo.brandName = carName.carName;
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
						var carBrandData = resData.data.body;
						for(let i in carBrandData){
							if(carBrandData[i].name == this.cheXingChildState){
								carBrandData[i].state = false;
							}else{
								carBrandData[i].state = true;
								this.cheXingChildState = carBrandData[i].name;
							}
							if(i == carBrandData.length - 1){
								this.list = carBrandData;
								this.openCheXingErJi();
							}
						}	
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
			// 关闭三级弹出层
			closeCheXingErJi2(){
				this.erJiContentStyle2 = 'width: 0px;';
				this.erJiContentBgStyle2 = 'width: 0px;';
			},
			//打开三级弹出层
			openCheXingErJi2(){
				this.erJiContentStyle2 = 'width: 60%;';
				this.erJiContentBgStyle2 = 'width: 100%;';
			},
			// 关闭二级二级弹出层
			closeCheXingErJi(){
				this.erJiContentStyle = 'width: 0px;';
				this.erJiContentBgStyle = 'width: 0px;';
			},
			//打开二级弹出层
			openCheXingErJi(){
				this.erJiContentStyle = 'width: 80%;';
				this.erJiContentBgStyle = 'width: 100%;';
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
			moveHandle() {}
		}
	}
</script>

