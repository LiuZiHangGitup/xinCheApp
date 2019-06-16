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
	.topLeft>image{
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
		height: 250upx;
		background-color: #108ee9;
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
		/* margin-top: 20upx; */
	}
	.jianXi{
		width: 750upx;
		height: 10upx;
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
	.pickerViewItem{
		line-height: 100upx !important;
	}
	.topImg{
		width: 100upx;
		height: 100upx;
		line-height: 100upx;
		text-align: center;
	}
	.topImg>image{
		width: 80upx;
		height: 80upx;
	}
</style>
<template>
	<view id="statistics">
		<view class="top">
			<view class="topLeft" @tap="openPicker()">
				<image src="../../static/statistics/calendar.png" mode=""></image>
				<text v-text="monthStr"></text>
			</view>
			<view class="topRight">
				{{ userName }}
			</view>
		</view>
		<view class="info">
			<view class="infoChild">
				<view class="infoChild-item">
					<view class="topImg">
						<image src="../../static/statistics/ruKuTongJi.png" mode=""></image>
					</view>
					<text>入库累计</text>
					<text>{{ monthData.innum }}台</text>
				</view>
			</view>
			<view class="infoChild">
				<view class="infoChild-item">
					<view class="topImg">
						<image src="../../static/statistics/chuKuTongJi.png" mode=""></image>
					</view>
					<text>出库累计</text>
					<text>{{ monthData.instocknum }}台</text>
				</view>
			</view>
			<view class="infoChild">
				<view class="infoChild-item">
					<view class="topImg">
						<image src="../../static/statistics/yueKuCun.png" mode=""></image>
					</view>
					<text>当月库存</text>
					<text>{{ monthData.inventorynum }}台</text>
				</view>
			</view>
			<view class="infoChild">
				<view class="infoChild-item">
					<view class="topImg">
						<image src="../../static/statistics/dangQianZaiKu.png" mode=""></image>
					</view>
					<text>当前在库</text>
					<text>{{ monthData.outnum }}台</text>
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
				<view class="footChildRight">{{ dateStr.dateStr }}</view>
			</view>
			<view class="footChild" @tap="goLieBiao()">
				<view class="footChildLeft">
					<image src="../../static/statistics/yiRuKu.png"></image>
					<text>已入库</text>
				</view>
				<view></view>
				<view class="footChildRight">{{ dateData.innum }}</view>
			</view>
			<view class="footChild" @tap="goLieBiao()">
				<view class="footChildLeft">
					<image src="../../static/statistics/yiChuKu.png"></image>
					<text>已出库</text>
				</view>
				<view></view>
				<view class="footChildRight">{{ dateData.outnum }}</view>
			</view>
			<view class="footChild" @tap="goLieBiao()">
				<view class="footChildLeft">
					<image src="../../static/statistics/yiYuDing.png"></image>
					<text>已售出</text>
				</view>
				<view></view>
				<view class="footChildRight">{{ dateData.reservenum }}</view>
			</view>
		</view>
		<view class="pickerViewBg" :style="pickerViewBg"></view>
		<view class="picker-view" v-if="pickerViewState">
			<view class="chooseSure">
				<text @tap="openPicker()">取消</text>
				<test>选择月份</test>
				<text @tap="sureRiQi()">确认</text>
			</view>
			<picker-view indicator-style="height: 50px;" :value="monthStr" @change="bindChange">
				<picker-view-column>
					<view class="pickerViewItem" v-for="(item,index) in monthList" :key="item">{{ item }}年</view>
				</picker-view-column>
				<picker-view-column>
					<view class="pickerViewItem" v-for="(item,index) in dateList" :key="item">{{ item }}月</view>
				</picker-view-column>
			</picker-view>
		</view>
	</view>
</template>

<script>
	import { getMonthData,getDateData } from '@/common/api/statistis.js'
	export default {
		data() {
			const monthList = []
			for(let i = new Date().getFullYear();i>1990;i--){
				monthList.push(i)
			}
			const dateList = []
			for(let i = 1;i<13;i++){
				dateList.push(i)
			}
			let y = new Date().getFullYear() + '-';
			let m = new Date().getMonth() + 1;
			m<10? m = '0' + m : m = m;
			let monthStr = y+m;
			return {
				dateList,
				monthList,
				monthIndex:0,
				dateIndex:0,
				monthData:{},
				dateStr:'',
				monthStr,
				dateData:{},
				userName: uni.getStorageSync('username'),
				pickerViewBg: 'transform: scaleY(0);',
				pickerViewState:false,
				value:'',
			}
		},
		onShow(){
			this.getDateDatas();
		},
		onLoad(){
			this.getMonthDatas();
		},
		methods: {
			// 确认时间
			sureRiQi(){
				let month = this.dateList[this.dateIndex];
				month<10?month = '0' + month : month = month;
				this.monthStr = this.monthList[this.monthIndex] + '-' + month;
				this.getMonthDatas();
				this.openPicker();
			},
			// 打开时间选择器
			openPicker(){
				if(this.pickerViewState === false){
					this.pickerViewState = true;
					this.pickerViewBg = 'transform: scaleY(1);';
				}else{
					this.pickerViewState = false;
					this.pickerViewBg = 'transform: scaleY(0);';
				}
			},
			// 修改日期
			bindChange(e){
				const val = e.detail.value;
				this.monthIndex = val[0];
				if(val[1] == undefined){
					this.dateIndex = 0;
				}else{
					this.dateIndex = val[1];
				}
			},
			goLieBiao(){
				this.$goWindow('../vehicleSource/vehicleSource');
			},
			// 获取月份数据
			async getMonthDatas(){
				try{
					this.$loading();
					let resData = await getMonthData({dateStr:this.monthStr});
					if(resData.code === 200){
						this.monthData = resData.result;
					}else{
						this.$toast('请求失败');
					}
				}catch(e){
					this.$toast('请求失败');
				}
				uni.hideLoading();
			},
			async getDateDatas(){
				try{
					this.$loading();
					let y = new Date().getFullYear() + '-';
					let m = new Date().getMonth() + 1;
					m<10? m = '0' + m + '-' : m = m + '-';
					let d = new Date().getDate();
					d<10? d = '0' + d : d = d;
					this.dateStr = {dateStr:y+m+d};
					let resData = await getDateData(this.dateStr);
					if(resData.code === 200){
						this.dateData = resData.result;
					}else{
						this.$toast(resData.message)
					}
					uni.hideLoading();
				}catch(e){
					this.$toast('请求失败');
				}
			}
		}
	}
</script>
