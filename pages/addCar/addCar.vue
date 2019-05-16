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
		margin-top: 33upx;
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
		margin-right: 20upx;
		position: relative;
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
		margin-right: 130upx;
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
		margin-right: 20upx;
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
		justify-content: space-between;
		padding: 0 60upx;
		box-sizing: border-box;
	}
	.chooseSure text:active{
		color: #0066FF;
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
			<view class="addImgChild" v-if="carImg.length == 1" @click="goAddCarImg()">
				<image :src="carImg[0]"></image>
			</view>
			<view class="addImgChild" v-else>
				<swiper :indicator-dots="false" :autoplay="true" :interval="5000" :duration="500" :circular="true">
					<swiper-item v-for="(item,index) in carImg" :key="index" @click="goAddCarImg()" indicator-dots="true" indicator-color="#0066ff">
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
			<view class="addDataChild" @click="openCheShi">
				<view class="addDataChildLeft">
					<image src="../../static/addCar/test_ico.png"></image>
					<text>车市区域</text>
				</view>
				<view class="addDataChildRight">
					<image src="../../static/addCar/go.png"></image>
				</view>
				<view class="addDataChildCenter">
					<text class="market">{{ cheShiQuYu }}</text>
				</view>
			</view>
			<view class="addDataChild">
				<view class="addDataChildLeft">
					<image src="../../static/addCar/test_ico.png"></image>
					<text>车商列表</text>
				</view>
				<view class="addDataChildRight">
					<image src="../../static/addCar/go.png"></image>
				</view>
				<view class="addDataChildCenter">
					<text class="addDataChildCenterCenter">{{ cheShangLieBiao }}</text>
				</view>
			</view>
			<view class="addDataChild">
				<view class="addDataChildLeft">
					<image src="../../static/addCar/test_ico.png"></image>
					<text>VIN号</text>
				</view>
				<view class="addDataChildRight">
					<image src="../../static/addCar/go.png"></image>
				</view>
				<view class="addDataChildCenter">
					<input type="text" v-model="VINNumber" placeholder="必填" maxlength="17" />
				</view>
			</view>
			<view class="addDataChild">
				<view class="addDataChildLeft">
					<image src="../../static/addCar/test_ico.png"></image>
					<text>是否上牌</text>
				</view>
				<view class="addDataChildRight">
					<image src="../../static/addCar/go.png"></image>
				</view>
				<view class="addDataChildCenter">
					<switch class="addDataChildCenterCenterPaiLiang" @change="shangPaiChange" />
					<text class="addDataChildCenterCenter">{{ shangPaiText }}</text>
				</view>
			</view>
			<view class="addDataChild" v-if="shangPaiState == 'licensed'">
				<view class="addDataChildLeft">
					<image src="../../static/addCar/test_ico.png"></image>
					<text>车牌号码</text>
				</view>
				<view class="addDataChildRight">
					<image src="../../static/addCar/go.png"></image>
				</view>
				<view class="addDataChildCenter">
					<input type="text" v-model="chePaiHaoMa" placeholder="必填" />
				</view>
			</view>
			<view class="addDataChild" @tap="chooseTime(0)" v-if="shangPaiState == 'licensed'">
				<view class="addDataChildLeft">
					<image src="../../static/addCar/test_ico.png"></image>
					<text>首次上牌时间</text>
				</view>
				<view class="addDataChildRight">
					<image src="../../static/addCar/go.png"></image>
				</view>
				<view class="addDataChildCenter">
					<text class="addDataChildCenterCenter">{{ shouCiShangPai }}</text>
				</view>
			</view>
		</view>
		<!-- 品牌 -->
		<view class="addData">
			<view class="addDataChild" @click="goCheXing">
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
			<view class="addDataChild" @click="openColor">
				<view class="addDataChildLeft">
					<image src="../../static/addCar/test_ico.png"></image>
					<text>外观颜色</text>
				</view>
				<view class="addDataChildRight">
					<image src="../../static/addCar/go.png"></image>
				</view>
				<view class="addDataChildCenter">
					<text class="addDataChildCenterCenter">{{ waiGuanYanSe }}</text>
				</view>
			</view>
			 <!-- @click="openXingShiLiCheng()" -->
			<view class="addDataChild">
				<view class="addDataChildLeft">
					<image src="../../static/addCar/test_ico.png"></image>
					<text>行驶里程</text>
				</view>
				<view class="addDataChildRight">
					<text style="margin-right: 0upx !important;">万公里</text>
					<image src="../../static/addCar/go.png"></image>
				</view>
				<view class="addDataChildCenter">
					<input type="number" v-model="xingShiLiCheng" placeholder="请填写行驶里程" />
					
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
					<text class="addDataChildCenterCenter">{{ nianShenRiQi }}</text>
				</view>
			</view>
		</view>
		<view class="addDataMore">
			<view class="addDataMoreTitle" @tap="openMore">
				<text>更多信息</text>
				<image src="../../static/jianTou.png" mode="" :style="addDataMoreImage"></image>
			</view>
			<view class="addDataMoreCenter" :style="addDataMoreStyle" v-if="addDataMoreState">
				<view class="addDataChild">
					<view class="addDataChildLeft">
						<image src="../../static/addCar/test_ico.png"></image>
						<text>钥匙数量</text>
					</view>
					<view class="addDataChildRight">
						<image src="../../static/addCar/go.png"></image>
					</view>
					<view class="addDataChildCenter addDataChildCenterLeft">
						<input type="number" v-model="yaoShiShuLiang" placeholder="请填写钥匙数量" />
					</view>
				</view>
				<view class="addDataChild" @tap="openCheShiColor()">
					<view class="addDataChildLeft">
						<image src="../../static/addCar/test_ico.png"></image>
						<text>内饰颜色</text>
					</view>
					<view class="addDataChildRight">
						<image src="../../static/addCar/go.png"></image>
					</view>
					<view class="addDataChildCenter addDataChildCenterLeft">
						<text class="addDataChildCenterCenter addDataMoreChildCenterCenter">{{ neiShiYanSe }}</text>
					</view>
				</view>
				<view class="addDataChild" @tap="openCheShenLeiXing">
					<view class="addDataChildLeft">
						<image src="../../static/addCar/test_ico.png"></image>
						<text>车身类型</text>
					</view>
					<view class="addDataChildRight">
						<image src="../../static/addCar/go.png"></image>
					</view>
					<view class="addDataChildCenter addDataChildCenterLeft">
						<text class="addDataChildCenterCenter addDataMoreChildCenterCenter">{{ cheShenLeiXing }}</text>
					</view>
				</view>
				<view class="addDataChild">
					<view class="addDataChildLeft">
						<image src="../../static/addCar/test_ico.png"></image>
						<text>过户次数</text>
					</view>
					<view class="addDataChildRight">
						<image src="../../static/addCar/go.png"></image>
					</view>
					<view class="addDataChildCenter addDataChildCenterLeft">
						<input type="number" v-model="guoHuCiShu" placeholder="请输入过户次数" />
					</view>
				</view>
				<view class="addDataChild" @tap="openHuanBao()">
					<view class="addDataChildLeft">
						<image src="../../static/addCar/test_ico.png"></image>
						<text>环保标准</text>
					</view>
					<view class="addDataChildRight">
						<image src="../../static/addCar/go.png"></image>
					</view>
					<view class="addDataChildCenter addDataChildCenterLeft">
						<text class="addDataChildCenterCenter addDataMoreChildCenterCenter">{{ huanBaoBiaoZhun }}</text>
					</view>
				</view>
				<view class="addDataChild" @tap="openRanYou()">
					<view class="addDataChildLeft">
						<image src="../../static/addCar/test_ico.png"></image>
						<text>燃油类型</text>
					</view>
					<view class="addDataChildRight">
						<image src="../../static/addCar/go.png"></image>
					</view>
					<view class="addDataChildCenter addDataChildCenterLeft">
						<text class="addDataChildCenterCenter addDataMoreChildCenterCenter">{{ ranYouLeiXing }}</text>
					</view>
				</view>
				<view class="addDataChild" @tap="zwkf">
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
				</view>
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
			<view class="addDataChild" v-if="lingShouJiaState == 0">
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
				<text @click="closeShangPaiShiJian()">取消</text>
				<text>{{ shiJianPickerTitle }}</text>
				<text @click="sureShangPaiShiJian">确认</text>
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
				<text @click="closeXingShiLiCheng()">取消</text>
				<test>行驶里程</test>
				<text @click="sureXingShiLiCheng()">确认</text>
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
				<text @click="closeHuanBao()">取消</text>
				<test>环保标准</test>
				<text @click="sureHuanBao()">确认</text>
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
				<text @click="closeColor()">取消</text>
				<test>外观颜色</test>
				<text @click="sureColor()">确认</text>
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
				<text @click="closeCheShenLeiXing()">取消</text>
				<test>车身类型</test>
				<text @click="sureCheShenLeiXing()">确认</text>
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
				<text @click="closeCheShiColor()">取消</text>
				<test>车饰颜色</test>
				<text @click="sureCheShiColor()">确认</text>
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
				<text @click="closeRanYou()">取消</text>
				<test>燃油类型</test>
				<text @click="sureRanYou()">确认</text>
			</view>
			<picker-view @change="bindChangeRanYou">
				<picker-view-column>
					<view class="item" v-for="(item,index) in ranYou" :key="index">{{item.name}}</view>
				</picker-view-column>
			</picker-view>
		</view>
		<!-- 车商名称选择器 -->
		<view class="pickerViewBg" :style="pickerViewBgCheShang"></view>
		<view class="picker-view" :style="pickerViewCheShang">
			<view class="chooseSure">
				<text @click="closeCheShi()">取消</text>
				<test>车市列表</test>
				<text @click="sureCheShi()">确认</text>
			</view>
			<picker-view @change="bindChangeCheShi">
				<picker-view-column>
					<view class="item" v-for="(item,index) in marketList" :key="index">{{item}}</view>
				</picker-view-column>
			</picker-view>
		</view>
	</view>
</template>

<script>
// 车市区域索引  内饰颜色索引  外观颜色索引  汽车类型索引  燃油类型索引  环保标准索引  年份索引 月份索引
var cheShiIndex = 0 , neiShiYanSeIndex = 0 , waiGuanYanSeIndex = 0 , carTypeIndex = 0 , ranYouLeiXingIndex = 0 , huanBaoBiaoZhunIndex = 0 , yearIndex = 0, monthIndex = 0;
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
          { type: 'other', name: '其他' }
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
          { type: 'other', name: '其他' }
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
		pickerViewBgHuanBao: 'transform: scaleY(0);',
		pickerViewHuanBao: 'transform: scaleY(0);',
		pickerViewBgRanYou: 'transform: scaleY(0);',
		pickerViewRanYou: 'transform: scaleY(0);',
		pickerViewBgCheShang: 'transform: scaleY(0);',
		pickerViewCheShang: 'transform: scaleY(0);',
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
		jiaGeMianYi:'否',
		// 车市区域
		cheShiQuYu:'',
		// 车牌号码
		chePaiHaoMa:'',
		// VIN号
		VINNumber:'',
		// 零售价
		lingShouJia:'',
		// 零售价状态
		lingShouJiaState: 1,
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
		cheShangLieBiao: '必填',
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
		this.getCheShiList();
		// this.guanLian();
		this.pinPaiXingHao = events.carName;
		if(this.carImg[0] == '../../static/addCar/addImg.png'){
			this.ifShowImg = true;
		}else{
			this.ifShowImg = false;
		}
	},
	onNavigationBarButtonTap(){
		console.log(this.carImg[0])
		if(this.shangPaiState == 'licensed'&&this.chePaiHaoMa == ''){
			this.showToastGet('请填写车牌号');
		}else if(this.VINNumber == ''){
			this.showToastGet('请填写VIN码');
		}else if(this.shangPaiState == 'licensed'&&this.shouCiShangPai == '必填'){
			this.showToastGet('请选择上牌时间');
		}else if(this.xingShiLiCheng == ''){
			this.showToastGet('请填写行驶里程');
		}else if(this.waiGuanYanseEnghlish == ''){
			this.showToastGet('请选择外观颜色');
		}else if(this.neiShiYanSeEnglish == ''){
			this.showToastGet('请选择内饰颜色');
		}else if(this.pinPaiXingHaoInfo.brandName == ''||this.pinPaiXingHaoInfo.seriesName == ''||this.pinPaiXingHaoInfo.styleName == ''){
			this.showToastGet('请选择品牌车型');
		}else if(this.lingShouJiaState == 0&&this.lingShouJia == ''){
			this.showToastGet('请填写零售价');
		}else if(this.carImg[0] == '../../static/addCar/addImg.png'){
			this.showToastGet('请上传车辆照片');
		}else{
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
			var paiLiangType = 0;
			if(this.paiLiangLeiXing == '否'){
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
			uni.getStorage({
				key:'merchantId',
				success: (resMarketId) => {
					uni.getStorage({
						key: 'marketId',
						success: (resUUid) => {
							params.bodyData = {
								shopId: resMarketId.data,
								marketId: resUUid.data,
								brandName: this.pinPaiXingHaoInfo.brandName,
								seriesName: this.pinPaiXingHaoInfo.seriesName,
								styleName: this.pinPaiXingHaoInfo.styleName,
								styleId: this.pinPaiXingHaoInfo.styleId,
								exteriorColor: this.waiGuanYanseEnghlish,
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
								areaId: this.marketId,
								vin: this.VINNumber,
								currentPlateNumber: this.chePaiHaoMa,
								mileage: this.xingShiLiCheng,
								coverUrl: this.carImg.join(','),
								onlinePriceCents: parseFloat(this.lingShouJia),
								displacement: this.paiLiang
							};
							this.$postRequest('/cars/ADD_CAR',params, (resData) => {
								if(resData.data.code == 0){
									this.showToastGet('录车成功3秒后跳转到列表页面');
									setTimeout( () => {
										uni.navigateTo({
											url: '../vehicleSource/vehicleSource'
										});
									},3000)
								}else{
									this.showToastGet(resData.data.msg);
								}
							})
						}
					})
				}
			})
		}
	},
    methods: {
		// 提示框封装
		showToastGet(msg){
			uni.showToast({
				title: msg,
				icon: 'none',
				mask: false,
				duration: 1500
			});
		},
		// 车辆关联
		guanLian(){
			uni.showLoading({
				title: '正在加载...',
				mask: true
			});
			// /shop/selectByMarketId
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
				params.bodyData = { id: 255 };
				this.$postRequest('/carType/selectInfoByTypeId',params, (resData) => {
					if(resData.data.code == 0){
						this.showToastGet('录车成功3秒后跳转到列表页面');
						uni.navigateTo({
							url: '../vehicleSource/vehicleSource'
						});
					}else{
						this.showToastGet(resData.data.msg);
					}
				})
			}
		},
		// 查询车市列表
		getCheShiList(){
			uni.showLoading({
				title: '正在加载...',
				mask: true
			});
			// /shop/selectByMarketId
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
				uni.getStorage({
					key:'merchantId',
					success: (res) => {
						params.bodyData = {merchantId:res.data};
					}
				})
				// params.bodyData = {};
				this.$postRequest('/market/SELECT_MERCHANT_ALL',params, (resData) => {
					if(resData.data.code == 0){
						var marketData = resData.data.body;
						for(let i in marketData){
							var marketIdJson = {
								marketId:marketData[i].areaId,
								marketName:marketData[i].areaName
							}
							this.marketList.push(marketData[i].areaName);
							this.marketIdList.push(marketIdJson);
						}
						this.cheShiQuYu = marketData[0].areaName;
						this.marketId = marketData[0].areaId;
						uni.getStorage({
							key:'username',
							success: (res) => {
								this.cheShangLieBiao = res.data;
							}
						})
						uni.hideLoading();
					}else{
						uni.showToast({
							title: resData.data.msg,
							icon: 'none',
							mask: false,
							duration: 1500
						});
						uni.hideLoading();
					}
				})
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
			uni.navigateTo({
				url: '../addCarImg/addCarImg?imgArray='+this.carImg
			});
		},
		// 去车型页面
		goCheXing(){
			uni.navigateTo({
				url: '../carBrand/carBrand'
			});
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
			if(e.target.value != true){
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
		// 打开车商选择器
		openCheShi(){
			this.pickerViewCheShang = 'transform: scaleY(1);';
			this.pickerViewBgCheShang = 'transform: scaleY(1);';
		},
		// 确定车商选择器
		sureCheShi(){
			this.pickerViewCheShang = 'transform: scaleY(0);';
			this.pickerViewBgCheShang = 'transform: scaleY(0);';
			this.cheShiQuYu = this.marketIdList[cheShiIndex].marketName;
			this.marketId = this.marketIdList[cheShiIndex].marketId;
		},
		// 关闭车商选择器
		closeCheShi(){
			this.pickerViewCheShang = 'transform: scaleY(0);';
			this.pickerViewBgCheShang = 'transform: scaleY(0);';
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
