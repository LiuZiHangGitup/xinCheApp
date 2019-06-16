<style scoped>
	*{
		margin: 0;
		padding: .0;
	}
	#addCar{
		width: 750upx;
		background: #E8E8E8;
	}
	.addImg{
		width: 750upx;
		background: #FFFFFF;
		height: 350upx;
		display: flex;
		justify-content: space-between;
		/* padding-top: 30upx; */
		box-sizing: border-box;
	}
/* *************************所属市场  WT-修改 ********************/
	.add_cars_shop_info{
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 26upx;
		color: #333;
		border-bottom: 1px solid #eee;
		padding: 30upx;
		box-sizing: border-box;
	}
	.add_cars_shop_left{
		font-size: 30upx;
	}
	.add_cars_shop_right{
		display: flex;
		align-items: center;
	}
	.add_cars_shop_right_child_one{
		padding-right: 15upx;
		color: #339999 !important;
	}
	.add_cars_shop_right_child_ones{
		padding-right: 15upx;
		color: #909399;
	}
	
	.addImgChild{
		width: 750upx;
		height: 350upx;
		text-align: center;
		font-size: 30upx;
	}
	.addImgChild image{
		width: 750upx;
		height: 350upx;
		margin-bottom: 10upx;
	}
	/* 上传车辆参数 */
	.addData{
		margin-top: 10upx;
		width: 750upx;
		background-color: #FFFFFF;
	}
	.addDataChild{
		width: 750upx;
		background-color: #FFFFFF;
		height: 90upx;
		border-bottom: 1upx solid #E8E8E8;
		line-height: 90upx;
		padding-left: 30upx;
		box-sizing: border-box;
	}
	.addDataChildLeft{
		float: left;
		font-size: 30upx;
	}
	.addDataChildLeft image{
		width: 30upx;
		height: 40upx;
		vertical-align: middle;
		margin-right: 30upx;
		display: none; 
	}
	.addDataChildCenter{
		float: right;
		font-size: 26upx;
		color: #909399;
		margin-right: 15upx;
	}
	.addDataChildCenters{
		display: flex;
		font-size: 26upx;
		align-items: center;
		justify-content: flex-end;
		padding-right: 20upx;
	}
	.addDataMoreChildCenter{
		float: right;
		font-size: 26upx;
		color: #909399;
		margin-right: 90upx;
		position: relative;
	}
	.addDataChildCenter radio-group label{
		display: inline-block;
	}	
	.addDataChildCenter radio-group label radio{
		transform: scale(0.5,0.5);
	}
	.addDataChildCenter .addDataChildCenterCenter{
		
	}
	.addDataChildCenter .addDataChildCenterCenterPaiLiang{
		color: #333333 !important;
		font-weight: bold;
		position: absolute;
		right: 205upx;
		display: inline-block;
		height: 90upx;
		line-height: 90upx;
	}
	.addDataChildCenter input{
		width: 200upx;
		display: inline-block;
		height: 90upx;
		line-height: 90upx;
		position: absolute;
		right: 20upx;
	}
	.addDataChildRight{
		float: right;
		margin-right: 31upx;
		font-size: 26upx;
		color:#909399;
	}
	.addDataChildRight image{
		width: 20upx;
		height: 20upx;
	}
	.market{
		color: #339999 !important;
	}
	.xianZhiLength{
		float: right;
		display: inline-block;
		width: 250upx !important;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	switch{
		transform: scale(0.6);
	}
	/* 更多信息 */
	.addDataMore{
		width: 750upx;
		background-color: #FFFFFF;
	}
	.addDataMoreTitle{
		width: 100%;
		text-align: center;
		font-size: 26upx;
		height: 90upx;
		line-height: 90upx;
		border-bottom: 1upx solid #E8E8E8;
	}
	.addDataMoreTitle image{
		width: 20upx;
		height: 15upx;
		vertical-align: middle;
		margin-left: 15upx;
		transition: 0.3s all ease;
	}
	.addDataMoreCenter{
		transition: 0.3s all ease;
	}
	.addDataChildCenter text{
		margin: 0;
	}
	.addDataChildCenterLeft{
		margin-right: 150upx !important;
	}
	.addDataChildCenterLeft input{
		width: 200upx !important;
	}
	.addDataMoreChildCenterCenter{
		margin-right: 50upx !important;
	}
</style>

<template>
	<view id="addCar">
		<view class="addImg">
			<view class="addImgChild" v-if="carImg.length == 1" @tap="goAddCarImg()">
				<image :src="carImg[0]"></image>
			</view>
			<view class="addImgChild" v-else>
				<swiper :indicator-dots="false" :autoplay="true" :interval="5000" :duration="500" :circular="true">
					<swiper-item v-for="(item,index) in carImg" :key="index" @tap="goAddCarImg()" indicator-dots="true" indicator-color="#0066ff">
						<view class="swiper-item"><image :src="item"></image></view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="addData">
			<view class="addDataChild" v-if="false">
				<view class="addDataChildLeft">
					<image src="../../static/addCar/test_ico.png"></image>
					<text>车辆类型</text>
				</view>
				<view class="addDataChildRight">
					<image src="../../static/addCar/go.png"></image>
				</view>
				<view class="addDataChildCenter">
					<radio-group @change="ifXincheChange">
						<label class="radio" v-for="(item, index) in cheLiangLeiXingRadioItems" :key="item.value">
							<view>
								<radio :value="item.value" :checked="index === current" /><text>{{item.name}}</text>
							</view>
						</label>
					</radio-group>
				</view>
			</view>
			<!--wt-修改 所属市场-->
			<view 
				class="add_cars_shop_info" 
				@tap="openShiChang">
				<view class="add_cars_shop_left">所属市场</view>
				<view class="add_cars_shop_right">
					<view class="add_cars_shop_right_child_one">{{ suoShuShiChang }}</view>
					<view>
						<image 
							src="../../static/addCar/go.png" 
							style="width: 20upx;height: 20upx;"></image>
					</view>
				</view>
			</view>
			<!--wt-修改-->
			
			<!--wt-修改 车商列表-->
			<view 
				class="add_cars_shop_info" 
				@tap="openCheShang">
				<view class="add_cars_shop_left">车商列表</view>
				<view class="add_cars_shop_right">
					<view class="add_cars_shop_right_child_ones">{{ cheShang }}</view>
					<view>
						<image 
							src="../../static/addCar/go.png" 
							style="width: 20upx;height: 20upx;"></image>
					</view>
				</view>
			</view>
			<!--wt-修改-->
			
			<!--wt-修改 车场区域-->
			<view 
				class="add_cars_shop_info" 
				@tap="openCheChang">
				<view class="add_cars_shop_left">市场区域</view>
				<view class="add_cars_shop_right">
					<view class="add_cars_shop_right_child_ones">{{ cheChang }}</view>
					<view>
						<image 
							src="../../static/addCar/go.png" 
							style="width: 20upx;height: 20upx;"></image>
					</view>
				</view>
			</view>
			<!--wt-修改-->
			
			<view class="addDataChild">
				<view 
					class="addDataChildLeft" 
					style="display: flex;align-items: center;">
					<view>vin码</view>
				</view>				
				<view class="addDataChildCenters">
					<view style="padding-right: 15upx;">
						<input 
							type="text" 
							v-model="VINNumber" 
							placeholder="必填" 
							placeholder-style="text-align:right;" 
							maxlength="17" />
					</view>
					<view>
						<image 
							src="../../static/addCar/go.png" 
							style="width: 20upx;height: 20upx;"></image>
					</view>
				</view>
			</view>
			<!--wt-修改 是否上牌-->
			<view class="addDataChild" >
				<view class="addDataChildLeft">
					<image src="../../static/addCar/test_ico.png"></image>
					<text>是否上牌</text>
				</view>
				<view class="addDataChildRight">
					<image src="../../static/addCar/go.png"></image>
				</view>
				<view class="addDataChildCenter">
					<switch 
						class="addDataChildCenterCenterPaiLiang" 
						@change="shangPaiChange" />
					<text>{{ shangPaiText }}</text>
				</view>
			</view>
			<!--wt-修改-->
			<view class="addDataChild" v-if="shangPaiState == 'licensed'">
				<view class="addDataChildLeft" style="display: flex;align-items: center;">
					<view>车牌号码</view>
				</view>				
				<view class="addDataChildCenters">
					<view style="padding-right: 15upx;">
						<input 
							type="text" 
							v-model="chePaiHaoMa" 
							placeholder="必填" 
							placeholder-style="text-align:right;" />
					</view>
					<view>
						<image 
							src="../../static/addCar/go.png" 
							style="width: 20upx;height: 20upx;"></image>
					</view>
				</view>
			</view>
			
			
			<view 
				class="addDataChild" 
				@tap="chooseTime(0)" 
				v-if="shangPaiState == 'licensed'">
				<view class="addDataChildLeft">
					<image src="../../static/addCar/test_ico.png"></image>
					<text>首次上牌时间</text>
				</view>
				<view class="addDataChildRight">
					<image src="../../static/addCar/go.png"></image>
				</view>
				<view class="addDataChildCenter">
					<text class="addDataChildCenterCenter" style="margin: 0;">{{ shouCiShangPai }}</text>
				</view>
			</view>
		</view>
		<!-- 品牌 -->
		<view class="addData">
			<view class="addDataChild" @tap="$goWindow('../carBrand/carBrand')">
				<view class="addDataChildLeft">
					<image src="../../static/addCar/test_ico.png"></image>
					<text>品牌型号</text>
				</view>
				<view class="addDataChildRight">
					<image src="../../static/addCar/go.png"></image>
				</view>
				<view class="addDataChildCenter">
					<text class="addDataChildCenterCenter">
						<text class="xianZhiLength">{{ pinPaiXingHao }}</text>
					</text>
				</view>
			</view>
			<view class="addDataChild" @tap="openColor">
				<view class="addDataChildLeft">
					<image src="../../static/addCar/test_ico.png"></image>
					<text>外观颜色</text>
				</view>
				<view class="addDataChildRight">
					<image src="../../static/addCar/go.png"></image>
				</view>
				<view class="addDataChildCenter">
					<text class="addDataChildCenterCenter" style="margin: 0;">{{ waiGuanYanSe }}</text>
				</view>
			</view>
			 <!-- @tap="openXingShiLiCheng()" -->
			<view class="addDataChild">
				<view class="addDataChildLeft">
					<image src="../../static/addCar/test_ico.png"></image>
					<text>行驶里程</text>
				</view>
				<view class="addDataChildCenters">
					<view style="padding-right: 15upx;">
						<input v-model="xingShiLiCheng" type="text" placeholder-style="text-align:right;"placeholder="请填写行驶里程" maxlength="17" />
					</view>
					<view>
						万公里<image src="../../static/addCar/go.png" style="width: 20upx;height: 20upx;"></image>
					</view>
				</view>
			</view>
			<view class="addDataChild" @tap="chooseTime(1)">
				<view class="addDataChildLeft">
					<image src="../../static/addCar/test_ico.png"></image>
					<text>年审日期</text>
				</view>
				<view class="addDataChildRight">
					<image src="../../static/addCar/go.png"></image>
				</view>
				<view class="addDataChildCenter">
					<text class="addDataChildCenterCenter" style="margin: 0;">{{ nianShenRiQi }}</text>
				</view>
			</view>
		</view>
		<view class="addDataMore">
			<view class="addDataMoreTitle" @tap="openMore">
				<text>更多信息</text>
				<image src="../../static/jianTou.png" mode="" :style="addDataMoreImage"></image>
			</view>
			<view class="addDataMoreCenter" :style="addDataMoreStyle" v-if="addDataMoreState">
				<!--wt-修改 钥匙数量-->
				<view class="addDataChild" :style="addDataMoreStyle" v-if="addDataMoreState">
					<view class="addDataChildLeft">
						<image src="../../static/addCar/test_ico.png"></image>
						<text>钥匙数量</text>
					</view>
					<view class="addDataChildCenters">
						<view style="padding-right: 15upx;"><input  v-model="yaoShiShuLiang" placeholder-style="text-align:right;"placeholder="请填写钥匙数量" /></view>
						<view><image src="../../static/addCar/go.png" style="width: 20upx;height: 20upx;"></image></view>
					</view>
				</view>
				<!---->
				
				
				<!--wt-修改 过户次数-->
				<view class="addDataChild">
					<view class="addDataChildLeft">
						<image src="../../static/addCar/test_ico.png"></image>
						<text>过户次数</text>
					</view>
					<view class="addDataChildCenters">
						<view style="padding-right: 15upx;"><input  v-model="guoHuCiShu" placeholder-style="text-align:right;"placeholder="请输入过户次数" /></view>
						<view><image src="../../static/addCar/go.png" style="width: 20upx;height: 20upx;"></image></view>
					</view>
				</view>
				<!---->
				
				<!--wt-修改 内饰颜色-->
				<view class="add_cars_shop_info" @tap="openCheShiColor()">
					<view class="add_cars_shop_left">内饰颜色</view>
					<view class="add_cars_shop_right">
						<text class="addDataChildCenterCenter" style="padding-right: 15upx;">{{ neiShiYanSe }}</text>
						<view>
							<image src="../../static/addCar/go.png" style="width: 20upx;height: 20upx;"></image>
						</view>
					</view>
				</view>
				<!--wt-修改-->
				
				<!--wt-修改 车身类型-->
				<view class="add_cars_shop_info" @tap="openCheShenLeiXing">
					<view class="add_cars_shop_left">车身类型</view>
					<view class="add_cars_shop_right">
						<text class="addDataChildCenterCenter" style="padding-right: 15upx;">{{ cheShenLeiXing }}</text>
						<view>
							<image src="../../static/addCar/go.png" style="width: 20upx;height: 20upx;"></image>
						</view>
					</view>
				</view>
				<!--wt-修改-->
				
				<!--wt-修改 环保标准-->
				<view class="add_cars_shop_info" @tap="openHuanBao()">
					<view class="add_cars_shop_left">环保标准</view>
					<view class="add_cars_shop_right">
						<text class="addDataChildCenterCenter" style="padding-right: 15upx;">{{ huanBaoBiaoZhun }}</text>
						<view>
							<image src="../../static/addCar/go.png" style="width: 20upx;height: 20upx;"></image>
						</view>
					</view>
				</view>
				<!--wt-修改-->
				
				<!--wt-修改 燃油类型-->
				<view class="add_cars_shop_info" @tap="openRanYou()">
					<view class="add_cars_shop_left">燃油类型</view>
					<view class="add_cars_shop_right">
						<text class="addDataChildCenterCenter" style="padding-right: 15upx;">{{ ranYouLeiXing }}</text>
						<view>
							<image src="../../static/addCar/go.png" style="width: 20upx;height: 20upx;"></image>
						</view>
					</view>
				</view>
				<!--wt-修改-->
				<!-- <view class="addDataChild" @tap="zwkf">
					<view class="addDataChildLeft">
						<image src="../../static/addCar/test_ico.png"></image>
						<text>车辆配置</text>
					</view>
					<view class="addDataChildRight">
						<image src="../../static/addCar/go.png"></image>
					</view>
					<view class="addDataChildCenter addDataChildCenterLeft">
						<text class="addDataChildCenterCenter addDataMoreChildCenterCenter">{{ cheLiangPeiZhi }}</text>
					</view>
				</view> -->
			</view>
		</view>
		<!-- 交强险日期 -->
		<view class="addData">
			<view class="addDataChild" @tap="chooseTime(2)">
				<view class="addDataChildLeft">
					<image src="../../static/addCar/test_ico.png"></image>
					<text>交强险日期</text>
				</view>
				<view class="addDataChildRight">
					<image src="../../static/addCar/go.png"></image>
				</view>
				<view class="addDataChildCenter">
					<text class="addDataChildCenterCenter">{{ jiaoQiangXian }}</text>
				</view>
			</view>
			<view class="addDataChild" >
				<view class="addDataChildLeft">
					<image src="../../static/addCar/test_ico.png"></image>
					<text>使用性质</text>
				</view>
				<view class="addDataChildRight">
					<image src="../../static/addCar/go.png"></image>
				</view>
				<view class="addDataChildCenter">
					<switch class="addDataChildCenterCenterPaiLiang" @change="shiYongXingZhiChange" />
					<text>{{ shiYongXingZhi }}</text>
				</view>
			</view>
			<view class="addDataChild">
				<view class="addDataChildLeft">
					<image src="../../static/addCar/test_ico.png"></image>
					<text>排量</text>
				</view>
				<view class="addDataChildRight">
					<image src="../../static/addCar/go.png"></image>
				</view>
				<view class="addDataChildCenter">
					<switch class="addDataChildCenterCenterPaiLiang" @change="paiLiangChange" />
					<text>{{ paiLiangLeiXing }}</text>
					<input type="number" v-model="paiLiang" placeholder="请输入排量" />
				</view>
			</view>
			<view class="addDataChild">
				<view class="addDataChildLeft">
					<image src="../../static/addCar/test_ico.png"></image>
					<text>变速箱</text>
				</view>
				<view class="addDataChildRight">
					<image src="../../static/addCar/go.png"></image>
				</view>
				<view class="addDataChildCenter">
					<switch class="addDataChildCenterCenterPaiLiang" @change="bianSuXiangChange" />
					<text class="addDataChildCenterCenter">{{ bianSuXiang }}</text>
				</view>
			</view>
			<view class="addDataChild">
				<view class="addDataChildLeft">
					<image src="../../static/addCar/test_ico.png"></image>
					<text>价格面议</text>
				</view>
				<view class="addDataChildRight">
					<image src="../../static/addCar/go.png"></image>
				</view>
				<view class="addDataChildCenter">
					<switch class="addDataChildCenterCenterPaiLiang" @change="jiaGeChange" />
					<text class="addDataChildCenterCenter">{{ jiaGeMianYi }}</text>
				</view>
			</view>
			<view class="addDataChild" v-if="lingShouJiaState == 1">
				<view class="addDataChildLeft">
					<image src="../../static/addCar/test_ico.png"></image>
					<text>零售价</text>
				</view>
				<view class="addDataChildRight">
					<image src="../../static/addCar/go.png"></image>
				</view>
				<view class="addDataChildCenter">
					<input type="number" v-model="lingShouJia" placeholder="必填" />
				</view>
			</view>
			<view class="addDataChild">
				<view class="addDataChildLeft">
					<image src="../../static/addCar/test_ico.png"></image>
					<text>4S店保养</text>
				</view>
				<view class="addDataChildRight">
					<image src="../../static/addCar/go.png"></image>
				</view>
				<view class="addDataChildCenter">
					<switch class="addDataChildCenterCenterPaiLiang" @change="siAiSiDianBaoYangChange" />
					<text class="addDataChildCenterCenter">{{ siAiSiDianBaoYang }}</text>
				</view>
			</view>
		</view>
		<!-- 首次上牌时间 年审日期 交强险日期 时间选择器 -->
		<view class="pickerViewBg" :style="pickerViewBg"></view>
		<view class="picker-view" :style="pickerView">
			<view class="chooseSure">
				<text @tap="closeShangPaiShiJian()">取消</text>
				<text>{{ shiJianPickerTitle }}</text>
				<text @tap="sureShangPaiShiJian">确认</text>
			</view>
			<picker-view @change="bindChange">
			    <picker-view-column>
			        <view class="item" v-for="(item,index) in years" :key="index">{{item}}年</view>
			    </picker-view-column>
			    <picker-view-column>
			        <view class="item" v-for="(item,index) in months" :key="index">{{item}}月</view>
			    </picker-view-column>
			</picker-view>
		</view>
		<!-- 行驶里程选择器 -->
		<view class="pickerViewBg" :style="pickerViewBgXingShiLiCheng"></view>
		<view class="picker-view" :style="pickerViewXingShiLiCheng">
			<view class="chooseSure">
				<text @tap="closeXingShiLiCheng()">取消</text>
				<test>行驶里程</test>
				<text @tap="sureXingShiLiCheng()">确认</text>
			</view>
			<picker-view @change="bindChangeXingShiLiCheng">
				<picker-view-column>
					<view class="item" v-for="(item,index) in liCheng" :key="index">{{item}}</view>
				</picker-view-column>
			</picker-view>
		</view>
		<!-- 环保标准选择器 -->
		<view class="pickerViewBg" :style="pickerViewBgHuanBao"></view>
		<view class="picker-view" :style="pickerViewHuanBao">
			<view class="chooseSure">
				<text @tap="closeHuanBao()">取消</text>
				<test>环保标准</test>
				<text @tap="sureHuanBao()">确认</text>
			</view>
			<picker-view @change="bindChangeHuanBao">
				<picker-view-column>
					<view class="item" v-for="(item,index) in huanBao" :key="index">{{item.name}}</view>
				</picker-view-column>
			</picker-view>
		</view>
		<!-- 外观颜色选择器 -->
		<view class="pickerViewBg" :style="pickerViewBgColor"></view>
		<view class="picker-view" :style="pickerViewColor">
			<view class="chooseSure">
				<text @tap="closeColor()">取消</text>
				<test>外观颜色</test>
				<text @tap="sureColor()">确认</text>
			</view>
			<picker-view @change="bindChangeColor">
				<picker-view-column>
					<view class="item" v-for="(item,index) in Color" :key="index">{{item.name}}</view>
				</picker-view-column>
			</picker-view>
		</view>
		<!-- 车身类型选择器 -->
		<view class="pickerViewBg" :style="pickerViewBgCheShenLeiXing"></view>
		<view class="picker-view" :style="pickerViewCheShenLeiXing">
			<view class="chooseSure">
				<text @tap="closeCheShenLeiXing()">取消</text>
				<test>车身类型</test>
				<text @tap="sureCheShenLeiXing()">确认</text>
			</view>
			<picker-view @change="bindChangeCheShenLeiXing">
				<picker-view-column>
					<view class="item" v-for="(item,index) in cheShen" :key="index">{{item.name}}</view>
				</picker-view-column>
			</picker-view>
		</view>
		<!-- 车饰颜色选择器 -->
		<view class="pickerViewBg" :style="pickerViewBgCheShiColor"></view>
		<view class="picker-view" :style="pickerViewCheShiColor">
			<view class="chooseSure">
				<text @tap="closeCheShiColor()">取消</text>
				<test>车饰颜色</test>
				<text @tap="sureCheShiColor()">确认</text>
			</view>
			<picker-view @change="bindChangeCheShiColor">
				<picker-view-column>
					<view class="item" v-for="(item,index) in neiShiColor" :key="index">{{item.name}}</view>
				</picker-view-column>
			</picker-view>
		</view>
		<!-- 燃油类型选择器 -->
		<view class="pickerViewBg" :style="pickerViewBgRanYou"></view>
		<view class="picker-view" :style="pickerViewRanYou">
			<view class="chooseSure">
				<text @tap="closeRanYou()">取消</text>
				<test>燃油类型</test>
				<text @tap="sureRanYou()">确认</text>
			</view>
			<picker-view @change="bindChangeRanYou">
				<picker-view-column>
					<view class="item" v-for="(item,index) in ranYou" :key="index">{{item.name}}</view>
				</picker-view-column>
			</picker-view>
		</view>
		<!-- 所属市场选择器 -->
		<view class="pickerViewBg" :style="pickerViewBgShiChang"></view>
		<view class="picker-view" :style="pickerViewShiChang">
			<view class="chooseSure">
				<text @tap="closeShiChang()">取消</text>
				<test>所属市场</test>
				<text @tap="sureShiChang()">确认</text>
			</view>
			<picker-view @change="bindChangeShiChang">
				<picker-view-column>
					<view class="item" v-for="(item,index) in suoShuShiChangList" :key="index">{{item.marketName}}</view>
				</picker-view-column>
			</picker-view>
		</view>
		<!-- 车商列表选择器 -->
		<view class="pickerViewBg" :style="pickerViewBgCheShang"></view>
		<view class="picker-view" :style="pickerViewCheShang">
			<view class="chooseSure">
				<text @tap="closeCheShang()">取消</text>
				<test>车商列表</test>
				<text @tap="sureCheShang()">确认</text>
			</view>
			<picker-view @change="bindChangeCheShang">
				<picker-view-column>
					<view class="item" v-for="(item,index) in cheShangList" :key="index">{{item.merchantName}}</view>
				</picker-view-column>
			</picker-view>
		</view>
		<!-- 车场区域选择器 -->
		<view class="pickerViewBg" :style="pickerViewBgCheChang"></view>
		<view class="picker-view" :style="pickerViewCheChang">
			<view class="chooseSure">
				<text @tap="closeCheChang()">取消</text>
				<test>车场区域</test>
				<text @tap="sureCheChang()">确认</text>
			</view>
			<picker-view @change="bindChangeCheChang">
				<picker-view-column>
					<view class="item" v-for="(item,index) in cheChangList" :key="index">{{item.areaName}}</view>
				</picker-view-column>
			</picker-view>
		</view>
	</view>
</template>

<script>
import { addCar,selectMarket,selectMerchantById,getUnSigningAreaByMerchantId } from '@/common/api/addCar.js'
// 车市区域索引  内饰颜色索引  外观颜色索引  汽车类型索引  燃油类型索引  环保标准索引  年份索引 月份索引  所属市场索引  车商列表索引  车场区域索引
var cheShiIndex = 0 , neiShiYanSeIndex = 0 , waiGuanYanSeIndex = 0 , carTypeIndex = 0 , ranYouLeiXingIndex = 0 , huanBaoBiaoZhunIndex = 0 , yearIndex = 0, monthIndex = 0 , shiChangIndex = 0 , cheShangIndex = 0 , cheChangIndex = 0;
export default {
	data: function () {
        const date = new Date();
        const years = [];
        const months = [];
		// 行驶里程数
		const liCheng = [];
		const licheng = '1万公里以内';
		// 车辆使用性质
		const xingZhi = ['非营业','营业'];
		const xingzhi = '非营业';
		// 外观颜色
		const Color = [
          { type: 'black', name: '黑色' },
          { type: 'white', name: '白色' },
          { type: 'red', name: '红色' },
          { type: 'purple', name: '紫色' },
          { type: 'silver_grey', name: '银灰色' },
          { type: 'green', name: '绿色' },
          { type: 'yellow', name: '黄色' },
          { type: 'dark_grey', name: '深灰色' },
          { type: 'brown', name: '棕色' },
          { type: 'champagne', name: '香槟色' },
          { type: 'orange', name: '橙色' },
          { type: 'blue', name: '蓝色' },
          { type: 'rgb(59, 250, 250)', name: '其他' }
        ];
		const color = '黑色';
		// 内饰颜色
		const neiShiColor = [
          { type: 'double', name: '双色' },
          { type: 'cream', name: '米黄' },
          { type: 'oyster_grey', name: '米灰' },
          { type: 'red', name: '红色' },
          { type: 'black', name: '黑色' },
          { type: 'brown', name: '棕色' },
          { type: 'rgb(59, 250, 250)', name: '其他' }
        ];
		const neishicolor = '双色';
		// 车身类型
		const cheShen = [
		  { type: 'micro_car', name: '微型车' },
		  { type: 'small_car', name: '小型车' },
		  { type: 'compact_car', name: '紧凑型' },
		  { type: 'mid_size_car', name: '中型车' },
		  { type: 'mid_full_size_car', name: '中大型' },
		  { type: 'full_size_car', name: '大型车' },
		  { type: 'mpv', name: 'MPV' },
		  { type: 'suv', name: 'SUV' },
		  { type: 'sports_car', name: '跑车' },
		  { type: 'pickup_trucks', name: '皮卡' },
		  { type: 'small_van', name: '微面' },
		  { type: 'electrocar', name: '电动车' },
		  { type: 'ohter', name: '其他' }
		];
		const cheshenleixing = '其他';
		// 车身类型
		const huanBao = [
          { type: 'guo_1', name: '国I' },
          { type: 'guo_2', name: '国II' },
          { type: 'guo_3', name: '国III' },
          { type: 'guo_4', name: '国IV' },
          { type: 'guo_5', name: '国V' },
          { type: 'eu_1', name: '欧I' },
          { type: 'eu_2', name: '欧II' },
          { type: 'eu_3', name: '欧III' },
          { type: 'eu_4', name: '欧IV' },
          { type: 'eu_5', name: '欧V' }
        ];
		const huanbao = '其他';
		// 燃油类型
		const ranYou = [
          { type: 'gasoline', name: '汽油' },
          { type: 'diesel', name: '柴油' },
          { type: 'electric', name: '电动' },
          { type: 'hybrid', name: '混合' },
          { type: 'other', name: '其他' }
        ];
		const ranyou = '汽油';
        for (let i = 1990; i <= date.getFullYear(); i++) {
            years.push(i);
        }
        for (let i = 1; i <= 12; i++) {
            months.push(i);
        }
		for (let i = 1; i <= 20; i++) {
			var licheng3;
			if(i==1){
				licheng3  = '1万公里以内'
			}else{
				var licheng1 = i;
				var licheng2 = i-1;
				licheng3 = licheng2+'万公里--'+licheng1+'万公里';
			}
			liCheng.push(licheng3)
		}
        return {
			cheChang:'',
			cheChangId:'',
			cheChangList:[],
			cheShangState:0,
			cheShangId:'',
			cheShang:'',
			cheShangList:[],
			suoShuShiChangList:[],
			suoShuShiChangId:'',
			suoShuShiChang:'',
			shiJianPickerTitle: '',
			years,
			months,
			liCheng,
			licheng,
			xingZhi,
			xingzhi,
			Color,
			color,
			cheShen,
			huanBao,
			huanbao,
			ranYou,
			ranyou,
			cheshenleixing,
			neiShiColor,
			neishicolor,
			visible: true,
			indicatorStyle: `height: ${Math.round(uni.getSystemInfoSync().screenWidth/(750/100))}px;`,
			pickerView: 'transform: scaleY(0);',
			pickerViewBg: 'transform: scaleY(0);',
			pickerViewBgXingShiLiCheng: 'transform: scaleY(0);',
			pickerViewBgCheShenLeiXing: 'transform: scaleY(0);',
			pickerViewCheShenLeiXing: 'transform: scaleY(0);',
			pickerViewXingShiLiCheng: 'transform: scaleY(0);',
			pickerViewBgCheShiColor: 'transform: scaleY(0);',
			pickerViewCheShiColor: 'transform: scaleY(0);',
			pickerViewBgShiChang: 'transform: scaleY(0);',
			pickerViewShiChang: 'transform: scaleY(0);',
			pickerViewBgCheShang: 'transform: scaleY(0);',
			pickerViewCheShang: 'transform: scaleY(0);',
			pickerViewBgCheChang: 'transform: scaleY(0);',
			pickerViewCheChang: 'transform: scaleY(0);',
			pickerViewBgHuanBao: 'transform: scaleY(0);',
			pickerViewHuanBao: 'transform: scaleY(0);',
			pickerViewBgRanYou: 'transform: scaleY(0);',
			pickerViewRanYou: 'transform: scaleY(0);',
			pickerViewBgColor: 'transform: scaleY(0);',
			pickerViewColor: 'transform: scaleY(0);',
			addDataMoreStyle: 'transform: scaleY(0);',
			addDataMoreImage: 'transform:rotate(0deg);',
			addDataMoreState: false,
			shouCiShangPai:'必填',
			xuanZeLeiXing:'',
			nianShenRiQi:'',
			jiaoQiangXian:'',
			xingShiLiCheng:'',
			// 车辆类型
			cheLiangLeiXingRadioItems: [
				{
					value: 'erShowChe',
					name: '二手车'
				},
				{
					value: 'xinChe',
					name: '新车',
					checked: 'true'
				}
			],
			current: 0,
			// 4S店保养
			siAiSiDianBaoYang: '否',
			// 车辆类型
			cheLiangLeiXing:'二手车',
			// 价格面议
			jiaGeMianYi:'是',
			// 车市区域
			cheShiQuYu:'',
			// 车牌号码
			chePaiHaoMa:'',
			// VIN号
			VINNumber:'',
			// 零售价
			lingShouJia:'',
			// 零售价状态
			lingShouJiaState: 0,
			// 使用性质
			shiYongXingZhi:'非营业',
			// 使用性质
			shiYongXingZhiType: 1,
			// 变速箱
			bianSuXiang:'手动',
			bianSuXingEnglish: 'manual',
			// 排量
			paiLiang:'',
			// 排量类型
			paiLiangLeiXing:'L',
			// 外观颜色
			waiGuanYanSe:'必填',
			waiGuanYanseEnghlish: '',
			// 车商列表
			// cheShang: '必填',
			// 品牌型号
			pinPaiXingHao:'必填',
			pinPaiXingHaoInfo:{brandName:'',seriesName:'',styleName:'',styleId:''},
			// 车辆图片
			carImg:['../../static/addCar/addImg.png'],
			// 钥匙数量
			yaoShiShuLiang: '',
			// 内饰颜色
			neiShiYanSe: '请选择内饰颜色',
			neiShiYanSeEnglish: '',
			// 车身类型
			cheShenLeiXing: '其他',
			cheShenLeiXingEnglish: '',
			// 过户次数
			guoHuCiShu: '',
			// 车市列表
			marketList:[],
			// 环保标准
			huanBaoBiaoZhun: '请选择环保标准',
			huanBaoBiaoZhunEnglish: '',
			// 燃油类型
			ranYouLeiXing: '请选择燃油类型',
			ranYouLeiXingEnglish: '',
			// 车辆配置
			cheLiangPeiZhi: '点击编辑车辆配置',
			// 车市Id列表
			marketIdList: [],
			// 上牌
			shangPaiText: '否',
			// 上牌状态
			shangPaiState: 'unlicensed',
			// 所选车市id
			marketId: '',
			// 是否展示轮播图
			ifShowImg:false
		}
    },
	onLoad(events){	
		this.getAllMarket();
		this.pinPaiXingHao = events.carName;
		if(this.carImg[0] == '../../static/addCar/addImg.png'){
			this.ifShowImg = true;
		}else{
			this.ifShowImg = false;
		}
	},
	onNavigationBarButtonTap(){
		this.addCars();
	},
    methods: {
		async getAllCheChang(){
			try{
				let resData = await getUnSigningAreaByMerchantId(this.cheShangId)
				if(resData.code === 200){
					if(resData.result.length > 0){
						this.cheChang = resData.result[0].areaName;
						this.cheChangId = resData.result[0].areaId;
						this.cheChangList = resData.result;
					}else{
						this.cheChang = '暂无';
						this.cheChangId = '';
					}
				}
			}catch(e){
				this.$toast('请求失败');
			}
		},
		async getAllCheShang(){
			try{
				let resData = await selectMerchantById(this.suoShuShiChangId)
				if(resData.code === 200){
					if(resData.result.length > 0){
						this.cheShang = resData.result[0].merchantName;
						this.cheShangId = resData.result[0].merchantId;
						this.cheShangList = resData.result;
						this.getAllCheChang();
					}else{
						this.cheShang = '暂无';
						this.cheShangId = '';
					}
				}else{
					this.$toast(resData.message);
				}
			}catch(e){
				this.$toast('请求失败');
			}
		},
		// 获取所属市场
		async getAllMarket(){
			this.$loading();
			try{
				let resData = await selectMarket()
				if(resData.code === 200){
					if(resData.result.length > 0){
						this.suoShuShiChang = resData.result[0].marketName;
						this.suoShuShiChangId = resData.result[0].marketId;
						this.suoShuShiChangList = resData.result;
					}else{
						this.suoShuShiChang = '暂无';
						this.suoShuShiChangId = '';
					}
					if(this.cheShangState == 0){
						this.getAllCheShang()
					}
				}else{
					this.$toast(resData.message);
				}
				uni.hideLoading();
			}catch(e){
				this.$toast('请求失败')
			}
		},
		
		// 新增车辆
		async addCars(){
			let chePaiHaoZhengZe = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
			let vinZhengZe = /^[A-Z\d]{17}$/;
			if(this.suoShuShiChang == '' || this.suoShuShiChang == '暂无'){
				this.$toast('请选择所属市场');
			}else if(this.cheShang == ''||this.cheShang == '暂无'){
				this.$toast('请选择车商');
			}else if(this.cheChang == ''||this.cheChang == '暂无'){
				this.$toast('请选择车场区域');
			}else if(this.shangPaiState == 'licensed'&&this.chePaiHaoMa == ''&&chePaiHaoZhengZe.test(this.chePaiHaoMa)){
				this.$toast('请填写车牌号');
			}else if(this.VINNumber == '' && vinZhengZe.test(this.VINNumber)){
				this.$toast('请填写VIN码');
			}else if(this.shangPaiState == 'licensed'&&this.shouCiShangPai == '必填'){
				this.$toast('请选择上牌时间');
			}else if(this.xingShiLiCheng == ''){
				this.$toast('请填写行驶里程');
			}else if(this.waiGuanYanseEnghlish == ''){
				this.$toast('请选择外观颜色');
			}else if(this.pinPaiXingHaoInfo.brandName == ''||this.pinPaiXingHaoInfo.seriesName == ''||this.pinPaiXingHaoInfo.styleName == ''){
				this.$toast('请选择品牌车型');
			}else if(this.lingShouJiaState == 1&&this.lingShouJia == ''){
				this.$toast('请填写零售价');
			}else if(this.carImg[0] == '../../static/addCar/addImg.png'){
				this.$toast('请上传车辆照片');
			}else{
				var paiLiangType = 0;
				if(this.paiLiangLeiXing == 'T'){
					paiLiangType = 1;
				}
				var jiaGeMianYiType = 0;
				if(this.jiaGeMianYi == '否'){
					jiaGeMianYiType = 1;
				}
				var siAiSiDianBaoYangType = 0;
				if(this.siAiSiDianBaoYang == '否'){
					siAiSiDianBaoYangType = 1;
				}
				var chePaiShiJian = this.shouCiShangPai;
				if(chePaiShiJian == '必填'){
					chePaiShiJian = '';
				}
				try{
					this.$loading()
					let addCarData = {
						marketId: this.suoShuShiChangId,
						relationId: this.cheShangId,
						areaId: this.cheChangId,
						areaName: this.cheChang,
						brandName: this.pinPaiXingHaoInfo.brandName,
						seriesName: this.pinPaiXingHaoInfo.seriesName,
						styleName: this.pinPaiXingHaoInfo.styleName,
						styleId: this.pinPaiXingHaoInfo.styleId,
						exteriorColor: this.waiGuanYanseEnghlish,
						exteriorColorName:this.waiGuanYanSe,
						interiorColor: this.neiShiYanSeEnglish,
						licenseInfo: this.shangPaiState,
						licensedAt: chePaiShiJian,
						validateDate: this.nianShenRiQi,
						forceInsuranceDate: this.jiaoQiangXian,
						nature: this.shiYongXingZhiType,
						isTurboCharger: paiLiangType,
						emissionStandard: this.huanBaoBiaoZhunEnglish,
						transmission: this.bianSuXingEnglish,
						isFaceToFace: jiaGeMianYiType,
						isRegularMaintenance: siAiSiDianBaoYangType,
						keyNum: this.yaoShiShuLiang,
						carType: this.cheShenLeiXingEnglish,
						transferNum: this.guoHuCiShu,
						emissionStandard: this.huanBaoBiaoZhunEnglish,
						fuelType: this.ranYouLeiXingEnglish,
						vin: this.VINNumber,
						currentPlateNumber: this.chePaiHaoMa,
						mileage: this.xingShiLiCheng,
						coverUrl: this.carImg.join(','),
						onlinePriceCents: parseFloat(this.lingShouJia),
						displacement: this.paiLiang
					}
					let resData = await addCar(addCarData)
					if(resData.code === 200){
						uni.showToast({
							title:'发车成功,即将为您跳转车辆列表页面。',
							icon:"none",
							position:'bottom',
							mask:true
						})
						setTimeout(() => {
							this.$goWindow('../vehicleSource/vehicleSource');
						},1000)
						uni.hideLoading();
					}else{
						this.$toast(resData.message);
						uni.hideLoading();
					}
				}catch(e){
					this.$toast('请求失败');
				}
			}
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
		// 打开更多信息
		openMore(){
			if(this.addDataMoreState == false){
				this.addDataMoreState = true;
				this.addDataMoreStyle = 'transform: scaleY(1);';
				this.addDataMoreImage = 'transform:rotate(180deg);';
			}else{
				this.addDataMoreState = false;
				this.addDataMoreStyle = 'transform: scaleY(0);';
				this.addDataMoreImage = 'transform:rotate(0deg);';
			}
		},
		// 去上传图片页面
		goAddCarImg(){
			this.$goWindow('../addCarImg/addCarImg?imgArray='+this.carImg)
		},
		// 是否上牌
		shangPaiChange(e){
			if(e.target.value != true){
				this.shangPaiText = '否';
				this.shangPaiState = 'unlicensed';
			}else{
				this.shangPaiText = '是';
				this.shangPaiState = 'licensed';
			}
		},
		// 修改4S店保养
		siAiSiDianBaoYangChange(e){
			if(e.target.value != true){
				this.siAiSiDianBaoYang = '否';
			}else{
				this.siAiSiDianBaoYang = '是';
			}
		},
		// 修改使用性质
		shiYongXingZhiChange(e){
			if(e.target.value != true){
				this.shiYongXingZhi = '非营运';
				this.shiYongXingZhiType = 1;
			}else{
				this.shiYongXingZhi = '营运';
				this.shiYongXingZhiType = 0;
			}
		},
		// 价格面议状态修改
		jiaGeChange(e){
			if(e.target.value == true){
				this.jiaGeMianYi = '否';
				this.lingShouJiaState = 1;
			}else{
				this.jiaGeMianYi = '是';
				this.lingShouJiaState = 0;
			}
		},
		// 修改变速箱
		bianSuXiangChange(e){
			if(e.target.value == true){
				this.bianSuXiang = '自动';
				this.bianSuXingEnglish = 'auto';
			}else{
				this.bianSuXiang = '手动';
				this.bianSuXingEnglish = 'manual';
			}
		},
		// 修改排量
		paiLiangChange(e){
			if(e.target.value == true){
				this.paiLiangLeiXing = 'T';
			}else{
				this.paiLiangLeiXing = 'L';
			}
		},
		// 选择二手车新车事件
		ifXincheChange(evt) {
            for (let i = 0; i < this.cheLiangLeiXingRadioItems.length; i++) {
                if (this.cheLiangLeiXingRadioItems[i].value === evt.target.value) {
                    this.current = i;
					this.cheLiangLeiXing = this.cheLiangLeiXingRadioItems[this.current].name;
                    break;
                }
            }
        },
		// 确定燃油类型
		sureRanYou(){
			this.pickerViewRanYou = 'transform: scaleY(0);';
			this.pickerViewBgRanYou = 'transform: scaleY(0);';
			this.ranYouLeiXing = this.ranYou[ranYouLeiXingIndex].name;
			this.ranYouLeiXingEnglish = this.ranYou[ranYouLeiXingIndex].type;
		},
		// 打开环保类型选择器
		openRanYou(){
			this.pickerViewRanYou = 'transform: scaleY(1);';
			this.pickerViewBgRanYou = 'transform: scaleY(1);';
		},
		// 关闭环保类型选择器
		closeRanYou(){
			this.pickerViewRanYou = 'transform: scaleY(0);';
			this.pickerViewBgRanYou = 'transform: scaleY(0);';
		},
		// 确定环保类型
		sureHuanBao(){
			this.pickerViewHuanBao = 'transform: scaleY(0);';
			this.pickerViewBgHuanBao = 'transform: scaleY(0);';
			this.huanBaoBiaoZhun = this.huanBao[huanBaoBiaoZhunIndex].name;
			this.huanBaoBiaoZhunEnglish = this.huanBao[huanBaoBiaoZhunIndex].type;
		},
		// 打开环保类型选择器
		openHuanBao(){
			this.pickerViewHuanBao = 'transform: scaleY(1);';
			this.pickerViewBgHuanBao = 'transform: scaleY(1);';
		},
		// 关闭环保类型选择器
		closeHuanBao(){
			this.pickerViewHuanBao = 'transform: scaleY(0);';
			this.pickerViewBgHuanBao = 'transform: scaleY(0);';
		},
		// 确定车身类型
		sureCheShenLeiXing(){
			this.pickerViewCheShenLeiXing = 'transform: scaleY(0);';
			this.pickerViewBgCheShenLeiXing = 'transform: scaleY(0);';
			this.cheShenLeiXing = this.cheShen[carTypeIndex].name;
			this.cheShenLeiXingEnglish = this.cheShen[carTypeIndex].type;
			
		},
		// 打开车身类型选择器
		openCheShenLeiXing(){
			this.pickerViewCheShenLeiXing = 'transform: scaleY(1);';
			this.pickerViewBgCheShenLeiXing = 'transform: scaleY(1);';
		},
		// 关闭车身类型选择器
		closeCheShenLeiXing(){
			this.pickerViewCheShenLeiXing = 'transform: scaleY(0);';
			this.pickerViewBgCheShenLeiXing = 'transform: scaleY(0);';
		},
		// 确认车商列表选择器
		sureCheShang(){
			this.pickerViewCheShang = 'transform: scaleY(0);';
			this.pickerViewBgCheShang = 'transform: scaleY(0);';
			this.cheShang = this.cheShangList[cheShangIndex].merchantName;
			this.cheShangId = this.cheShangList[cheShangIndex].merchantId;
			this.getAllCheChang();
		},
		// 关闭车商列表选择器
		closeCheShang(){
			this.pickerViewCheShang = 'transform: scaleY(0);';
			this.pickerViewBgCheShang = 'transform: scaleY(0);';
		},
		// 关闭所属市场选择器
		closeShiChang(){
			this.pickerViewShiChang = 'transform: scaleY(0);';
			this.pickerViewBgShiChang = 'transform: scaleY(0);';
		},
		// 打开所属市场选择器
		openShiChang(){
			if(uni.getStorageSync('qx') == 'admine'){
				this.pickerViewShiChang = 'transform: scaleY(1);';
				this.pickerViewBgShiChang = 'transform: scaleY(1);';
			}
		},
		// 打开车商选择器
		openCheShang(){
			if(uni.getStorageSync('qx') == 'admine' || uni.getStorageSync('qx') == 'market'){
				this.pickerViewCheShang = 'transform: scaleY(1);';
				this.pickerViewBgCheShang = 'transform: scaleY(1);';
			}
		},
		// 确定所属市场选择器
		sureShiChang(){
			this.pickerViewShiChang = 'transform: scaleY(0);';
			this.pickerViewBgShiChang = 'transform: scaleY(0);';
			this.suoShuShiChang = this.suoShuShiChangList[shiChangIndex].marketName;
			this.suoShuShiChangId = this.suoShuShiChangList[shiChangIndex].marketId;
			this.getAllCheShang();
		},
		// 确定车场区域选择器
		sureCheChang(){
			this.pickerViewCheChang = 'transform: scaleY(0);';
			this.pickerViewBgCheChang = 'transform: scaleY(0);';
			this.cheChang = this.cheChangList[cheChangIndex].areaName;
			this.cheChangId = this.cheChangList[cheChangIndex].areaId;
		},
		// 关闭车场区域选择器
		closeCheChang(){
			this.pickerViewCheChang = 'transform: scaleY(0);';
			this.pickerViewBgCheChang = 'transform: scaleY(0);';
		},
		// 打开车场区域选择器
		openCheChang(){
			if(this.cheChangList.length > 1){
				this.pickerViewCheChang = 'transform: scaleY(1);';
				this.pickerViewBgCheChang = 'transform: scaleY(1);';
			}else{
				this.$toast('暂无其他车场区域');	
			}
		},
		// 打开车饰颜色选择器
		openCheShiColor(){
			this.pickerViewCheShiColor = 'transform: scaleY(1);';
			this.pickerViewBgCheShiColor = 'transform: scaleY(1);';
		},
		// 确定内饰颜色
		sureCheShiColor(){
			this.pickerViewCheShiColor = 'transform: scaleY(0);';
			this.pickerViewBgCheShiColor = 'transform: scaleY(0);';
			this.neiShiYanSe = this.neiShiColor[neiShiYanSeIndex].name;
			this.neiShiYanSeEnglish = this.neiShiColor[neiShiYanSeIndex].type;
		},
		// 关闭内饰颜色选择器
		closeCheShiColor(){
			this.pickerViewCheShiColor = 'transform: scaleY(0);';
			this.pickerViewBgCheShiColor = 'transform: scaleY(0);';
		},
		// 打开外观颜色选择器
		openColor(){
			this.pickerViewColor = 'transform: scaleY(1);';
			this.pickerViewBgColor = 'transform: scaleY(1);';
		},
		// 确定外观颜色选择器
		sureColor(){
			this.pickerViewColor = 'transform: scaleY(0);';
			this.pickerViewBgColor = 'transform: scaleY(0);';
			this.waiGuanYanSe = this.Color[waiGuanYanSeIndex].name;
			this.waiGuanYanseEnghlish = this.Color[waiGuanYanSeIndex].type;
		},
		// 关闭外观颜色选择器
		closeColor(){
			this.pickerViewColor = 'transform: scaleY(0);';
			this.pickerViewBgColor = 'transform: scaleY(0);';
		},
		// 确定行驶里程事件
		sureXingShiLiCheng(){
			this.pickerViewBgXingShiLiCheng = 'transform: scaleY(0);';
			this.pickerViewXingShiLiCheng = 'transform: scaleY(0);';
			this.xingShiLiCheng = this.licheng;
		},
		// 打开行驶里程选择器
		openXingShiLiCheng(){
			this.pickerViewBgXingShiLiCheng = 'transform: scaleY(1);';
			this.pickerViewXingShiLiCheng = 'transform: scaleY(1);';
		},
		// 关闭行驶里程选择器
		closeXingShiLiCheng(){
			this.pickerViewBgXingShiLiCheng = 'transform: scaleY(0);';
			this.pickerViewXingShiLiCheng = 'transform: scaleY(0);';
		},
		// 确认时间
		sureShangPaiShiJian(){
			this.pickerView = 'transform: scaleY(0);';
			this.pickerViewBg = 'transform: scaleY(0);';
			var monthNow = this.months[monthIndex];
			if(parseInt(monthNow) < 10){
				monthNow = "0" + monthNow;
			}
			if(this.xuanZeLeiXing == '上牌时间'){
				this.shouCiShangPai = this.years[yearIndex]+'-'+monthNow;
			}else if(this.xuanZeLeiXing == '年审日期'){
				this.nianShenRiQi = this.years[yearIndex]+'-'+monthNow;
			}else if(this.xuanZeLeiXing == '交强险日期'){
				this.jiaoQiangXian = this.years[yearIndex]+'-'+monthNow;
			}
		},
		// 关闭时间选择器
		closeShangPaiShiJian(){
			this.pickerView = 'transform: scaleY(0);';
			this.pickerViewBg = 'transform: scaleY(0);';
		},
		// 点击时间
		chooseTime(indexs){
			if(indexs == 0){
				this.xuanZeLeiXing = '上牌时间';
				this.shiJianPickerTitle = '上牌时间';
			}else if(indexs == 1){
				this.xuanZeLeiXing = '年审日期';
				this.shiJianPickerTitle = '年审日期';
			}else if(indexs == 2){
				this.xuanZeLeiXing = '交强险日期';
				this.shiJianPickerTitle = '交强险日期';
			}
			this.pickerView = 'transform: scaleY(1);';
			this.pickerViewBg = 'transform: scaleY(1);';
		},
		// 燃油类型选择器
		bindChangeRanYou(e){
			const val = e.detail.value;
			ranYouLeiXingIndex = val[0];
		},
		// 环保标准选择器
		bindChangeHuanBao(e){
			const val = e.detail.value;
			huanBaoBiaoZhunIndex = val[0];
		},
		// 车身类型选择器
		bindChangeCheShenLeiXing(e){
			const val = e.detail.value;
			carTypeIndex = val[0];
		},
		// 内饰颜色选择器
		bindChangeCheShiColor(e){
			const val = e.detail.value;
			neiShiYanSeIndex = val[0];
		},
		// 车商选择器
		bindChangeCheShi(e){
			const val = e.detail.value;
			cheShiIndex = val[0];
		},
		// 所属市场选择器
		bindChangeShiChang(e){
			const val = e.detail.value;
			shiChangIndex = val[0]
		},
		// 车商列表选择器
		bindChangeCheShang(e){
			const val = e.detail.value;
			cheShangIndex = val[0]
		},
		// 车场区域选择器
		bindChangeCheChang(e){
			const val = e.detail.value;
			cheChangIndex = val[0]
		},
		// 外观颜色选择器
		bindChangeColor(e){
			const val = e.detail.value;
			waiGuanYanSeIndex = val[0];
		},
		// 行驶里程选择
		bindChangeXingShiLiCheng(e){
			const val = e.detail.value;
			this.licheng = this.liCheng[val[0]];
		},
		// 上牌时间选择器
        bindChange(e) {
            const val = e.detail.value;
			if(val[0] == undefined){
				val[0] = 0;
			}else if(val[1] == undefined){
				val[1] = 0;
			}
			yearIndex = val[0];
			monthIndex = val[1];
        }
    }
}
</script>
