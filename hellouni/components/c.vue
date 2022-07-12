<template>
	<view class="">
		我是c,b数据为:{{num}}ccc
	</view>
</template>

<script>
	export default{
		data(){
		return {num:''}
	},created(){
		uni.$on('cz',num=>{
			this.num=num
		})
	}
	}
	
</script>

<style>
</style>