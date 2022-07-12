<template>
	<view class="">
		<button @click="get">获取</button>
		<!-- <ul>
			<li :key=index v-for="(item,index) in zy">
				<img :src="item.image_src" alt="">
				<span>{{item.goods_id}}</span>
			</li>
		</ul> -->
	</view>
</template>

<script>
	export default{
		data(){
			return {
				// zy:[]
			}
		},methods:{
			get:function(){
				uni.request({
					url:'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
					success:function(res){
							// this.zy=res.data.message
							// console.log(this.zy);
							console.log(res.data.message);
					}
				})
			}
		}
	}
</script>

<style>
</style>