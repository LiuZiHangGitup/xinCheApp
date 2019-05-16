
<style scoped>
*{
	margin: 0;
	padding: 0;
}
#statistics{
	width: 750upx;
	background-color: #E8E8E8;
}
.top{
	width: 750upx;
	height: 100upx;
	line-height: 100upx;
	padding: 0upx 50upx;
	box-sizing: border-box;
	background-color: #108ee9;
	color: #FFFFFF;
	display: flex;
	justify-content: space-between;
	font-size: 26upx;
}
.topLeft image{
	width: 50upx;
	height: 50upx;
	vertical-align: middle;
	margin-right: 20upx;
}
.body{
	width: 750upx;
	height: 150upx;
	background-color: #6faefd;
	display: flex;
	justify-content: space-around;
	line-height: 150upx;
}
.bodyChild{
	display: -webkit-flex;
	display: flex;
	-webkit-align-items: center;
	align-items: center;
	color: #FFFFFF;
	font-size: 26upx;
}
.info{
	width: 750upx;
	height: 150upx;
	background-color: #6db0fc;
	text-align: center;
	display: flex;
	justify-content: space-around;
}
.infoChild{
	box-sizing: border-box;
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
	color: #FFFFFF;
	font-size: 26upx;
}
.infoChild-item text:last-child{
	margin-top: 20upx;
}
.jianXi{
	width: 750upx;
	height: 30upx;
	background-color: #E8E8E8;
}
.foot{
	width: 750upx;
}
.footChild{
	height: 90upx;
	line-height: 90upx;
	background-color: #FFFFFF;
	display: flex;
	justify-content: space-around;
	font-size: 26upx;
	border-bottom: 1upx solid #E8E8E8;
}
.footChildLeft image{
	width: 50upx;
	height: 50upx;
	vertical-align: middle;
	margin-right: 10upx;
}
</style>
<template>
	<view id="statistics">
		<view class="top">
			<view class="topLeft">
				<image src="../../static/statistics/calendar.png" mode=""></image>
				<text>2019-03</text>
			</view>
			<view class="topRight">
				车商/车市
			</view>
		</view>
		<view class="info">
			<view class="infoChild">
				<view class="infoChild-item">
					<text>入库累计&gt;</text>
					<text>52台&nbsp;/&nbsp;130万</text>
				</view>
			</view>
			<view class="infoChild">
				<view class="infoChild-item">
					<text>出库累计&gt;</text>
					<text>45台&nbsp;/&nbsp;152万</text>
				</view>
			</view>
			<view class="infoChild">
				<view class="infoChild-item">
					<text>当月库存&gt;</text>
					<text>92台&nbsp;/&nbsp;292万</text>
				</view>
			</view>
			<view class="infoChild">
				<view class="infoChild-item">
					<text>当前在库&gt;</text>
					<text>45台&nbsp;/&nbsp;143万</text>
				</view>
			</view>
		</view>
		<view class="jianXi"></view>
		<view class="foot">
			<view class="footChild">
				<view class="footChildLeft">
					<image src="../../static/statistics/stock.png"></image>
					<text>日库存小计</text>
				</view>
				<view></view>
				<view class="footChildRight">05月05日</view>
			</view>
			<view class="footChild" @tap="goLieBiao()">
				<view class="footChildLeft">
					<image src="../../static/statistics/yiRuKu.png"></image>
					<text>已入库</text>
				</view>
				<view></view>
				<view class="footChildRight">45台&nbsp;&gt;</view>
			</view>
			<view class="footChild" @tap="goLieBiao()">
				<view class="footChildLeft">
					<image src="../../static/statistics/yiChuKu.png"></image>
					<text>已出库</text>
				</view>
				<view></view>
				<view class="footChildRight">32台&nbsp;&gt;</view>
			</view>
			<view class="footChild" @tap="goLieBiao()">
				<view class="footChildLeft">
					<image src="../../static/statistics/yiYuDing.png"></image>
					<text>已售出</text>
				</view>
				<view></view>
				<view class="footChildRight">52台&nbsp;&gt;</view>
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
			goLieBiao(){
				uni.navigateTo({
					url: '../vehicleSource/vehicleSource'
				});
			}
		}
	}
</script>
