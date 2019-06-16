<style scoped>
	#app{
		width: 750upx;
		background-color: #f3f3f3;
	}
	.head{
		width: 750upx;
		/* padding: 20upx; */
		flex-wrap: wrap;
		display: flex;
		align-items: center;
		justify-content: flex-start; 
	}
	.head:first-child{
		background-color: #108ee9;
	}
	.head:nth-child(2){
		background-color: #ffffff;
		margin-top: 10upx;
	}
	.headChild {
		width: 175upx;
		height: 125upx;
		margin-left: 10upx;
		margin-top: 10upx;
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
		margin: 10upx 0upx 0upx 0upx;
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
		padding: 15upx 35upx;
		box-sizing: border-box;
		display: flex;
		font-size: 26upx;
		align-items: center;
		justify-content: space-between;
	}
	.notice-title-item{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 550upx;
		height: 150upx;
	}

    .Recommend-right{
        display:flex;
        align-items:center;
        padding-top:10upx;
        padding-bottom:10upx;
		color: #333;
    }
	.Recommend-right>view:first-child{
		max-width: 160upx;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.Recommend-right>view:last-child{
		width: 350upx;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.swiper-content {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 280upx;
	}
	.swiper-content swiper {
		height: 280upx;
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
		padding: 10upx 0;
		border-bottom: 10upx solid #f3f3f3;
		margin: 10upx;
	}
	.carListsLeft{
		width: 45%;
		float: left;
		height: 200upx;
	}
	.carListsLeft image{
		width: 100%;
		height: 200upx;
	}
	.carListsRight{
		float: right;
		width: 50%;
		margin-right: 2%;
		display: flex;
		flex-direction:column;
		
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
		margin: 10upx 0;
	}
	.carListsRight text:nth-child(3){
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		color: #21bfff;
		display: inline-block;
		width: 80%;
		padding: 20upx 0 0 0;
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
			<view 
				v-if="$qx('addCar')"
				class="headChild headChildTop" 
				@click="$goNavWindow('../addCar/addCar?carName=必填')">
				<image src="../../static/index/sys.png" mode=""></image><br>
				<text>新建车辆</text>
			</view>
			<view 
				class="headChild headChildTop" 
				@tap="$goWindow('../wisdom/wisdom')"
				v-if="$qx('wisdom')">
				<image src="../../static/index/IntelligentMarketing.png" mode=""></image><br>
				<text>智慧营销</text>
			</view>
			<view 
				class="headChild headChildTop" 
				@tap="$goNavWindow('../goodCars/goodCars')" 
				v-if="$qx('goodCar')">
				<image src="../../static/index/specialCar.png" mode=""></image><br>
				<text>特价好车</text>
			</view>
			<view 
				class="headChild headChildTop" 
				@tap="$goWindow('../weiDian/weiDian')"
				v-if="$qx('microShop')">
				<image src="../../static/index/weiDian.png" mode=""></image><br>
				<text>微店</text>
			</view>
		</view>
		<!-- 白色头部背景 -->
		<view class="head">
			<view 
				class="headChild" 
				@click="$goWindow('../vehicleSource/vehicleSource?paiXu=最近入库')"
				v-if="$qx('carAdmin')">
				<image src="../../static/index/goOut.png" mode=""></image><br>
				<text>车辆管理</text>
			</view>
			<view 
				class="headChild" 
				@tap="$goWindow('../vehicleSource/vehicleSource?paiXu=最近入库&shangjia=1')">
				<image src="../../static/index/nowCarNum.png" mode=""></image><br>
				<text>上架车辆</text>
			</view>
			<view 
				class="headChild" 
				@tap="$goNavWindow('../statistics/statistics')"
				v-if="$qx('dataStatistic')">
				<image src="../../static/index/nowMonthCarNum.png" mode=""></image><br>
				<text>数据统计</text>
			</view>
			<!-- @tap="$goNavWindow('../statistics/statistics')" -->
			<view 
				class="headChild" 
				v-if="$qx('allCars')"
				@tap="$goWindow('../quanWangCheYuan/quanWangCheYuan')">
				<image src="../../static/index/cheYuan.png" mode=""></image><br>
				<text>全网车源</text>
			</view>
			<!-- <view class="headChild" @tap="zwkf()">
				<image src="../../static/index/shuJuFenXi.png" mode=""></image><br>
				<text>数据分析</text>
			</view> -->
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
		<view class="notice" v-if="qx != 'admine'">
			<view class="notice-img">
				<view><image src="../../static/index/notice.png" style="width: 70upx;height: 70upx;"></image></view>
			</view>
			<view class="notice-title">
				<view class="notice-title-item">
					<view 
						style="width: 300upx;"
						v-if="notice_list.length == 0">暂无公告</view>
					<view 
						style="width: 550upx;"
						v-if="notice_list.length == 1"
						@tap="$goWindow('../noticeList/noticeList')"
						>{{ notice_list[0].title }}:{{ notice_list[0].noticeContent}}</view>
					<swiper 
						:circular="true" 
						vertical="true"  
						autoplay='true'   
						interval='5000' 
						indicator-color='white' 
						indicator-active-color='white'
						v-if="notice_list.length > 1"
						 @tap="$goWindow('../noticeList/noticeList')"
						style='height:120upx;width: 550upx;'>
						<swiper-item 
							v-for="(item,index) in notice_list" 
							:key="index" 
							style="width: 400upx; height: 150upx;">
							<view 
								class="Recommend-right" 
								v-for="(items,index2) in item" 
								:key="index2">
								<view>{{items.title}}：</view>
								<view>{{items.noticeContent}}</view>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
			<view class="notice-more">
				<view>
					<image 
						src="../../static/index/jianTou.png" 
						style="width:25upx;height: 25upx;">
					</image>
				</view>
			</view>
		</view>
		<view class="carList">
			<view class="carListTop">
				特价好车
			</view>
			 <!-- @tap="$goWindow('../carInformation/carInformation')" -->
			<view class="carLists" v-for="(item,index) in goodCarList" :key="index">
				<view class="carListsLeft">
					<image @tap="goCarInformation(item.id)" :src="item.carImg" style="width: 100%;height: 100%;"></image>
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
	import { getGoodCar } from '@/common/api/goodCar.js'
	import { getNoticeList } from '@/common/api/noticeList.js'
	
	export default {
		data() {
			return {
				noticeList:[],
				notice_list:[],
				noticePage:1,
				noticePageSize:10,
				qx:'',
				title: '信车',
				// 查询特价好车所需条件
				goodCarData:{
					"audiId": "",
					"brandId": "",
					"carPrice":null,
					"carYear":null,
					"dataSources": "",	
					"pageNum": 1,
					"paixu": "",
					"pageSize": 10,
					"state": "1"
				},
				// 特价好车参数
				goodCarList:[],
				// 是否有更多数据
				ifHaveGoodCar: '上划加载',
				// 查询总数据
				goodCarTotal:0
			}
		},
		onNavigationBarButtonTap(e){
			if(e.index == 0){
				this.$goNavWindow('../me/me')
			}
		},
		onShow(){
			//获取消息通知列表
			this.getNoticeLists()
		},
		onLoad() {
			// 获取特价好车列表
			this.getGoodCar();
		},
		methods: {
			async getNoticeLists(){
				let params = {"pageNum":this.noticePage,"pageSize":this.noticePageSize};
				this.notice_list = [];
				try{
					let resData = await getNoticeList(params);
					if(resData.code === 200){
						if(resData.result.list.length == 1){
							this.notice_list = resData.result.list;
						}else{
							//两条通知一组轮播
							let jsonOne = {}
							var data = resData.result.list;
							var num = 2;
							// var notice_list = this.notice_list;
							for (var i = 0; i < resData.result.list.length; i += num){
								this.notice_list.push(data.slice(i,i+num));
							}
						}
					}else{
						this.$toast(resData.message);
					}
					uni.hideLoading();
				}catch(e){
					this.$toast('请求失败')
				}
			},
			//特价好车详情
			goCarInformation(id){
				uni.navigateTo({
					url:'/pages/goodCarDetail/goodCarDetail?id=' + id
				})
				//this.$goWindow('../carInformation/carInformation?carInfo='+JSON.stringify(this.jiaJson));
			},
			// 获取特价好车
			async getGoodCar(){
				if(this.ifHaveGoodCar == '已经是全部数据了'){
					this.ifHaveGoodCar = '已经是全部数据了';
				}else{
					this.ifHaveGoodCar = '正在加载...';
					this.$loading();
					try{
						let resData = await getGoodCar(this.goodCarData);
						if(this.goodCarList == resData.result.total){
							this.ifHaveGoodCar = '已经是全部数据了';	
						}else{
							if(resData.code === 200){
								this.goodCarTotal = resData.result.total;
								this.goodCarList = this.goodCarList.concat(resData.result.list);
								if(resData.result.hasNextPage == false){
									this.ifHaveGoodCar = '已经是全部数据了';
								}else{
								    this.ifHaveGoodCar = '上拉加载';
								}
							}else{
								this.$toast(resData.message,false)
							}
						}
						uni.hideLoading();
					}catch(e){
						this.$toast('请求失败')
					}
				}
			},
			zwkf(){
				this.$toast('暂未开放',false)
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
			this.goodCarData.pageNum++;
			this.getGoodCar();
		}
	}
</script>

