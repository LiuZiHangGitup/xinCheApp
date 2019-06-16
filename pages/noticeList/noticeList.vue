<template>
	<view id="noticeList">
		<view class="noticeList-Item" v-for="(item,index) in noticeList" :key="index">
			<view class="noticeList-Item-Img">
				<image src="../../static/noticeList/fire.png"></image>
			</view>
			<view class="noticeList-Item-Right">
				<view class="noticeList-Item-Right-Title">
					{{ item.title }}
				</view>
				<view class="noticeList-Item-Right-Time">
					{{ item.createDate }}
				</view>
			</view>
		</view>
		<view class="end">
			{{ ifHaveData }}
		</view>
	</view>
</template>

<script>
	import { getNoticeList } from '@/common/api/noticeList.js'
	export default {
		data() {
			return {
				page:1,
				pageSize:10,
				noticeList:[],
				ifHaveData:'上划加载'
			}
		},
		onLoad(){
			this.getNoticeLists();
		},
		// 上划加载 
		onReachBottom(){
			this.page++;
			this.getNoticeLists()
		},
		methods: {
			async getNoticeLists () {
				if(this.ifHaveData != '已加载全部数据'){
					this.$loading()
					this.ifHaveData = '正在加载...';
					let params = {"pageNum":this.page,"pageSize":this.pageSize}
					try{
						let resData = await getNoticeList(params);
						if(resData.code === 200){
							if(this.page == 1){
								this.noticeList = resData.result.list;
							}else{
								this.noticeList = this.noticeList.concat(resData.result.list);
							}
							this.ifHaveData = '上划加载';
							if(resData.result.hasNextPage == false){
								this.ifHaveData = '已加载全部数据';
							}
						}else{
							this.$toast(resData.message);
						}
						uni.hideLoading();
					}catch(e){
						this.$toast('请求失败')
					}
				}
			},
		}
	}
</script>

<style scoped>
#noticeList{
	width: 750upx;
}
.noticeList-Item{
	width: 100%;
	height: 160upx;
	border-bottom: 1upx solid #E8E8E8;
	padding: 30upx 50upx;
	box-sizing: border-box;
	position: relative;
	display: flex;
}
.noticeList-Item-Img{
	width: 40upx;
	height: 40upx;
	margin-right: 15upx;
}
.noticeList-Item-Img>image{
	width: 40upx;
	height: 40upx;
}
.noticeList-Item-Right{
	width: 625upx;
	position: relative;
}
.noticeList-Item-Right-Title{
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	font-size: 30upx;
	height: 30upx;
	line-height: 30upx;
	margin-top: 5upx;
}
.noticeList-Item-Right-Time{
	font-size: 26upx;
	color: #909399;
	position: absolute;
	bottom: 0upx;
}
.end{
	width: 750upx;
	height: 80upx;
	line-height: 80upx;
	text-align: center;
	font-size: 30upx;
	color: #909399;
}
</style>
