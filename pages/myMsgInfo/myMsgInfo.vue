<template>
	<view id="myMsgInfo">
		<view class="myMsgInfoTitle">{{ msgInfo.title }}</view>
		<view class="myMsgInfoTime">{{ msgInfo.createDate }}</view>
		<view class="myMsgInfoContent">
			{{ msgInfo.content}}
		</view>
	</view>
</template>

<script>
	import { getMyMsgInfo } from '@/common/api/myMsgInfo.js'
	export default {
		data() {
			return {
				id:0,
				msgInfo:{}
			}
		},
		onLoad(params){
			this.id = params.id;
			this.getMyMsgInfos();
		},
		methods: {
			async getMyMsgInfos(){
				try{
					let resData = await getMyMsgInfo({id:this.id})
					if(resData.code === 200){
						this.msgInfo = resData.result;
					}else{
						this.$toast(resData.message)
					}
				}catch(e){
					this.$toast('请求失败');
				}
			}
		}
	}
</script>

<style>
#myMsgInfo{
	width: 750upx;
}
.myMsgInfoTitle{
	width: 750upx;
	font-size: 32upx;
	font-weight: bold;
	text-align: center;
	height: 80upx;
	line-height: 80upx;
}
.myMsgInfoTime{
	width: 750upx;
	text-align: center;
	font-size: 28upx;
	color: #939393;
}
.myMsgInfoContent{
	text-indent: 2em;
	font-size: 26upx;
	padding: 10upx 20upx;
}
</style>
