<style>
*{
	margin: 0;
	padding: 0;
}
#paiXu{
	width: 750upx;
}
.paiXuChild{
	width: 750upx;
	background: #FFFFFF;
	height: 90upx;
	line-height: 90upx;
	border-bottom: 1upx solid #E8E8E8;
	padding-left: 30upx;
	box-sizing: border-box;
	font-size: 26upx;
}
.paiXuChild:first-child{
	border-top: 1upx solid #E8E8E8;
}
</style>
<template>
	<view id="paiXu">
		<view class="paiXuChild" @tap="goWindow('最近入库',1)">
			最近入库
		</view>
		<view class="paiXuChild" @tap="goWindow('最早入库',2)">
			最早入库
		</view>
		<view class="paiXuChild" @tap="goWindow('价格最高',3)">
			价格最高
		</view>
		<view class="paiXuChild" @tap="goWindow('价格最低',4)">
			价格最低
		</view>
		<view class="paiXuChild" @tap="goWindow('车龄最短',5)">
			车龄最短
		</view>
		<view class="paiXuChild" @tap="goWindow('里程最短',6)">
			里程最短
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
			goWindow(state,index){
				var pages = getCurrentPages();
				var currPage = pages[pages.length - 1]; //当前页面
				var prevPage = pages[pages.length - 2]; //上一个页面
				//h5的写法
				prevPage.paiXu = state;
				prevPage.orderNum = index;
				prevPage.page = 1;
				prevPage.ifHaveGoodCar = '上划加载';
				prevPage.$vm.ifHaveGoodCar = '上划加载';
				//小程序的写法 具体要怎么写可以打印一下prevPage看一下
				prevPage.$vm.paiXu = state;
				prevPage.$vm.orderNum = index;
				prevPage.$vm.page = 1;
				uni.navigateBack();
			}
		}
	}
</script>

