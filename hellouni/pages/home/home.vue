<template>
	<view class="">
		数据的学习
		<view class="">
			{{msg}}
		</view>
		<view class="">
			<ul>
				<li :key="item.id" v-for="item in list">
				<text>{{item.id}}:</text>
			<text>{{item.name}}</text>	
				</li>
			</ul>
		</view>
		<view class="">
			<img :src="isrc" alt="">
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				msg:'浩浩乎',
				list:[{id:1,name:'hcy'},
				{id:2,name:'cb'},
				{id:3,name:'ly'},
				{id:4,name:'sqq'},
				{id:5,name:'zzg'}],
					isrc:'http://destiny001.gitee.io/image/cxk.gif'
			}
			
		}
	}
</script>

<style>
</style>