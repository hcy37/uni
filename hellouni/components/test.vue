<template>
	<view class="">
		这是test主键
		<view class="">
			{{title}}
		</view>
		<button @click="send">发送</button>
	</view>
	
</template>

<script>
	export default{
		props:['title'],
		data(){
			return {msg:'娘希匹'}
		},
		methods:{
			send(){
				this.$emit('ex',this.msg)
			}
		}
	}
</script>

<style>
</style>