<template>
	<view id="weiDian">
		<web-view :src="url"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url:'http://192.168.0.253:3000/#/?userId='+uni.getStorageSync('userId')
			}
		}
	}
</script>

<style>
#weiDian{
	width: 750upx;
}
</style>
