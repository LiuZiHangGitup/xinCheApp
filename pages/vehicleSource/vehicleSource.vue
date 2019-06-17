<style scoped>
#vehicleSource{
	width: 750upx;
	background-color: #f3f3f3;
}
.vehicleSourceBody{
	width: 750upx;
}

.top_select_list{
	display: flex;
	width: 100%;
	align-items: center;
	flex-wrap: nowrap;
	font-size: 25upx;
	background: white;
	justify-content: center;
	border-bottom:1upx solid #eee;
}
.top_select_item{
	width: 20%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 20upx 0 20upx 0;
}
.top_select_item view:nth-child(2){
	width: 20upx;
	height: 20upx;
	display: flex;
	align-items: center;
	justify-content: center;
}
.top_select_item view:nth-child(2) image{
	width: 100%;
	height: 60%;
	padding-left: 5upx;
}
/* 车辆管理列表 */
.cars_list{
	width: 100%;
	font-size: 30upx;
	background: white;
}
.cars_item{
	display: flex;
	padding: 20upx;
}
.cars_item_img{
	display: flex;
	align-items: center;
	justify-content: center;
	width: 45%;
	height: 200upx;
}
.cars_item_img image{
	width: 100%;
	height: 100%;
	border-radius: 10upx;
}
.cars_item_right{
	display: flex;
    flex-direction: column;
    justify-content: space-between;
	padding-left: 10upx;
	width: 50%;
}
.cars_item_content{
	color: #999;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp:2;
	-webkit-box-orient: vertical;
	font-size: 28upx;
}
.cars_item_right_bottom{
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: #108EE9;
}
.cars_item_btn{
	color: white;
	background-color: rgb(64, 158, 255) !important;
	padding: 8upx 25upx 8upx 25upx;
	border-radius: 10upx;
	font-size: 25upx;
	position: relative;
}
.cars_item_btn_box{
	position: absolute;
	width: 100%;
	left: 0upx;
	height: 150upx;
	transition: 0.3s all ease;
	transform: scaleY(0);
}
.cars_item_btn_box>view{
	width: 100%;
	height: 50upx;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #FFFFFF;
	color: #000000;
	border-bottom: 1upx solid #E8E8E8;
	box-sizing: border-box;
	border: 1upx solid #E8E8E8;
	border-top: none;
}
.cars_item_btn_box_choose{
	transform: scaleY(1);
}
.goodCarNum{
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #FFFFFF;
	color: #939393;
	font-size: 28upx;
	height: 80upx;
}
</style>

<template>
	<view id="vehicleSource">
		<view class="top_select_list">
			<view class="top_select_item" @tap="$goWindow('../paiXu/paiXu')">
				<view>{{ paiXu }}</view>
				<view><image src="../../static/jianTou.png"></image></view>
			</view>
			<view class="top_select_item" @tap="$goWindow('../carBrand/carBrand')">
				<view>品牌</view>
				<view><image src="../../static/jianTou.png"></image></view>
			</view>
			<view class="top_select_item" @tap="$goWindow('../carPrice/carPrice')">
				<view>价格</view>
				<view><image src="../../static/jianTou.png"></image></view>
			</view>
			<view class="top_select_item" @tap="$goWindow('../carState/carState')">
				<view>{{ carStateChoose }}</view>
				<view><image src="../../static/jianTou.png"></image></view>
			</view>
			<view class="top_select_item" @tap="zwkf()">
				<view>筛选</view>
				<view><image src="../../static/jianTou.png"></image></view>
			</view>
		</view>
		<view class="cars_list">
			<view class="cars_item" v-for="(item,index) in carList" :key="index">
				<view class="cars_item_img"><image :src="item.coverUrl[0]" @tap="goInfo(item)"></image></view>
				<view class="cars_item_right">
					<view>{{item.seriesName}}</view>
					<view  class="cars_item_content">{{item.styleName}}</view>
					<view  class="cars_item_content">{{ item.createdAt }}年&nbsp;{{ item.mileage }}万公里</view>
					<view  class="cars_item_right_bottom">
						<view>{{ item.onlinePriceCents }}万</view>
						<view class="cars_item_btn" @tap="chooseStateOpen(index)">
							{{ item.stateText }}
							<view :class="[chooseIndex == index?'cars_item_btn_box_choose':'','cars_item_btn_box']">
								<view @tap="setCarState(item.id,0,index)">已在库</view>
								<view @tap="setCarState(item.id,1,index)">已上架</view>
								<view @tap="setCarState(item.id,2,index)">已出库</view>
							</view>
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
				// 当前修改的车辆Index
				chooseIndex: '==',
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
			async setCarState(id,index,Index){
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
				this.chooseIndex == index?this.chooseIndex = index+'==' : this.chooseIndex = index;;
				
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
							let updateDate = (val) => {
								val.coverUrl = val.coverUrl.split(',');
								val.createdAt = new Date(val.createdAt).getFullYear();
								if(val.state == 0){
									val.stateText = '已在库';
								}else if(val.state == 1){
									val.stateText = '已上架';
								}else if(val.state == 2){
									val.stateText = '已出库';
								}
								if(val.id == resData.result.list[resData.result.list.length - 1].id){
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
								}
							}
							resData.result.list.forEach(updateDate);
							uni.hideLoading()
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

