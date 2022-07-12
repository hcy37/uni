<template>
	<view class="goods_list">
		<goods-list :goods="goods"></goods-list>
		<view class="isOver" v-if="flag" >
			-----我是有底线的-----
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default{
		data(){
			return {
				goods:[],
				flag:false
			}
		},
	methods:{
		async getGoods(){
			const good=await this.$myRequest({
			url:'/api/public/v1/goods/search'
		})
		this.goods=good.data.message.goods
		}
	},
	components:{
		"goods-list":goodsList
	},onLoad(){
		this.getGoods()
	},onReachBottom(){
		this.flag=true
		// console.log('触底了');
	},onPullDownRefresh(){
		setTimeout(function(){
			uni.stopPullDownRefresh()
		},2000)
	}
}
	
</script>

<style>
	.goods_list{
		background-color: #eee;
	}
	.isOver{
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		/* background-color: #fff; */
		font-style: 28rpx;
	}
</style>