<template>
	<view class="">
		<button type="primary" @click="send">上传图片</button>
		<view class="">
			<!-- <image v-for="(item,index) in msg" :src="item" :key="index"></image> -->
		<img v-for="(item,index) in msg" :src="item" alt="" :key='index' @click="see(item)" >
		<!-- #ifdef H5 -->
		<view class="">
			h5页面显示
			现在就是是学习http协议和json还有postman，那个网址是用来测试的
		</view>
		<!-- #endif -->
		
<!-- #ifdef MP-WEIXIN -->
		<view class="">
			微信小程序
		</view>
		<!-- #endif -->
	</view>
	</view>
	
</template>

<script>
	export default{
		data(){
			return {
				msg:[]
			}
		},
		methods:{
			send(){
				uni.chooseImage({
					count:1,
					success:res=>{
						this.msg.push(res.tempFilePaths)
						console.log(this.msg);
					}
				})
			},see (current){
				console.log(1);
				uni.previewImage({
					urls:this.msg,
					current
					
				})
			}
		},
		onLoad(){
			// #ifdef MP-WEIXIN
			console.log('微信小程序');
			//#endif
			// #ifdef H5
			console.log('H5页面');
			//#endif
		}
	}
</script>

<style>
	/* #ifdef H5 */
	view{
		height: 100px;
		line-height: 100px;
		color: palevioletred;
	}
	/* #endif */
	/* #ifdef MP-WEIXIN */
	view{
		height: 100px;
		line-height: 100px;
		color: red;
	}
	/* #endif */
</style>