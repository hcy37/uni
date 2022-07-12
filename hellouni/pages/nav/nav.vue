<template>
	<view class="">
		导航
		<navigator url="/pages/msg/msg" open-type="switchTab">跳转至信息页</navigator>
		<navigator url="/pages/detail/detail">跳转至详情页</navigator>
		<navigator url="/pages/detail/detail" open-type="redirect">跳转至详情页</navigator>
		<button @click="go">跳转列表页</button>
		<button @click="go1">跳转user页</button>
		<button @click="go2">跳转到img页面并关闭当前页面</button>
	</view>
</template>

<script>
	export default{
		
		onUnload(){
			
			console.log('导航页面卸载了');
		},methods:{
			go(){
					console.log('gogo');
				uni.navigateTo({
				url:'/pages/list/list?id=10'
			})
			},go1(){
				console.log('g01');
				//switchTab 仅限于tabbar里面的文件能够跳转
				uni.switchTab({
					url:'/pages/index/index'
				})
			},go2(){
				uni.redirectTo({
					url:'/pages/img/img'
				})
			}
			
			
		}
	}
</script>

<style>
</style>