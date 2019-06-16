<template>
	<view id="carEndInfo">
		<view class="carEndInfoChildTop">
			基本信息
		</view>
		<view class="carEndInfoChild">
			<text>品牌车系:</text><text>{{jiBenJi.manufacturer}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>零售价:</text><text>{{jiBenJi.manufacturerPrice}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>车身结构:</text><text>{{jiBenJi.bodyStructure}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>发动机:</text><text>{{jiBenJi.engine}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>变速箱:</text><text>{{jiBenJi.gearbox}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>车身类型:</text><text>{{jiBenJi.level}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>上市时间:</text><text>{{jiBenJi.timetoMarket}}</text>
		</view>
		<view class="carEndInfoChildTop">
			车身信息
		</view>
		<view class="carEndInfoChild">
			<text>长度(mm):</text><text>{{cheShenJi.length}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>宽度(mm):</text><text>{{cheShenJi.width}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>高度(mm):</text><text>{{cheShenJi.height}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>轴距(mm):</text><text>{{cheShenJi.wheelbase}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>前轮距(mm):</text><text>{{cheShenJi.frontWheelPitch}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>后轮距(mm):</text><text>{{cheShenJi.rearWheelPitch}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>最小离地间隙(mm):</text><text>{{cheShenJi.minClearance}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>车身结构:</text><text>{{cheShenJi.bodyStructure}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>车门个数(个):</text><text>{{cheShenJi.doorsNum}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>座位数(个):</text><text>{{cheShenJi.seatsNum}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>邮箱容积(L):</text><text>{{cheShenJi.tankVolume}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>行李箱容积(L):</text><text>{{cheShenJi.luggageVolume}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>整备质量(kg):</text><text>{{cheShenJi.carQuality}}</text>
		</view>
		<!-- seatsNum -->
		<view class="carEndInfoChildTop">
			发动机信息
		</view>
		<view class="carEndInfoChild">
			<!-- {{ faDongJi.cylinderForm }} -->
			<text>排量:</text><text>{{faDongJi.displacement}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>缸体材料:</text><text>{{faDongJi.cylinderBlockMaterial}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>发动机型号:</text><text>{{faDongJi.engineModel}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>进气形式:</text><text>{{faDongJi.intakeForm}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>压缩比:</text><text>{{faDongJi.compressionRatio}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>环保标准:</text><text>{{faDongJi.environmentalProtection}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>缸径(mm):</text><text>{{faDongJi.boreDiameter}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>最大功率:</text><text>{{faDongJi.maxPower}}KW</text>
		</view>
		<view class="carEndInfoChild">
			<text>燃油类型:</text><text>{{faDongJi.fuelForm}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>行程(mm):</text><text>{{faDongJi.trip}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>燃油标号:</text><text>{{faDongJi.fuelGrade}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>供油方式:</text><text>{{faDongJi.fuelSupplyMode}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>发动机技术:</text><text>{{faDongJi.engineTechnology}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>最大功率转速(rpm):</text><text>{{faDongJi.maxPowerSpeed}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>最大扭矩转速(rpm):</text><text>{{faDongJi.maxTorqueSpeed}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>最大马力(Ps):</text><text>{{faDongJi.maxHorsepower}}</text>
		</view>
		<view class="carEndInfoChildTop">
			变速箱信息
		</view>
		<view class="carEndInfoChild">
			<text>简称:</text><text>{{bianSuXiangJi.abbreviation}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>档位个数:</text><text>{{bianSuXiangJi.gearsNum}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>变速箱类型:</text><text>{{bianSuXiangJi.gearboxType}}</text>
		</view>
		<view class="carEndInfoChildTop">
			底盘转向信息
		</view>
		<view class="carEndInfoChild">
			<text>驱动方式:</text><text>{{zhuanXiangJi.drivingMode}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>前悬挂架类型:</text><text>{{zhuanXiangJi.frontSuspensionType}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>后悬挂架类型:</text><text>{{zhuanXiangJi.rearSuspensionType}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>助力类型:</text><text>{{zhuanXiangJi.assistanceType}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>车体结构:</text><text>{{zhuanXiangJi.carStructure}}</text>
		</view>
		<view class="carEndInfoChildTop">
			车轮制动信息
		</view>
		<view class="carEndInfoChild">
			<text>前制动器类型:</text><text>{{cheLunZhiDong.frontBrakeType}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>后制动器类型:</text><text>{{cheLunZhiDong.rearBrakeType}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>驻车制动类型:</text><text>{{cheLunZhiDong.parkingBrakeType}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>前轮胎规格:</text><text>{{cheLunZhiDong.frontTireSpecification}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>后轮胎规格:</text><text>{{cheLunZhiDong.rearTireSpecification}}</text>
		</view>
		<view class="carEndInfoChild">
			<text>备胎规格:</text><text>{{cheLunZhiDong.spareTireSpecification}}</text>
		</view>
		<view class="footEnd" @click="goLongTime()">
			<text>更多详情信息&nbsp;&gt;</text>
		</view>
		<!-- maxHorsepower -->
	</view>
</template>

<script>
	import { getCarInfos } from '@/common/api/carEndInfo.js'
	export default {
		data() {
			return {
				// 基本发动机参数
				faDongJi:{},
				// 基本变速箱参数
				bianSuXiangJi:{},
				// 基本基本参数
				jiBenJi:{},
				// 基本底盘转向参数
				zhuanXiangJi:{},
				// 基本车身参数
				cheShenJi:{},
				// 基本车轮制动参数
				cheLunZhiDong:{},
				styleId:0
			}
		},
		onLoad(params) {
			this.styleId = params.styleId;
			this.getCarInfo();
		},
		methods: {
			goLongTime(){
				this.$goWindow('../longTimeCarInfo/longTimeCarInfo?styleId='+this.styleId);
			},
			// 获取车辆详情基本信息
			async getCarInfo(){
				this.$loading();
				try{
					let params = {id:this.styleId};
					let resData = await getCarInfos(params)	
					if(resData.code === 200){
						var data = resData.result
						this.faDongJi = data.发动机;
						this.bianSuXiangJi = data.变速箱;
						this.jiBenJi = data.基本参数;
						this.cheShenJi = data.车身;
						this.zhuanXiangJi = data.底盘转向;
						this.cheLunZhiDong = data.车轮制动
					}else{
						this.$toast(resData.message);
					}
					uni.hideLoading()
				}catch(e){
					this.$toast('请求失败');
				}
			}
		}
	}
</script>

<style scoped>
*{
	margin: 0;
	padding: 0;
}
.footEnd{
	width: 750upx;
	text-align: center;
	height: 70upx;
	line-height: 70upx;
	font-size: 30upx;
	position: fixed;
	bottom: 0upx;
	left: 0upx;
	right: 0upx;
	background: #FFFFFF;
	border-top: 1upx solid #E8E8E8;
}
#carEndInfo{
	width: 750upx;
	box-sizing: border-box;
}
.carEndInfoChildTop{
	width: 750upx;
	height: 60upx;
	line-height: 60upx;
	background-color: #E8E8E8;
	font-size: 26upx;
	padding-left: 30upx;
	box-sizing: border-box;
}
.carEndInfoChild{
	width: 750upx;
	padding: 0upx 30upx;
	height: 70upx;
	font-size: 26upx;
	border-bottom: 1upx solid #E8E8E8;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
}
.carEndInfoChild text:first-child{
	color: #333333;
	padding-right: 15upx;
	box-sizing: border-box;
}
.carEndInfoChild text:last-child{
	/* width: 500upx; */
	text-overflow: ellipsis;
	overflow: hidden;
	word-wrap: normal;
	/* text-align: right; */
	color: #909399;
}
</style>
