<style>
*{
	margin: 0;
	padding: 0;
}
#carPrice{
	width: 750upx;
}
.carPriceBody{
	width: 750upx;
	padding-left: 30upx;
	box-sizing: border-box;
}
.carPriceBodyChild{
	width: 145upx;
	height: 60upx;
	line-height: 60upx;
	text-align: center;
	background: #007AFF;
	float: left;
	margin-right: 30upx;
	border-radius: 10upx;
	margin-top: 30upx;
	font-size: 26upx;
	color: #FFFFFF;
	border: 1upx solid #007AFF;
}
</style>

<template>
	<view id="carPrice">
		<view class="carPriceBody">
			<view class="carPriceBodyChild" @tap="goWindow('')">
				不限
			</view>
			<view class="carPriceBodyChild" @tap="goWindow(1)">
				0-3万
			</view>
			<view class="carPriceBodyChild" @tap="goWindow(2)">
				3-5万
			</view>
			<view class="carPriceBodyChild" @tap="goWindow(3)">
				5-10万
			</view>
			<view class="carPriceBodyChild" @tap="goWindow(4)">
				10-15万
			</view>
			<view class="carPriceBodyChild" @tap="goWindow(5)">
				15-20万
			</view>
			<view class="carPriceBodyChild" @tap="goWindow(6)">
				20-30万
			</view>
			<view class="carPriceBodyChild" @tap="goWindow(7)">
				30-50万
			</view>
			<view class="carPriceBodyChild" @tap="goWindow(8)">
				50万以上
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goWindow(state){
				var pages = getCurrentPages();
				var currPage = pages[pages.length - 1]; //当前页面
				var prevPage = pages[pages.length - 2]; //上一个页面
				//h5的写法
				prevPage.carPrice = state
				prevPage.retailPrice = state;
				prevPage.page = 1;
				//小程序的写法 具体要怎么写可以打印一下prevPage看一下
				prevPage.$vm.carPrice = state
				prevPage.$vm.retailPrice = state;
				prevPage.$vm.page = 1;
				prevPage.ifHaveGoodCar = '上划加载';
				prevPage.$vm.ifHaveGoodCar = '上划加载';
				uni.navigateBack();
			}
		}
	}
</script>
