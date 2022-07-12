<template>
	<view class="">
		<button @click="warn(20,$event)">点击</button>
	</view>
</template>

<script>
	export default{
		methods:{
			warn:function(e,num){
				console.log(e,num);
			}
		}
	}
</script>

<style>
</style>