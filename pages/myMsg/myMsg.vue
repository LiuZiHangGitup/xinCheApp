<template>
	<view id="myMsg">
		<view class="myMsg-Item" v-for="(item,index) in msgList" :key="index" @tap="updateMsgState(item.id)">
			<view class="myMsg-Item-Left">
				<view :class="[item.isRead == 0?'isRead':'','myMsg-State']"></view>
				<view class="myMsg-Title">{{ item.title }}</view>
			</view>
			<view class="myMsg-Item-Right">
				<view class="myMsg-Time">{{ item.createDate }}</view>
				<view class="myMsg-jianTou">
					<image src="../../static/index/jianTou.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="end">
			{{ ifHaveData }}
		</view>
	</view>
</template>

<script>
	import { getMyMsg } from '@/common/api/myMsg.js'
	export default {
		data() {
			return {
				pageNum:1,
				pageSize:20,
				msgList:[],
				ifHaveData:'上划加载',
				xiaLaShuXinState:false
			}
		},
		onShow(){
			this.pageNum = 1;
			this.xiaLaShuXinState = true;
			this.getMyMsgs()
		},
		methods: {
			updateMsgState(id){
				this.$goWindow('../myMsgInfo/myMsgInfo?id='+ id)
			},
			async getMyMsgs(){
				try{
					if(this.ifHaveData == '没有其他消息了' && this.xiaLaShuXinState == false){
						return;
					}else{
						this.$loading();
						this.ifHaveData = '正在加载...'
						let parmas = { pageNum:this.pageNum,pageSize:this.pageSize };
						let resData = await getMyMsg(parmas);
						if(resData.code === 200){
							if(this.pageNum == 1){
								this.msgList = resData.result.list
							}else{
								this.msgList = this.msgList.concat(resData.result.list);
							}
							if(resData.result.hasNextPage == false){
								this.ifHaveData = '没有其他消息了'
							}
						}else{
							this.$toast(resData.message);
						}
						uni.hideLoading();
						this.xiaLaShuXinState = false;
						uni.stopPullDownRefresh();
					}
				}catch(e){
					this.$toast('请求失败')
				}
			}
		},
		onPullDownRefresh(){
			this.pageNum = 1;
			this.xiaLaShuXinState = true;
			this.getMyMsgs();
		},
		// 上划加载
		onReachBottom(){
			this.pageNum++;
			this.getMyMsgs();
		}
	}
</script>

<style scoped>
#myMsg{
	width: 750upx;
}
.myMsg-Item{
	width: 100%;
	padding: 0% 5%;
	border-bottom: 1upx solid #E8E8E8;
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
}
.isRead{
	background: #108EE9;
}
.myMsg-State{
	width: 15upx;
	height: 15upx;
	border-radius: 50%;
	margin-right: 15upx;
}
.myMsg-Item-Left,.myMsg-Item-Right{
	display: flex;
	height: 100upx;
	align-items: center;
}
.myMsg-Item-Left{
	font-size: 32upx;
	font-weight: 600;
}
.myMsg-Time{
	font-size: 28upx;
	color: #939393;
	margin-right: 20upx;
}
.myMsg-Title{
	width: 300upx;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}
.myMsg-jianTou>image{
	width: 25upx;
	height: 25upx;
}
.end{
	width: 750upx;
	height: 80upx;
	line-height: 80upx;
	text-align: center;
	font-size: 28upx;
	color: #939393;
}
</style>
