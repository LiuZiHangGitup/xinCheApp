<style scoped>
*{
	margin: 0;
	padding: 0;
}
#addCarImg{
	width: 750upx;
}
.addCarImgTop{
	width: 750upx;
	height: 70upx;
	background-color: #007AFF;
	text-align: center;
	letter-spacing: 5upx;
	line-height: 70upx;
	color: #FFFFFF;
	font-size: 30upx;
}
.addCarImgCenter{
	width: 750upx;
	padding: 30upx;
	box-sizing: border-box;
}
.addCarImgCenterTop{
	height: 70upx;
	width: 100%;
	border-left: 15upx solid #007AFF;
	line-height: 70upx;
	font-size: 35upx;
	padding-left: 30upx;
	box-sizing: border-box;
	letter-spacing: 5upx;
}
.addCarImgCenterBody{
	width: 100%;
	padding-top: 20upx;
}
.addCarImgCenterBodyChild{
	width: 200upx;
	height: 200upx;
	float: left;
	margin-right: 30upx;
	margin-top: 20upx;
	position: relative;
	overflow: hidden;
}
.addCarImgCenterBodyChild .addImgChild{
	width: 100%;
	height: 100%;
}
.addCarImgCenterBodyChildText{
	display: inline-block;
	width: 150upx;
	height: 30upx;
	background: #007AFF;
	line-height: 30upx;
	font-size: 20upx;
	text-align: center;
	color: #FFFFFF;
	transform:rotate(315deg);
	-ms-transform:rotate(315deg); /* Internet Explorer */
	-moz-transform:rotate(315deg); /* Firefox */
	-webkit-transform:rotate(315deg); /* Safari 和 Chrome */
	-o-transform:rotate(315deg); /* Opera */
	position: absolute;
	left: -45upx;
	top: 15upx;
	z-index: 2;
}
.addCarImgCenterBodyChildIcon{
	width: 25upx;
	height: 25upx;
	position: absolute;
	top: 10upx;
	right: 10upx;
	z-index: 2;
}
.addCarImgCenterBodyChildIcon:nth-child(2){
	/* display: none; */
}
</style>

<template>
	<view id="addCarImg">
		<view class="addCarImgTop">
			注：至少上传一张车辆左前45°照片！
		</view>
		<view class="addCarImgCenter">
			<view class="addCarImgCenterTop">上传图片</view>
			<view class="addCarImgCenterBody">
				<view class="addCarImgCenterBodyChild" v-for="(item,index) in imgList" :key="index">
					<text class="addCarImgCenterBodyChildText" v-if="item.textState">{{ item.text }}</text>
					<image class="addImgChild" :src="item.url" @click="uploadImg(item.url)"></image>
					<image class="addCarImgCenterBodyChildIcon" src="../../static/close.png" mode="" @click="deleteImgList(index)" v-if="item.closeState"></image>
				</view>
				<view class="addCarImgCenterBodyChild">
					<text class="addCarImgCenterBodyChildText">{{ imgText }}</text>
					<image class="addImgChild" src="../../static/addCarImg/addCarImg.png" @click="uploadImg('../../static/addCarImg/addCarImg.png')"></image>
					<!-- <image class="addCarImgCenterBodyChildIcon" src="../../static/close.png" mode="" @click="deleteImgList(index)"></image> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList: [],
				submitList: [],
				imgText:''
			}
		},
		onLoad(params){
			params.imgArray = params.imgArray.split(',')
			if(params.imgArray[0] == '../../static/addCar/addImg.png'){
				this.verificationImg();	
			}else{
				for(let i in params.imgArray){
					var imgJson = {
						url: params.imgArray[i],
						testState: false,
						closeState: false,
						text: ''
					}
					this.imgList.push(imgJson);
					this.verificationImg();
				}
			}
		},
		// 点击提交事件
		onNavigationBarButtonTap(){
			if(this.imgList.length<1){
				this.$toast('请最少上传一张照片',false)
			}else{
				this.$loading()
				for(let i in this.imgList){
					if(i == this.imgList.length - 1){
						this.submitList.push(this.imgList[i].url);
						var pages = getCurrentPages();
						var currPage = pages[pages.length - 1]; //当前页面
						var prevPage = pages[pages.length - 2]; //上一个页面
						//h5的写法
						prevPage.carImg = this.submitList;
						//小程序的写法 具体要怎么写可以打印一下prevPage看一下
						prevPage.$vm.carImg = this.submitList;
						uni.hideLoading();
						uni.navigateBack();
					}else{
						this.submitList.push(this.imgList[i].url);
					}
				}
			}
		},
		methods: {
			// 验证照片位置
			verificationImg(){
				if(this.imgList.length == 0){
					this.imgText = '左前45';
				}else{
					for(let i in this.imgList){
						if(1<=i<=8){
							this.imgList[i].closeState = true;
							this.imgList[i].textState = true;
						}else if(i>8){
							this.imgList[i].closeState = true;
							this.imgList[i].textState = false;	
						}else{
							this.imgList[i].closeState = false;
							this.imgList[i].textState = false;
						}
						if(i == 0){
							this.imgList[i].text = '左前45';
							this.imgText = '正面';
						}else if(i == 1){
							this.imgList[i].text = '正面';
							this.imgText = '正后';
						}else if(i == 2){
							this.imgList[i].text = '正后';
							this.imgText = '中控';
						}else if(i == 3){
							this.imgList[i].text = '中控';
							this.imgText = '主家座椅';
						}else if(i == 4){
							this.imgList[i].text = '主家座椅';
							this.imgText = '发动机舱';
						}else if(i == 5){
							this.imgList[i].text = '发动机舱';
							this.imgText = '后备箱';
						}else if(i == 6){
							this.imgList[i].text = '后备箱';
							this.imgText = '后排座椅';
						}else if(i == 7){
							this.imgList[i].text = '后排座椅';
							this.imgText = '其他';
						}else{
							this.imgList[i].text = '其他';
							this.imgText = '其他';
						}
					}
					this.imgClose = false;
					this.imgTextState = true;
				}
			},
			// 上传照片
			uploadImg(item){
				var _this = this;
				if(item == '../../static/addCarImg/addCarImg.png'){
					uni.chooseImage({
						count:1,
						success: (chooseImageRes) => {
							const tempFilePaths = chooseImageRes.tempFilePaths;
							uni.uploadFile({
								url: this.$uploadImageUrl,
								filePath: tempFilePaths[0],
								name: 'file',
								formData: {},
								async success(resData) {
									if (JSON.parse(resData.data).code == 200) {
										var imgJson = {
											url: JSON.parse(resData.data).message,
											testState: false,
											closeState: false,
											text: ''
										}
										_this.imgList.push(imgJson);
										_this.verificationImg();
										uni.hideLoading();
									}else{
										_this.$toast(JSON.parse(resData.data).message)
									}
								},
								async fail(err) {
									this.$toast('上传失败',false);
								}
							});
						}
					});
				}else{
					return;
				}
			},
			deleteImgList(index){
				this.imgList.splice(index,1);
				this.verificationImg();
			}
			
		}
	}
</script>
