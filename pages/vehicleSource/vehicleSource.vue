<style scoped>
#vehicleSource{
	width: 750upx;
	background-color: #f3f3f3;
}
.carLists{
	width: 100%;
	height: 200upx;
	padding: 20upx 0;
	background-color: #FFFFFF;
	border-bottom: 10upx solid #f3f3f3;
}
.carListsLeft{
	width: 45%;
	float: left;
	margin-left: 20upx;
}
.carListsLeft image{
	width: 100%;
	height: 200upx;
}
.carListsRight{
	float: right;
	width: 47.5%;
	margin-right: 2%;
}
.carListsRight text{
	font-size: 30upx;
	text-overflow: -o-ellipsis-lastline;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	line-clamp: 2;
	-webkit-box-orient: vertical;
}
.carListsRight .chengShi{
	display: block;
	color: #909399;
	margin: 4.5% 0;
}
.carListsRight .jiaGe{
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
	color: #21bfff;
	display: inline-block;
	width: 80%;
}
.carListsRight view{
	display: inline-block !important;
	width: 150upx;
	height: 50upx;
	float: right;
	margin-top: -50upx;
	margin-right: 20upx;
	position: relative;
}
.carListsRight view button{
	width: 150upx;
	height: 50upx;
	font-size: 20upx;
}
.carListsRight view view{
	width: 150upx;
	height: 150upx;
	background-color: #FFFFFF;
	position: absolute;
	top: 100upx;
	left: 0upx;
	border-bottom: 1upx solid #E8E8E8;
	border-left: 1upx solid #E8E8E8;
	border-right: 1upx solid #E8E8E8;
	transition: 0.3s all ease;
}
.carListsRight view view text{
	display: block;
	text-align: center;
	font-size: 20upx;
	height: 50upx;
	line-height: 50upx;
	border-bottom: 1upx solid #E8E8E8;
}
.carListsRight view view text:last-child{
	border:none;
}
.goodCarNum{
	width: 750upx;
	text-align: center;
	color: #909399;
	clear: both;
	background: #FFFFFF;
	font-size: 30upx;
	padding: 20upx 0;
}
.vehicleSourceTop{
	width: 750upx;
	height: 70upx;
	background: #FFFFFF;
	z-index: 2;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: space-around;
	line-height: 70upx;
}
.vehicleSourceBody{
	width: 750upx;
	padding-top: 140upx;
}
.vehicleSourceTop .vehicleSourceTopChild text{
	font-size: 26upx;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.vehicleSourceTopChildImage{
	width: 15upx;
	height: 10upx;
	vertical-align: middle;
	margin-left: 10upx;
	transition: 0.3s all ease;
}
</style>

<template>
	<view id="vehicleSource">
		<view class="vehicleSourceTop">
			<view class="vehicleSourceTopChild" @tap="goWindow('../paiXu/paiXu')">
				<text>{{ paiXu }}</text><image class="vehicleSourceTopChildImage" src="../../static/jianTou.png" mode=""></image>
			</view>
			<view class="vehicleSourceTopChild" @tap="goWindow('../carBrand/carBrand')">
				<text>品牌</text><image class="vehicleSourceTopChildImage" src="../../static/jianTou.png" mode=""></image>
			</view>
			<view class="vehicleSourceTopChild" @tap="goWindow('../carPrice/carPrice')">
				<text>价格</text><image class="vehicleSourceTopChildImage" src="../../static/jianTou.png" mode=""></image>
			</view>
			<view class="vehicleSourceTopChild" @tap="goWindow('../carState/carState')">
				<text>{{ carStateChoose }}</text><image class="vehicleSourceTopChildImage" src="../../static/jianTou.png" mode=""></image>
			</view>
			<view class="vehicleSourceTopChild" @tap="zwkf()">
				<text>筛选</text><image class="vehicleSourceTopChildImage" src="../../static/jianTou.png" mode=""></image>
			</view>
		</view>
		<view class="vehicleSourceBody">
			<view style="background-color: #E8E8E8;width: 750upx; height: 70upx; line-height: 70upx; font-size: 26upx; padding-left: 30upx; box-sizing: border-box; position: fixed; top: 70upx; left: 0upx; right: 0upx; z-index: 10;">
				<text>共查出<text style="color:#F56C6C;">{{ allCarTotal }}</text>条数据</text>
			</view>
			<view class="carLists" v-for="(item,index) in carList" :key="index">
				<view class="carListsLeft">
					<image :src="item.coverUrl[0]" @tap="goInfo(item)"></image>
				</view>
				<view class="carListsRight">
					<text>{{item.seriesName}}</text>
					<text class="chengShi" style="font-size: 26upx !important;">{{item.styleName}}</text>
					<!-- {{item.typeId}} -->
					<text class="jiaGe">{{ item.onlinePriceCents }}万</text> 
					<view @click="chooseStateOpen(index)">
						<button style="background-color: #409EFF !important; color: #FFFFFF;">{{ item.stateText }}</button>
						<view :style="item.chooseStateStyle">
							<text @click="setCarState(1)">已在库</text>
							<text @click="setCarState(2)">已出售</text>
							<text @click="setCarState(3)">已出库</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="goodCarNum">
			{{ ifHaveGoodCar }}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderNum:'',
				retailPrice: '',
				styleName: '',
				state:'',
				page:1,
				rows:10,
				oldorderNum:'',
				oldretailPrice: '',
				oldstyleName: '',
				oldstate:'',
				oldpage:'',
				oldrows:'',
				// 查询特价好车所需条件
				goodCarData:{
					// 排序
					"orderNum": "",
					// 价格区间
					"retailPrice": "",
					// 车型
					"styleName": "",
					// 状态
					"state": "",
					"page": 1,
					"rows": 10
				},
				// 车辆总数量
				allCarTotal:0,
				// 特价好车参数
				goodCarList:[],
				// 是否有更多数据
				ifHaveGoodCar: '上划加载',
				// 查询总数据
				goodCarTotal:0,
				// 排序
				paiXu:'排序',
				// 品牌
				pinPaiXingHao: '品牌',
				// 修改状态样式
				chooseStateStyle:'opacity:0;z-index:-10;',
				// 车辆当前状态
				carState:'已在库',
				// 修改状态内容
				carStateChoose:'状态',
				// 所查找的车辆价格
				carPrice:0,
				// 车辆列表排序
				carList:[],
				// 旧的对象
				oldGoodCarData:{}
				
			}
		},
		onShow(){
			this.getAllCars();
		},
		onLoad(params) {
			// 获取特价好车列表
			// this.getAllCars();
			this.paiXu = params.paiXu;
			if(params.shangjia == 1){
				this.state = params.shangjia;
				this.carStateChoose = '已上架';
			}
		},
		methods: {
			goInfo(paramsData){
				uni.navigateTo({
					url: '../carInformation/carInformation?carInfo='+ JSON.stringify(paramsData)
				});
			},
			// 暂未开放
			zwkf(){
				uni.showToast({
					title: '暂未开放',
					icon: 'none',
					mask: false,
					duration: 1500
				});
			},
			// 修改车辆状态
			setCarState(index){
				if(index == 1){
					this.carState = '已在库';
				}else if(index == 2){
					this.carState = '已售出';
				}else if(index == 3){
					this.carState = '已出库';
				}
				this.chooseStateOpen();
			},
			// 修改状态显示或关闭
			chooseStateOpen(index){
				if(this.carList[index].chooseStateStyle == 'opacity:1;z-index:2;'){
					this.carList[index].chooseStateStyle = 'opacity:0;z-index:-10;';
				}else{
					this.carList[index].chooseStateStyle = 'opacity:1;z-index:2;';	
				}
			},
			// 跳转页面
			goWindow(url){
				uni.navigateTo({
					url: url
				});
			},
			// 获取特价好车
			getAllCars(){
				if(this.ifHaveGoodCar == '已经是全部数据了'){
					this.ifHaveGoodCar = '已经是全部数据了';
				}else{
					this.ifHaveGoodCar = '正在加载...';
					var params = {
						headData:{
							token:'',
							uuid:''
						},
						bodyData:{}
					}
					uni.getStorage({
						key: 'token',
						success: (res) => {
							params.headData.token = res.data;
						}
					})
					uni.getStorage({
						key:'uuid',
						success: (res) => {
							params.headData.uuid = res.data;
						}
					})
					uni.showLoading({
						title: '正在加载',
						mask: true
					});
					params.bodyData = {
						// 排序
						"orderNum": this.orderNum,
						// 价格区间
						"retailPrice": this.retailPrice,
						// 车型
						"styleName": this.styleName,
						// 状态
						"state": this.state,
						"page": this.page,
						"rows": this.rows
					};
					this.$postRequest('/cars/GET_CAR_ALL',params, (resData) => {
						this.allCarTotal = resData.data.body.total;
						if(resData.data.body.rows.length == 0){
							this.carList = [];
							this.ifHaveGoodCar = '已经是全部数据了'
							uni.hideLoading();
							return;
						}
						if(resData.data.code == 0){
							for(let i in resData.data.body.rows){
								resData.data.body.rows[i].chooseStateStyle = 'opacity:0;z-index:-10;';
								resData.data.body.rows[i].coverUrl = resData.data.body.rows[i].coverUrl.split(',');
								if(resData.data.body.rows[i].state == 0){
									resData.data.body.rows[i].stateText = '已在库';
								}else if(resData.data.body.rows[i].state == 1){
									resData.data.body.rows[i].stateText = '已上架';
								}else if(resData.data.body.rows[i].state == 2){
									resData.data.body.rows[i].stateText = '已售出';
								}
								if(i == resData.data.body.rows.length - 1){
									if(this.page == 1){
										this.carList = resData.data.body.rows;
									}else{
										this.carList = this.carList.concat(resData.data.body.rows);
									}
									if(this.carList.length == resData.data.body.total){
										this.ifHaveGoodCar = '已经是全部数据了';
									}else{
										this.ifHaveGoodCar = '上拉加载';
									}
									uni.hideLoading()
								}
							}
						}else{
							uni.showToast({
								title: resData.data.msg,
								mask: false,
								icon: 'none',
								duration: 1500
							});
						}
					})
				}
			},
		},
		// 上滑加载特价好车列表
		onReachBottom(){
			this.page++;
			this.getAllCars();
		}
	}
</script>

