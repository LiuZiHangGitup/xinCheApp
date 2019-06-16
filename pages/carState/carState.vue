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
		<view class="paiXuChild" @tap="goWindow('已在库',0)">
			已在库
		</view>
		<view class="paiXuChild" @tap="goWindow('已上架',1)">
			已上架
		</view>
		<view class="paiXuChild" @tap="goWindow('已售出',2)">
			已出售
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
				prevPage.carStateChoose = state;
				prevPage.state = index;
				if(prevPage.goodCarData){
					prevPage.goodCarData.state = index;
					prevPage.goodCarData.pageNum = 1;
				}
				//小程序的写法 具体要怎么写可以打印一下prevPage看一下
				prevPage.$vm.carStateChoose = state;
				prevPage.$vm.state = index;
				prevPage.ifHaveGoodCar = '上划加载';
				prevPage.$vm.ifHaveGoodCar = '上划加载';
				if(prevPage.$vm.goodCarData){
					prevPage.$vm.goodCarData.state = index;
					prevPage.$vm.goodCarData.pageNum = 1;
				}
				uni.navigateBack();
			}
		}
	}
</script>

