<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			this.$getToken()
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	*{
		margin: 0upx;
		padding: 0upx;
	}
	picker-view{
		width: 750upx;
		height: 500upx;
		text-align: center;
	}
	.picker-view{
		position: fixed;
		z-index: 9999;
		bottom: 0;
		height: 600upx;
		transition: 0.3s all ease;
		background: #FFFFFF;
		line-height: 100upx !important;
	}
	.pickerViewBg{
		width: 750upx;
		background: rgba(0,0,0,0.8);
		position: fixed;
		bottom: 0;
		top: 0;
		left: 0;
		right: 0;
		z-index: 9;
	}
	.chooseSure{
		width: 750upx;
		height: 90upx;
		background: #FFFFFF;
		border-bottom: 1upx solid #E8E8E8;
		line-height: 90upx;
		font-size: 30upx;
		display: flex;
		justify-content: space-around;
		box-sizing: border-box;
	}
	.chooseSure text:active{
		color: #0066FF;
	}
	.uni-picker-view-content>*{
		line-height: 68upx;
	}
	image{
		z-index: 0 !important;
	}
</style>
