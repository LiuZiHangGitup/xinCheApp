<style scoped>
.notice_list{
	font-size: 30upx;
}
.notice_item{
	display: flex;
	align-items: center;
	border-bottom: 1upx solid #eee;
	padding-bottom: 10upx;
}
.notice_item_img{
	width: 40upx;
	height: 40upx;
	padding: 30upx;
}
.notice_item_img image{
	width: 100%;
	height: 100%;
}
.notice_item_detail view:nth-child(1){
	color: #333;
	padding: 20upx 0 10upx 0;
	display: flex;
	flex-wrap: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.notice_item_detail view:nth-child(2){
	color: #999;
	padding: 0upx 0 10upx 0;
	font-size: 28upx;
}
.end{
	color: #999;
	font-size: 25upx;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 60upx;
}
</style>

<template>
	<view id="noticeList">		
		<view class="notice_list">
			<view class="notice_item" v-for="(item,index) in noticeList" :key="index">
				<view class="notice_item_img"><image src="../../static/noticeList/fire.png"></image></view>
				<view class="notice_item_detail">
					<view>{{ item.title }}</view>
					<view>{{ item.createDate }}</view>
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

