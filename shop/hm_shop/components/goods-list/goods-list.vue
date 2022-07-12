<template>
	<view class="goods_list">
	<view class="goods_item" :key="index" v-for="(item,index) in goods" >
		<img :src="item.goods_big_logo" alt="">
		<view class="price">
				<text>￥{{item.goods_price}}</text>
				<!-- <text></text> -->
		</view>
		<view class="name">
		{{item.goods_name}}
		</view>
	</view>
	</view>
</template>

<script>
	export default{
		props:['goods']
	}
</script>

<style lang="scss">
	.goods_list{
		padding: 0 15px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
			.goods_item{
				background-color: #fff;
				width: 333rpx;
				margin: 10rpx 0;
				padding: 15rpx;
				box-sizing: border-box;
				img{
					width: 80%;
					height: 150px;
				}
				.price{
					color: $shop-color;
					font-size: 30rpx;
					margin: 20rpx 0 5rpx 0;
				}
				.name{
					font-size: 28rpx;
					line-height: 50rpx;
					padding-bottom: 15rpx;
					padding-top: 10rpx;
				}
			}
		
	}
</style>