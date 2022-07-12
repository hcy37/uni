<template>
	<view class="">
		b的数据为:{{num}}
		<button @click="sd">传值</button>
	</view>
</template>

<script>
	export default{
		data(){
		return {num:101}
	},methods:{
		sd(){
			uni.$emit('cz',this.num)
		}
	}
	}
	
</script>

<style>
</style>