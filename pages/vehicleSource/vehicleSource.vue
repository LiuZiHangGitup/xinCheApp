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
.vehicleSourceBody-Item{
	background-color: #E8E8E8;
	width: 750upx;
	height: 70upx;
	line-height: 70upx;
	font-size: 26upx;
	padding-left: 30upx;
	box-sizing: border-box;
	position: fixed;
	top: 70upx;
	left: 0upx;
	ight: 0upx;
	z-index: 10;
}
</style>

<template>
	<view id="vehicleSource">
		<view class="vehicleSourceTop">
			<view class="vehicleSourceTopChild" @tap="$goWindow('../paiXu/paiXu')">
				<text>{{ paiXu }}</text><image class="vehicleSourceTopChildImage" src="../../static/jianTou.png" mode=""></image>
			</view>
			<view class="vehicleSourceTopChild" @tap="$goWindow('../carBrand/carBrand')">
				<text>品牌</text><image class="vehicleSourceTopChildImage" src="../../static/jianTou.png" mode=""></image>
			</view>
			<view class="vehicleSourceTopChild" @tap="$goWindow('../carPrice/carPrice')">
				<text>价格</text><image class="vehicleSourceTopChildImage" src="../../static/jianTou.png" mode=""></image>
			</view>
			<view class="vehicleSourceTopChild" @tap="$goWindow('../carState/carState')">
				<text>{{ carStateChoose }}</text><image class="vehicleSourceTopChildImage" src="../../static/jianTou.png" mode=""></image>
			</view>
			<view class="vehicleSourceTopChild" @tap="zwkf()">
				<text>筛选</text><image class="vehicleSourceTopChildImage" src="../../static/jianTou.png" mode=""></image>
			</view>
		</view>
		<view class="vehicleSourceBody">
			<view class="vehicleSourceBody-Item">
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
							<text @tap="setCarState(item.id,0)">已在库</text>
							<text @tap="setCarState(item.id,1)">已上架</text>
							<text @tap="setCarState(item.id,2)">已出售</text>
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
	import { getMeAllCars,upDateCarState } from '@/common/api/vehicleSource.js'
	export default {
		data() {
			return {
				orderNum:'',
				retailPrice: '',
				styleName: '',
				state:'',
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
					"pageNum": 1,
					"pageSize": 10
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
				this.goodCarData.state = params.shangjia;
				console.log(this.state)
				this.carStateChoose = '已上架';
			}
		},
		methods: {
			goInfo(paramsData){
				this.$goWindow('../carInformation/carInformation?id='+ paramsData.id)
			},
			// 暂未开放
			zwkf(){
				this.$toast('暂未开放',false);
			},
			// 修改车辆状态
			async setCarState(id,index){
				try{
					this.$loading()
					let params = {id:id,state:index};
					let resData = await upDateCarState(params);
					if(resData.code === 200){
						this.goodCarData.pageNum = 1;
						this.getAllCars();
						this.$toast('修改成功');
					}else{
						this.$toast(resData.message);
					}
					uni.hideLoading();
				}catch(e){
					this.$toast('请求失败');
				}
			},
			// 修改状态显示或关闭
			chooseStateOpen(index){
				if(this.carList[index].chooseStateStyle == 'opacity:1;z-index:2;'){
					this.carList[index].chooseStateStyle = 'opacity:0;z-index:-10;';
				}else{
					this.carList[index].chooseStateStyle = 'opacity:1;z-index:2;';	
				}
			},
			// 获取车辆列表
			async getAllCars(){
				if(this.ifHaveGoodCar == '已经是全部数据了' && this.goodCarData.pageNum != 1){
					this.ifHaveGoodCar = '已经是全部数据了';
				}else{
					try{
						this.ifHaveGoodCar = '正在加载...';
						this.$loading();
						let resData = await getMeAllCars(this.goodCarData);
						this.allCarTotal = resData.result.total;
						if(resData.result.list.length == 0){
							this.carList = [];
							this.ifHaveGoodCar = '已经是全部数据了'
							uni.hideLoading();
							return;
						}
						if(resData.code === 200){
							for(let i in resData.result.list){
								resData.result.list[i].chooseStateStyle = 'opacity:0;z-index:-10;';
								resData.result.list[i].coverUrl = resData.result.list[i].coverUrl.split(',');
								if(resData.result.list[i].state == 0){
									resData.result.list[i].stateText = '已在库';
								}else if(resData.result.list[i].state == 1){
									resData.result.list[i].stateText = '已上架';
								}else if(resData.result.list[i].state == 2){
									resData.result.list[i].stateText = '已售出';
								}
								if(i == resData.result.list.length - 1){
									if(this.goodCarData.pageNum == 1){
										this.carList = resData.result.list;
									}else{
										this.carList = this.carList.concat(resData.result.list);
									}
									if(resData.result.hasNextPage == false){
										this.ifHaveGoodCar = '已经是全部数据了';
									}else{
										this.ifHaveGoodCar = '上拉加载';
									}
									uni.hideLoading()
								}
							}
						}else{
							this.$toast(resData.message);
						}
						uni.hideLoading();
					}catch(e){
						this.$toast('请求失败');
					}
				}
			},
		},
		// 上滑加载车辆列表
		onReachBottom(){
			this.goodCarData.pageNum++;
			this.getAllCars();
		}
	}
</script>

