<template>
	<view class="floor-list">
	<view class="floor-item" v-for='(item,index) in ns' :key="index">
		
			<img :src="item.floor_title.image_src" alt="" class='floor-title'>
		<!-- 楼层图片区域 -->
		<view class="floor-img-box">
		  <!-- 左侧大图片的盒子 -->
		  <view class="left-img-box">
		    <image :src="item.product_list[0].image_src" :style="{width: item.product_list[0].image_width + 'rpx'}" mode="widthFix"></image>
		  </view>
		  <!-- 右侧 4 个小图片的盒子 -->
		  <view class="right-img-box">
		    <view class="right-img-item" v-for="(item2, i2) in item.product_list" :key="i2" v-if="i2 !== 0">
		      <image :src="item2.image_src" mode="widthFix" :style="{width: item2.image_width + 'rpx'}"></image>
		    </view>
		  </view>
		</view>
	</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				ns:[]
			}
		},
		methods:{
			async getNew(){
				const news=await this.$myRequest({
					url:'/api/public/v1/home/floordata'
				})
					this.ns=news.data.message
				console.log(this.ns);
			}
		},
		onLoad(){
			this.getNew()
		}
	}
</script>

<style lang="scss">
	.floor-title{
		height: 60rpx;
		width: 100%;
		display: flex;
	}
	.right-img-box {
	  display: flex;
	  flex-wrap: wrap;
	  justify-content: space-around;
	}
	
	.floor-img-box {
	  display: flex;
	  padding-left: 10rpx;
	}
</style>