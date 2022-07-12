<template>
	<view class="home">
	<swiper indicator-dots circular>
		<swiper-item :key="index" v-for="(item,index) in swipers">
			<img :src="item.image_src" alt="">
			</swiper-item>
	</swiper>
	<!-- 导航区 -->
	<view class="nav">
		<view class="nav_item" :key=index v-for="(item,index) in navs" @click="navClick(item.navigator_url)">
			<img :src="item.image_src" alt="">
			<!-- <text>{{item.name}}</text> -->
		</view>
		
	</view>
	
	<!-- 推荐商品区 -->
	<view class="hot_goods">
		<view class="tit">
			推荐商品
		</view>
		<goods-list :goods='goods'></goods-list>
		
	</view>
</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				swipers:[],
		navs:[{
            "name": "分类",
            "image_src": "https://api-hmugo-web.itheima.net/pyg/icon_index_nav_4@2x.png",
            "open_type": "switchTab",
            "navigator_url": "/pages/category/main"
        },
        {
            "name": "秒杀拍",
            "image_src": "https://api-hmugo-web.itheima.net/pyg/icon_index_nav_3@2x.png",
			"navigator_url": "/pages/msp/msp"
		},
        {
            "name": "超市购",
            "image_src": "https://api-hmugo-web.itheima.net/pyg/icon_index_nav_2@2x.png",
			"navigator_url": "/pages/csg/csg"
		},
        {
            "name": "母婴品",
            "image_src": "https://api-hmugo-web.itheima.net/pyg/icon_index_nav_1@2x.png",
			"navigator_url": "/pages/myp/myp"
		}],
		goods:[]
			}
		},
		onLoad() {
		this.getSwipers()
		},
		methods: {
			navClick(url){
				uni.navigateTo({
					url
				})
			},			
	async getSwipers(){
			const res=await this.$myRequest({
				url:'/api/public/v1/home/swiperdata'
			})
			this.swipers=res.data.message
			// console.log(this.navs);
			const good=await this.$myRequest({
				url:'/api/public/v1/goods/search'
			})
			this.goods=good.data.message.goods
		}
		},
		components:{
			"goods-list":goodsList
		}
	}
</script>

<style lang="scss">
.home{
	swiper{
		width: 750rpx;
		height: 380rpx;
		image{
			height: 100%;
			width: 100%;
		}
	}
	.nav{
		display: flex;
		.nav_item{
			width: 25%;
			text-align: center;
			image{
				width: 120rpx;
				// height: 120rpx;
				// background-color: $shop-color;
				// border-radius: 60rpx;
				margin: 10px auto;
				height: 120rpx;
				color: #fff;
				
			}
			text{
				font-size: 30rpx;
			}
		}
	}
	.hot_goods{
		background-color: #eee;
		overflow: hidden;
		margin-top: 10px;
		.tit{
			height: 50px;
			line-height: 50px;
			color: $shop-color;
			text-align: center;
			letter-spacing: 20px;
			background-color: #fff;
			margin: 10px 0;
		}

	}
}
</style>
