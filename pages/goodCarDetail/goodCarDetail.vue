<style>
	/*顶部*/
	.top-info{
		position: relative;
	}
	.top-info image{
		width: 100%;
		height: 100%;
	}
	.top-info-img{
		width: 100%;
		height: 450upx;
	}
	.banner swiper{
		height: 100%;
	}
	.swiper-item image{
		width: 100%;
		height: 450upx;
	}
	/* 车辆图片底部 */
	.cars-info-box{
		margin-left: 15upx;
		font-size: 30upx;
	}
	.cars-info{
		display: flex;
		justify-content: space-between;
		padding: 25upx 20upx 25upx 20upx;
		border-bottom:1upx solid #eee;
		align-items: center;
	}
	.cars-info view:nth-child(1){
		color: #333;
		font-weight: 500;
	}
	.cars-info view:nth-child(2){
		color: #999;
	}
	/*车辆信息*/
	.cars-info-detail{
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: 18upx 0 18upx 0;
	}
	.cars-info-detail-name{
		display: flex;
		align-items: center;
		width: 50%;
		justify-content: center;
	}
	.cars-info-detail-name view:nth-child(1){
		color: #999;
		display: flex;
		justify-content: flex-end;
		width: 50%;
	}
	.cars-info-detail-name view:nth-child(2){
		color: #333;
		display: flex;
		justify-content: flex-start;
		padding-left: 20upx;
		width: 50%;
	}
	.cars-info-detail-price{
		width: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.cars-info-detail-price view:nth-child(1){
		width: 50%;
		display: flex;
		justify-content: flex-end;
		color: #999;
	}
	.cars-info-detail-price view:nth-child(2){
		width: 50%;
		padding-left: 10upx;
	}
	.cars-info-bottom-border{
		height: 1upx;
		width: 100%;
		background: #eee;
	}
	/* 车辆照片 */
	.cars-info-img{
		display: flex;
		padding: 25upx 20upx 25upx 20upx;
		border-bottom:1upx solid #eee;
		flex-direction: column;
		justify-content: center;
	}
	.cars-info-img view:nth-child(1){
		
	}
	.cars-info-img view:nth-child(2){
		width: 160upx;
		height: 100upx;
		display: flex;
		justify-content: center;
		margin-bottom: 80upx;
	}
	.cars-info-img view:nth-child(2) image{
		width: 100%;
		height: 100%;
		padding-top: 30upx;
	}
	.cars-info-beizhu{
		display: flex;
		padding: 25upx 20upx 25upx 20upx;
		border-bottom:1upx solid #eee;
		flex-direction: column;
		justify-content: center;
		margin-bottom: 100upx;
	}
	.cars-info-beizhu view:nth-child(2){
		color: #999;
		padding-top: 15upx;
	}
	/*底部拨打电话*/
	.cars-info-btn{
		position:fixed;
		bottom: 0;
		background: #4A90FF;
		width: 100%;
		color: white;
		height: 100upx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 33upx;
	}
</style>
<!-- v-for="(item,index) in img_lists" :key="index" -->
<template>
	<view>
		<view class="top-info">
			<view 
				class="top-info-img" 
				style="height: 450upx;">	
				<swiper 
					style="height: 450upx;" 
					:indicator-dots="true" 
					:autoplay="true" 
					:interval="3000" 
					:duration="500" 
					indicator-color="#f3f3f3" 
					indicator-active-color="#4A90FF" 
					autoplay="true" 
					circular="true">
					<swiper-item 
						v-for="(item,index) in img_list" 
						:key="index" >
						<view class="swiper-item">
							<image :src="item" mode=""></image>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="cars-info-box">
			<view class="cars-info">
				<view>车辆信息</view>
				<view>{{good_car_info.updateTime}}更新</view>
			</view>
			<view class="cars-info-detail">
				<view class="cars-info-detail-name">
					<view>车辆类型</view>
					<block v-if="good_car_info.state == 1"><view>新车</view></block>
					<block v-if="good_car_info.state == 2"><view>二手车</view></block>
				</view>
				<view class="cars-info-detail-price">
					<view>批发价</view>
					<view style="color:#C79410 ;">{{good_car_info.carPrice}}万</view>
				</view>
			</view>
			<view class="cars-info-detail">
				<view class="cars-info-detail-name">
					<view>颜色</view>
					<view>{{good_car_info.carColor}}</view>
				</view>
				<view class="cars-info-detail-price"></view>
			</view>
			<view class="cars-info-detail">
				<view class="cars-info-detail-name">
					<view>车源有效期</view>
					<view>2019/06/13</view>
				</view>
				<view class="cars-info-detail-price">
					<view>车辆所在地</view>
					<view>{{good_car_info.city}}</view>
				</view>
			</view>
			<view class="cars-info-detail">
				<view class="cars-info-detail-name">
					<view>销售区域</view>
					<view>{{good_car_info.salesArea}}</view>
				</view>
				<view class="cars-info-detail-price"></view>
			</view>
			<view class="cars-info-detail">
				<view class="cars-info-detail-name">
					<view>手续</view>
					<view v-if="good_car_info.procedures == 0">有</view>
					<view v-if="good_car_info.procedures == 1">没有</view>
				</view>
				<view class="cars-info-detail-price"></view>
			</view>
			<view class="cars-info-bottom-border"></view>
			<view class="cars-info-img">
				<view>车辆信息</view>
				<view @tap="look_img_detail()"><image  :src="img_list[0]"></image></view>
			</view>
			<view class="cars-info-beizhu">
				<view>备注</view>
				<view>{{good_car_info.remark}}</view>
			</view>
		</view>
		<view class="cars-info-btn" @tap="$goPhone(good_car_info.merchantPhone)">打电话</view>
	</view>
</template>

<script>
	import { get_good_car_detail } from "@/common/api/goodCarDetail.js"
	export default{
		data(){
			return{
				good_car_info:'',
				img_list:[
				],
			}
		},
		onLoad(options){
			this.get_good_car_info(options.id);
		},
		onShow() {
			
		},
		methods: {
			// 加载好车详情
			async get_good_car_info(t){
				try{
					let params = { id: t };
					let resData = await get_good_car_detail(params);
					if(resData.code === 200){
						this.good_car_info = resData.result;
						//字符串转换为数组
						this.img_list = resData.result.carImg.split(',');
					}else{
						this.$toast(resData.message);
					}
				}catch(e){
					this.$toast('请求失败');
				}
			},
			//预览图片
			look_img_detail(){
				return;
				// var imgLists = this.img_list; //获取data-list
				// var index = 0;
				// //图片预览
				// uni.previewImage({
				// 	current: imgLists[index], // 当前显示图片的http链接
				// 	urls:imgLists,// 需要预览的图片http链接列表
				// 	indicator: "number",
				// 	loop: true
				// })
			},
		}
	}
</script>

