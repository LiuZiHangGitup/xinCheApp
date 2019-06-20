<template>
	<view id="weiDian">
		<web-view :src="url"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url:'http://wshop.xczlbox.com/#/?userId='+uni.getStorageSync('userId')
			}
		},
		onNavigationBarButtonTap(){
			uni.share({
				provider: "weixin",
				scene: "WXSceneSession",
				type: 0,
				href: 'http://wshop.xczlbox.com/#/?userId='+uni.getStorageSync('userId'),
				title: "信车智联",
				summary: "快来看，好多好车啊！！！",
				imageUrl: "http://pic37.nipic.com/20140113/8800276_184927469000_2.png",
				success: function (res) {
					console.log("success:" + JSON.stringify(res));
				},
				fail: function (err) {
					console.log("fail:" + JSON.stringify(err));
				}
			});
		}
	}
</script>

<style>
#weiDian{
	width: 750upx;
}
</style>
