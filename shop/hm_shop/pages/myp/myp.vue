<template>
	<view class="contact">
	<img class='img' src="https://www.itcast.cn/2018czydz/images/gywmban.jpg" alt="">
		<view class="info">
			<view class="" @click="tel">
				联系电话: 400-618-9090(点击拨打)
			</view>
			<view class="">
				校区地址:浙江省杭州市下沙区4号大街187号盛泰时代山
			</view>
		</view>
		<map name="map"></map>
	</view>
</template>

<script>
	export default{
		methods:{
			tel(){
				uni.makePhoneCall({
					phoneNumber:'400-618-9090'
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact{
		.img{
			width: 750rpx;
			height: 320rpx;
		}
		.info{
			padding: 10rpx 20rpx;
			font-size: 30rpx;
			view{
				line-height: 80rpx;
				border-bottom: 1px solid #eee;
			}
		}
	}
</style>